import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowID='1' title='Popular Tv Shows' fetchURL={requests.requestTV}/> 
        <Row rowID='2' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='3' title='Up Coming' fetchURL={requests.UpComing}/> 
        <Row rowID='4' title='Top Rated' fetchURL={requests.PopularPeople}/>     
    </>
  )
}

export default Home