"use client";

import { useState, useEffect } from "react";
import { useRemoveX } from "@/hooks/useImageUpload";
import Uploads from "./upload";
import UploadEditor from "./UploadEditor";


export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const {
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
  canRedo,
} = useRemoveX();

  useEffect(() => {
  if (isMounted) {
    try {
      fileInputRef.current?.click();
    } catch (e) {}
  }
}, [isMounted]);

  
return (
<>
<input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  accept="image/*"
  className="hidden"
/>

{selectedImage || previewUrl ? (
  <UploadEditor
    selectedImage={selectedImage}
    originalImage={originalImage}
    imagesList={imagesList}
    fileInputRef={fileInputRef}
    onImageSelect={setSelectedImage}
    onImageDelete={handleImageDelete}
    isUploading={isUploading}
    previewUrl={previewUrl} 
    onUndo={handleUndo}
    onRedo={handleRedo}
    onDownload={handleDownload}
    canUndo={canUndo}
    canRedo={canRedo}
  />
) : (
<Uploads onUpload={() => fileInputRef.current?.click()} />
)}
</>
 );
}