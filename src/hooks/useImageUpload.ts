import imageCompression from "browser-image-compression";
import { removeBackground } from "@imgly/background-removal";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import { notify } from "@/utils/notify";

export function useRemoveX() {
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const [originalsMap, setOriginalsMap] = useState<Record<string, string>>({});
  const originalImage = originalsMap[selectedImage] ?? selectedImage;

  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedOriginals = localStorage.getItem("removex_originals");
      if (savedOriginals) setOriginalsMap(JSON.parse(savedOriginals));

      const savedImages = localStorage.getItem("removex_images");
      const savedImg = localStorage.getItem("removex_selected_image");

      if (savedImages) {
        const parsed = JSON.parse(savedImages);
        if (Array.isArray(parsed)) {
          const validImages = parsed.filter((img): img is string => typeof img === "string").slice(-4);
          setImagesList(validImages);

          if (savedImg) {
            setSelectedImage(savedImg);
            setOriginalsMap((prev) => ({ ...prev, [savedImg]: savedImg }));
          } else if (validImages.length > 0) {
            setSelectedImage(validImages[validImages.length - 1]);
          }
        }
      }
    } catch (e) {
      console.error("Error loading from localStorage:", e);
    }
  }, []);


  const removedForCurrent = Object.keys(originalsMap).find(
    (k) => originalsMap[k] === selectedImage
  );
  const canUndo = !!originalsMap[selectedImage];
  const canRedo = !!removedForCurrent && imagesList.includes(removedForCurrent);

  const handleUndo = () => {
    if (!canUndo) return;
    setSelectedImage(originalsMap[selectedImage]);
  };

  const handleRedo = () => {
    if (!canRedo || !removedForCurrent) return;
    setSelectedImage(removedForCurrent);
  };



  useEffect(() => {
    if (!isMounted) return;
    try {
      if (imagesList.length > 0) {
        localStorage.setItem("removex_images", JSON.stringify(imagesList));
      } else {
        localStorage.removeItem("removex_images");
      }
    } catch (error) {
      console.error("Image saving error:", error);
    }
  }, [imagesList, isMounted]);


  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem("removex_originals", JSON.stringify(originalsMap));
    } catch (error) {
      console.error("Originals saving error:", error);
    }
  }, [originalsMap, isMounted]);


  useEffect(() => {
    if (!isMounted) return;
    try {
      if (selectedImage) {
        localStorage.setItem("removex_selected_image", selectedImage);
      } else {
        localStorage.removeItem("removex_selected_image");
      }
    } catch (error) {
      console.error("Selected image saving error:", error);
    }
  }, [selectedImage, isMounted]);



  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      notify.info("Please select a valid image.");
      e.target.value = "";
      return;
    }

    setIsUploading(true);
    const rawObjectUrl = URL.createObjectURL(file);
    setPreviewUrl(rawObjectUrl);

    const toastId = notify.loading("Uploading image...");

    try {
      const formData = new FormData();
      const fileToUpload =
        file.size > 5 * 1024 * 1024
          ? await imageCompression(file, {
              maxSizeMB: 5,
              maxWidthOrHeight: 4096,
              useWebWorker: true,
            })
          : file;
          
      formData.append("file", fileToUpload);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "your_preset");

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      
      if (data.secure_url) {
        const imageUrl = data.secure_url;

        setSelectedImage(imageUrl);

        setImagesList((prev) => {
          const updated = [...prev, imageUrl].slice(-4); 
          return updated;
        });

      
        const removedBlob = await removeBackground(fileToUpload);

        const removedFile = new File([removedBlob], "removed.png", { type: "image/png" });
        const removedToUpload =
          removedFile.size > 9 * 1024 * 1024
            ? await imageCompression(removedFile, {
                maxSizeMB: 9,
                maxWidthOrHeight: 4096,
                useWebWorker: true,
                fileType: "image/png",
              })
            : removedFile;

        const fd = new FormData();
        fd.append("file", removedToUpload);
        fd.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "your_preset");

        const res2 = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: fd,
        });
        const data2 = await res2.json();

        if (data2.secure_url) {
          const removedUrl = data2.secure_url;
          setSelectedImage(removedUrl);
          setImagesList((prev) => [...prev.slice(0, -1), removedUrl].slice(-4));
          setOriginalsMap((prev) => ({ ...prev, [removedUrl]: imageUrl }));
          notify.update(toastId, "Background removed!", "success");
        } else {
          notify.update(toastId, data2?.error?.message || "Remove upload failed.", "error");
        }
      } else {
        notify.update(toastId, "Cloudinary upload failed.", "error");
      }
    } catch (error) {
      console.error("Processing error:", error);
      notify.update(toastId, "Failed to process image.", "error");
    } finally {
      setIsUploading(false);
      setPreviewUrl("");
      e.target.value = "";
    }
  };

  const handleImageDelete = (url: string) => {
    if (isUploading) return;

    const updatedImages = imagesList.filter((img) => img !== url);
    setImagesList(updatedImages);

    if (selectedImage === url) {
      const previousImage = updatedImages.length > 0 ? updatedImages[updatedImages.length - 1] : "";
      setSelectedImage(previousImage);
    }
    notify.info("Image removed from list.");
  };

  const handleDownload = async () => {
  if (!selectedImage) return;
  try {
    const res = await fetch(selectedImage);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "removed-background.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    notify.success("Image downloaded successfully!");
  } catch {
    notify.error("Download failed.");
  }
};

  return {
    selectedImage,
    originalImage,
    imagesList,
    isUploading,
    previewUrl, 
    fileInputRef,
    handleFileChange,
    setSelectedImage,
    handleImageDelete,
    handleUndo,
    handleRedo,
    handleDownload,
    canUndo,
    canRedo
  };
}