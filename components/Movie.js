import Image from 'next/image'
import Link from 'next/link'

export default function Movie({ data = {}, onClick = () => {}, searchLayout = false }) {
  const imgSrc = data.Poster || '';
  const title = data.Title || '';
  const year = data.Year || '';
  const imdbID = data.imdbID || '';

  return (
    <div 
      data-testid="movie-el"
      className={searchLayout ? "movie-dropdown" : "movie"} 
      onClick={searchLayout ? () => onClick() : null}
    >
      {
        imgSrc && imgSrc !== 'N/A' ?
          <Image 
            alt={title}
            src={imgSrc}
            width={searchLayout ? 40 : 240}
            height={searchLayout ? 40 : 240}
            objectFit="contain"
            onClick={!searchLayout ? () => onClick(imgSrc) : null}
          /> : 
          <div className="empty-image">
            <span>No Image</span>
          </div>
      }
      <div className="flex flex-column">
        <h4>{title}</h4>
        <p>{year}</p>
      </div>
      {
        searchLayout ? '' :
        <Link href={`/movies/${imdbID}`}>
          <a>See details</a>
        </Link>
      }
    </div>
  )
}