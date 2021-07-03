import {useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {MovieContext} from '../context/MovieContext'

import {IMAGE_BASE_URL_W500} from '../services/Static'
import Utils from '../services/Utils'


const MovieCard = ({item = {poster_path : null, title : "Movie Title", release_date : "20 July 2021"}}) => {
    const history = useHistory()
    const movieContext = useContext(MovieContext)

    return (
        <div className="movieCard" onClick={() => {
            new Promise((resolve, reject) => {
                movieContext.setMovieDetailData(item)
                resolve(true)
            }).then(() => {
                history.push(`/detail/${item.id}`)
            })
        }}>
            <img src={`${IMAGE_BASE_URL_W500}${item.poster_path}`} alt="" />
            <div className="movieCard__info">
                <h3 title={item.title}>{item.title}</h3>
                <p>{Utils.dateReverse(item.release_date)}</p>
            </div>
        </div>
    )
}

export default MovieCard