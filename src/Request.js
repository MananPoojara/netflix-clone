const requests = {
    requestMovie: `https://api.themoviedb.org/3/movie/popular?api_key=(your api key)&language=en-US&page=1`,

    requestTrending: `https://api.themoviedb.org/3/trending/tv/day?api_key=(your api key)&language=en-US&page=5`,

    requestTV: `https://api.themoviedb.org/3/trending/tv/day?api_key=(your api key)&language=en-US&page=2`,
    PopularPeople: `https://api.themoviedb.org/3/trending/tv/week?api_key=(your api key)&language=en-US&page=7`,

    UpComing: `https://api.themoviedb.org/3/trending/tv/day?api_key=(your api key)&language=en-US&page=4`
}

export default requests;