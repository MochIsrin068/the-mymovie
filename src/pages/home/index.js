
import {useContext, useState, useEffect} from 'react'

import Jumbotron from './components/Jumbotron'
import MovieCard from '../../components/MovieCard'

import {MovieContext} from '../../context/MovieContext'
import Loader from '../../components/Loader'

import IconArrowUp from '../../assets/icons/arrow-up.png'

const Home = () => {
    const movieContext = useContext(MovieContext)
    const movie = movieContext.movie

    const [scrollTop, setScrollTop] = useState(0)

    window.addEventListener('scroll', () => {
        setScrollTop(window.scrollY)
    })

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <main className="home">
            <Jumbotron />
            <div className="home__content">
                <h2 className="home__content__title">Now Playing</h2>
                <div className="home__content__list">
                    {movie.isLoading ? 
                        Array.apply(null, Array(7)).map(item => {
                            return(
                                <Loader />
                            )
                        })
                    :
                        movie.items.map(item => {
                            return <MovieCard item={item}/>
                        })
                    }
                </div>
                {movie.totalResults === movie.items.length ? null : <div onClick={movieContext.loadMore} className="home__content__loadMore">Click To Load More...</div>}
            </div>
            
            {scrollTop == 0 ? null : 
                <button type="button" onClick={() => window.scrollTo(0, 0)}>
                    <img src={IconArrowUp} alt="" />
                </button>
            }
        </main>
    )
}

export default Home