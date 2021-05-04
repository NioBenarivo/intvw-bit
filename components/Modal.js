import Image from 'next/image'

export default function Modal({ display, link, setModalProps }) {
  const handleClose = () => setModalProps({display: false});

  return display ? (
    <div className="modal">
      <div className="popup">
        <Image
          src={link}
          width={640}
          height={480}
          objectFit="contain"
        />
        <button className="modal-close__btn" onClick={handleClose}>&times;</button>
      </div>
    </div>
  ) : '';
}