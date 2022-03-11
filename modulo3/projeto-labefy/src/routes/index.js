import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlists from '../pages/Playlists'

const Rotas = ({ playlists }) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="playlists" element={<Playlists playlists={playlists} />} />
        </Routes>
    )
}

export default Rotas