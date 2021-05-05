import Image from 'next/image'

export default function Modal({ display = false, link = '', setModalProps = () => {} }) {
  const handleClose = () => setModalProps({display: false});

  return display ? (
    <div className="modal" data-testid="modal-el">
      <div className="popup">
        {
          link && link !== 'N/A' ? 
            <Image
              src={link}
              width={640}
              height={480}
              objectFit="contain"
            />
          : <div className="empty-image">
            <span>No Image</span>
          </div> 
        }
        
        <button className="modal-close__btn" role="button" onClick={handleClose}>&times;</button>
      </div>
    </div>
  ) : '';
}