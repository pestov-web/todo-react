function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: boolean;
  children: React.ReactNode;
}) {
  if (isOpen)
    return (
      <div className="modal">
        <div className="modal__container">
          <h2 className="modal__title">Modal Title</h2>
          <button className="modal__close-button">Close</button>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
}

export default Modal;
