import React, { useEffect } from 'react'
import Search from './Search/Search'
import MovieCard from './MovieCard/MovieCard'
import axios from "axios";
import { useState } from 'react';
import NotFound from './NotFound/NotFound';
function Home() {
  const [movies , setMovies] = useState([])
  const getMovies = async ()=>{
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9')
    setMovies(response.data.results)
  }
  useEffect(()=>{
    getMovies()
    console.log(getMovies())
  },[])

  const search = async (query)=>{
    if (query ==='') {
      getMovies()
    }else{
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`)
      setMovies(response.data.results)
    }
  }
  return (
    <div className="home">
        <Search
        search = {search}
        />
      <div className="container py-5">
        <h2 className='my-5'>Latest Movies and TV Shows</h2>
        <div className="row my-5">
        {movies.length >= 1?(movies.map((item)=>{
          return(<MovieCard
            item={item}
            key={item.id}
            />)
        })):(<NotFound/>)}
        </div>
        
      </div>
    </div>
  )
}

export default Home