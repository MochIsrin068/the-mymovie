import './styles/main.scss'
import MovieContextProvider from './context/MovieContext'
import Routes from './routes'

const App = () => {
  return (
    <MovieContextProvider>
      <Routes />
    </MovieContextProvider>
  )
}

export default App