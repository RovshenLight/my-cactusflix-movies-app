import './home.css'
import NavBar from '../../componets/navbar/NavBar'
import Featers from '../../componets/featers/Featers'
import List from '../../componets/list/List'
import Footer from '../../componets/footer/Footer'
import { useEffect, useState } from 'react'




const Home = ({type}) => {


  const [genre, setGenre] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

  setTimeout(() => {
    
    fetch(`http://localhost:7000/movies${genre ? `?genre=${genre}` : ''}`, {signal: abortCont.signal})
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
      if(err.name === 'AboretContent') {
        console.log('Cleaned');
      } else {

        setIsPending(false);
        setError(err.massage);
      }
    })

  }, 1000);

  return () => abortCont.abort();
 }, [type, genre]);
  
  return (
    <div className='home'>
      <NavBar />
      <Featers type={type} setGenre={setGenre}/>
        {data && data.map(dat => <List key={dat.id} dat={dat}/>) }
      <Footer />
    </div>
  )
}

export default Home;