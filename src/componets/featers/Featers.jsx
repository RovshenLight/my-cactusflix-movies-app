import './featers.css'
import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { BsInfo } from 'react-icons/bs'
import CTA from '../CTA/CTA'
import Select from 'react-select';
import { useState } from 'react';
import { useEffect } from 'react'
import loanding from '../../assets/loading.gif'
import error404 from '../../assets/error404.gif'
import imgPoster from '../../assets/image/imagedata'

const Featers = ({ type, setGenre}) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posters, setPosters] = useState(imgPoster());
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posters.length) % posters.length);
  };

  useEffect(() => {
    const abortCont = new AbortController();

  setTimeout(() => {
    
    fetch('http://localhost:7000/movies', {signal: abortCont.signal})
    .then((res) => {
      if(!res.ok) {
        throw Error('You Foggot to conecte to port!!! Tip: npx json-server --watch date/date.json --port 8000 and 7000 ');
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setIsPending(false);
    })
    .catch((err) => {
      if(err.name === 'AboretError') {
        console.log('Cleaned');
      } else {
        setIsPending(false);
        setError(err.massage);
      }
    })

  }, 1000);

  return () => abortCont.abort();
 }, []);

  const options = [
    { value: 'comedy', label: 'Comedy'},
    { value: 'crime', label: 'Crime'},
    { value: 'fantasy', label: 'Fantasy'},
    { value: 'historical', label: 'Historical'},
    { value: 'horror', label: 'Horror'},
    { value: 'sci-fi', label: 'Sci-fi'},
    { value: 'thriller', label: 'Thriller'},
    { value: 'western', label: 'Western'},
    { value: 'advanture', label: 'Advanture'},
    { value: 'animation', label: 'Animation'},
    { value: 'drama', label: 'Drama'},
    { value: 'documentar', label: 'Documentar' },
    { value: 'romance', label: 'Romance' }
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    setGenre(selectedOption ? selectedOption.value : null);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      overflow: '',
      cursor: '',
      backgroundColor: '',
      border: '3px ridge greey',
      borderRadius: '10px',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 0, 0, 0.2)' : 'none',
      '&:hover': {
        borderColor: ''
      },
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: '',
      backgroundColor: state.isSelected ? 'rgb(29, 70, 8)' : 'rgb(70, 80, 23)',
      color: state.isSelected ? '#000' : '#fff',
      '&:hover': {
        backgroundColor: 'rgb(84, 76, 40)',
        color: '#000'
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      cursor: '',
      color: '#fff'
    })
  };
  
  return (
    <div className="featers">
      {type && (
        <div className="category">
          <span>{ type === "Movies" ? "Movies" : "Series"}</span>      
          <Select             
              name="genre" id="genre"
              placeholder='Genre'
              onChange={handleChange}
              value={selectedOption}
              styles={customStyles}
              options={options}
              className="custom-select"
            />
        </div>
      )}
      {isPending ||  
      <>
      <button className='swipe' onClick={handlePrevious}><CTA elem={'⏴'} /></button>
      <img src={posters[currentIndex].img} alt="Gallery" />
      <button className='swipe2' onClick={handleNext}><CTA elem={'⏵'}/></button>
      </>
      }     
        <div className="featers__alert">
        {error && <img className='featers__error' src={error404} alt="Error" />}
        {isPending && <img className='featers__loanding' src={loanding} alt="Loanding..." />}
      </div> 
      <div className="desc">
      {data && data[currentIndex] && (
          <>
            <h6>{data[currentIndex].movie_name}</h6>
            <p>{data[currentIndex].description}</p>
          </>
        )}
      <div className="featers__btn">
        <a href="/Watch">
          <button className='play'>
            <CTA elem={<BsPlay />} a='P' b='la' c='y'/>
          </button>
        </a>
      <button className='info'>
        <CTA elem={<BsInfo />} a='I' b='nf' c='o'/>
      </button>
      </div>
      </div>
    </div>
  )
}

export default Featers