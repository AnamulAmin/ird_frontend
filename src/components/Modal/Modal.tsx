import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  showCloseButton?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  duration?: number; // in ms
  scaleEffect?: boolean;
}

const GlassModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  closeOnOutsideClick = true,
  className = "",
  duration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle mount/unmount with transitions
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        if (!isVisible) setIsMounted(false);
        document.body.style.overflow = "auto";
      }, duration);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, duration, isVisible]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  return (
    <>
      {/* Overlay with fade transition */}
      <div
        className="fixed inset-0 z-50 bg-opacity-0 transition-opacity"
        // style={{
        //   backgroundColor: isVisible
        //     ? "rgba(0, 0, 0, 0.5)"
        //     : "rgba(0, 0, 0, 0)",
        //   transitionDuration: `${transitionDuration}ms`,
        // }}
        onClick={closeOnOutsideClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal container with combined transform effects */}
      <div className="fixed inset-0 z-50">
        <div
          ref={modalRef}
          className={`relative w-full rounded-lg bg-transparent text-left ${className}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* Glass panel with border gradient */}
          <div className="relative  rounded-lg overflow-hidden  w-screen h-screen">
            {/* Optional border gradient (comment out if not needed) */}
            <div className="absolute inset-0  pointer-events-none rounded-lg" />

            {/* Content area */}
            <div
              style={{ transitionDuration: `${duration}ms` }}
              className={`w-full h-full transition-all flex justify-end ${
                isVisible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                type="button"
                className="duration-700 transition-all focus:outline-none absolute top-2 right-6 z-40 bg-white rounded-full border border-gray-border"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassModal;
