import { useState, useEffect } from "react";
import close from "../../images/close.svg";
import modalonload from "../../images/modalonload.png";
export default function LoadingPopup() {
  const [isOpen, setIsOpen] = useState(true);

  //   useEffect(() => {
  //     // Auto-close the popup after 5 seconds (optional)
  //     const timer = setTimeout(() => setIsOpen(false), 5000);
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="h-screen w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto flex flex-col justify-center md:justify-end items-end py-5">
          <div className="w-3/4 mx-auto h-auto rounded-md overflow-auto max-h-[750px]">
            <img
              src={modalonload}
              alt="img"
              className="object-contain"
            />
          </div>
          <div className="flex justify-center items-center w-full pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-white/60"
            >
              <img src={close} alt="img" className="size-4" />
            </button>
          </div>
        </div>
      </div>
    )
  );
}
