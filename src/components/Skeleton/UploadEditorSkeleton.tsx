
export default function UploadEditorSkeleton() {
  return (
    <div className="fixed inset-0 pt-30 flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-white select-none animate-pulse">

      <div className="w-full h-full flex flex-col">

      
        <header className="px-10 py-2 flex justify-center items-center">
          <div className="bg-white flex items-center justify-between shadow-[0_0_4px_rgba(0,0,0,0.12)] rounded-full px-5 py-3">
            <div className="flex items-center gap-5">

              <div className="w-6 h-6 rounded bg-gray-200" />
              <div className="w-6 h-6 rounded bg-gray-200" />
              <div className="w-6 h-6 rounded bg-gray-200" />

              <div className="w-32 h-11 rounded-full bg-gray-200" />

            </div>
          </div>
        </header>


        <main className="flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-[350px] sm:max-w-[400px] h-[260px] sm:h-[240px] rounded-4xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-200">

            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite]" />

          </div>

        </main>

    
        <footer className="w-full pb-8 pt-2 px-4">

          <div className="max-w-md mx-auto flex items-center justify-center gap-3 p-3">

            
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gray-200" />

         
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 overflow-hidden py-2">

                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gray-200"
                  />
                ))}

              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
