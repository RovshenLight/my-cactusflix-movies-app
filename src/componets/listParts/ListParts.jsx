import './listparts.css'
import React, { useState } from 'react'
import { BiPlay } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import imgPoster from '../../assets/image/imagedata'




const ListParts = ({index, movie}) => {

  
  const [isHover, setIsHover] = useState(false);
  const posters = imgPoster();
  const moviePoster = posters[index] || {};

  return (
    
    <div className='listparts' 
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    style={{left: isHover && index * 255 - 40 + index * 2.5}}
    >
    <img src={moviePoster.img} alt={moviePoster.img} />
      {isHover && (
        <>
      <div className="listparts__info">
        <video src={process.env.PUBLIC_URL + 'trailer-nobody.mp4'} autoPlay={true} muted loop preload='auto'></video>
        <div className="listparts__icons">
          <a href="/Watch">
            <BiPlay />
          </a>
        <BiAddToQueue />
        <BiLike />
        <BiDislike />
        </div>
      </div>
      <div className="listparts__info-data">
        <span>{movie.runtime}</span>
        <span className='info__time-iterm'>+16</span>
        <span>{movie.release_date}</span>
      </div>
        <div className="listparts__desc">
          {movie.description}
        </div>
        <div className="listparts__genre">{movie.genre}</div>
        
      </>
      )}
    </div>
  )
}

export default ListParts