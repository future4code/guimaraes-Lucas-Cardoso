import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import React from 'react'

const Container = styled.div`

`

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/filme/:id' element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App