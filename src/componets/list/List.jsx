import './list.css'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
import ListParts from '../listParts/ListParts'
import { useRef } from 'react'
import { useEffect } from 'react'
import useFetch from '../usefetch/useFetch'
import loanding from '../../assets/loading.gif'
import error404 from '../../assets/error404.gif'

const List = ({dat }) => {
      
  const { data: movies, error, isPending } = useFetch('http://localhost:7000/movies');

  useEffect(() => {

    setTimeout(() => {
      
      fetch('http://localhost:7000/movies', {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
      })

    }, 1000);

}, [])


  const [slideList, setSlideList] = useState(0);
  const [whenMove, setWhenMove] = useState(false);
  const listRef = useRef();

  const handleScroll = (direct) => {
    setWhenMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if(direct === 'left' && slideList > 0) {
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
      setSlideList(slideList - 1);
    }
    if(direct === 'right' && slideList < 7 ) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideList(slideList + 1);
    }
  }


  return (

    <div className='list'>
      <div className='list__alert'>
        {error && <img className='list__error' src={error404} alt="Error" />}
        {isPending && <img className='list__loanding' src={loanding} alt="Loanding..." />}
      </div>
          {movies && (
            <div className='list__wrapper' key={dat.id}>
              <span className='list__title'>{dat.genre}</span>
                  <div className="wrapper">
                      <BiChevronLeft className='list__svg left' onClick={() => handleScroll('left')} style={{display: !whenMove && 'none' }} />
                      <div className="list__container" ref={listRef}>
                        {movies.map((movie, index) => (
                          <>
                          <ListParts index={index} movie={movie}/>
                          </>
                        ))}
                  </div>
              <BiChevronRight className='list__svg right' onClick={() => handleScroll('right')} />
        </div>
      </div>
    )}
    </div>
  )
}

export default List