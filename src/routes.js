import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Home from './pages/home'
import DetailMovie from './pages/movie/Detail'

const router = () => {
    return (
        <Router>
            <Switch>
                <Route path="/detail/:id" component={DetailMovie}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default router