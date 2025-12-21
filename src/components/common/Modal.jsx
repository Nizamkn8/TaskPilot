const Modal = ({ children, modalOpen, modalClose }) => {
  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={modalClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={modalClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
          aria-label="Close modal"
        >
          <span className="text-lg leading-none">×</span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
