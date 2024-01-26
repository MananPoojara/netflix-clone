import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import { FaPlay } from 'react-icons/fa';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows || []); // Initialize as an empty array if undefined
    });

    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, [user?.email]);

  return (
    <>
      <h2 className=' text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className=' relative flex items-center group scrollbar-hide'>
        <MdChevronLeft
          size={40}
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <div key={id} className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
              <img className=' w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
              <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <div><FaPlay size={30} className=' justify-center items-center top-4 left-8 md:top-2 md:left-4 sm:top-10 sm:left-20 absolute md:my-14 md:mx-20'>

                    </FaPlay></div>
                <p className=' whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.name}</p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
    </>
  );
};

export default SavedShows;
