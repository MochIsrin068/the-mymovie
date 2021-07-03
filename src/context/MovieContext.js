import {createContext, useState, useEffect} from 'react'
import API from '../services/API'

export const MovieContext = createContext()

const MovieContextProvider = ({children}) => {
    const [movie, setMovie] = useState({
        isLoading : true,
        items : [],
        parameters : {
            page : 1
        },
        totalResults : 0
    })

    const [similiarMovie, setSimiliarMovie] = useState({
        isLoading : true,
        items : []
    })

    const [movieDetail, setMovieDetail] = useState({})

    const fetchAPIGetMovies = () => {
        API.getMovies(movie.parameters).then(response => {
            if(response.status === 200){
                if(response?.data.status_code){
                    alert(`${response.data.status_message}`)
                }else{
                    setMovie(prevState => ({
                        ...prevState,
                        isLoading : false,
                        items : movie.items.concat(response.data.results),
                        totalResults : response.data.total_results
                    }))
                }
            }   
        })
    }

    const fetchSimiliarMovieAPI = (movieID) => {
        API.getDetailMovie(movieID).then(response => {
            if(response.status === 200){
                if(response?.data.status_code){
                    alert(`${response.data.status_message}`)
                }else{
                    setSimiliarMovie(prevState => ({
                        ...prevState,
                        isLoading : false,
                        items : response.data.results,
                        totalResults : response.data.total_results
                    }))
                }
            }   
        })
    }

    const setMovieDetailData = (data) => {
        setMovieDetail(data)
    }

    const loadMore = () => {
        setMovie(prevState => ({...prevState,parameters : {page : prevState.parameters.page + 1}}))
    }

    useEffect(() => {
        fetchAPIGetMovies()
    }, [movie.parameters.page])

    return (
        <MovieContext.Provider value={{
            movie,
            similiarMovie,
            movieDetail,
            loadMore,
            fetchSimiliarMovieAPI,
            setMovieDetailData,
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider