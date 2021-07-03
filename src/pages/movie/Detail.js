import {useContext, useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

import {MovieContext} from '../../context/MovieContext'
import {IMAGE_BASE_URL_W500, IMAGE_BASE_URL_ORIGINAL} from '../../services/Static'
import Utils from '../../services/Utils'


import MovieCard from '../../components/MovieCard'
import Loader from '../../components/Loader'
import IconArrowUp from '../../assets/icons/arrow-up.png'

const DetailMovie = () => {
    const movieContext = useContext(MovieContext)
    const similiarMovie = movieContext.similiarMovie
    const params = useParams()
    const history = useHistory()
    const movieID = params.id
    const movieDetail = movieContext.movieDetail
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        movieContext.fetchSimiliarMovieAPI(movieID)
        window.scrollTo(0,0)
    }, [])
    

    window.addEventListener('scroll', () => {
        setScrollTop(window.scrollY)
    })


    return(
        <main className="detailMovie">
            <section className="detailMovie__backdrop" style={{background : `url("${IMAGE_BASE_URL_ORIGINAL}${movieDetail.backdrop_path}")`}}>
                <div onClick={() => history.push('/')}>{"<"}&nbsp;&nbsp;Back</div>
            </section>
            <section className="detailMovie__info">
                <div>
                    <img src={`${IMAGE_BASE_URL_W500}${movieDetail.poster_path}`} alt="" />
                    <div>
                        <h3>{movieDetail?.title || "Movie Title"}</h3>
                        <div>
                            <ReactStars count={5} size={16} edit={false} isHalf={true} value={movieDetail?.vote_average || 0}/>
                            <span>{movieDetail?.vote_average || 0} ( {movieDetail?.vote_count || 0} )</span>
                        </div>
                        <div>
                            Release date : {Utils.dateReverse(movieDetail?.release_date || '2021')}
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Overview</h4>
                    <p>{movieDetail?.overview || "-"}</p>
                </div>

                <section className="home__content">
                    {similiarMovie.isLoading || similiarMovie.items.length === 0 ? null : <h2 className="home__content__title">Similiar Movie</h2> }
                    <div className="home__content__list">
                        {similiarMovie.isLoading ? 
                            Array.apply(null, Array(7)).map(item => {
                                return(
                                    <Loader />
                                )
                            })
                        : similiarMovie.items.length === 0 ? null :
                            similiarMovie.items.map(item => {
                                return <MovieCard item={item}/>
                            })
                        }
                    </div>
                </section>
            </section>

            {scrollTop == 0 ? null : 
                <button type="button" onClick={() => window.scrollTo(0, 0)}>
                    <img src={IconArrowUp} alt="" />
                </button>
            }
        </main>
    )
}

export default DetailMovie