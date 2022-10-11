import styled from 'styled-components'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'

const Container = styled.div`

`

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/filme/:movieName' component={MoviePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App