import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Request';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.requestMovie).then((response)=>{
            setMovies(response.data.results)

        })
    },[])

    // console.log(movie);

    const truncateString = (str, num)=>{
         if(str?.length > num){
            return str.slice(0, num) + '...'
         }else{
            return str
         }
    };

  return (
    <div className=' w-full h-[550px] text-white scrollbar-hide'>
        <div className=" w-full  h-full absoluteb bg-gradient-to-r from-black">
            <img className="w-full h-full lg:pt-74 object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className=' absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className=' border border-gray-300 text-black bg-gray-300 px-5 py-2 hover:bg-gray-400'>Play</button>
                    <button className=' border  text-white border-gray-300 px-5 py-2 ml-3'>Watch Later</button>
                    <p className='text-gray-400 text-sm my-2'>
                        Released: {movie?.release_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text- my-2'>
                        {truncateString(movie?.overview, 190)}
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main