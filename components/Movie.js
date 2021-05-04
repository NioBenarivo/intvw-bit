import Image from 'next/image'
import Link from 'next/link'

export default function Movie({ data, openModal }) {
  const imgSrc = data.Poster || '';
  const title = data.Title || '';
  const year = data.Year || '';
  const imdbID = data.imdbID || '';

  return (
    <div className="movie" >
      {
        imgSrc && imgSrc !== 'N/A' ?
          <Image 
            alt={title}
            src={imgSrc}
            width={240}
            height={240}
            objectFit="contain"
            onClick={() => openModal(imgSrc)}
          /> : 
          <div className="empty-image">
            <span>No Image</span>
          </div>
      }
      
      <h4>{title}</h4>
      <p>{year}</p>
      <Link href={`/movies/${imdbID}`}>
        <a>See details</a>
      </Link>
    </div>
  )
}