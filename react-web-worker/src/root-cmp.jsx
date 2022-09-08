import React, { useRef } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { WebWorker } from './cmps/webWorker.jsx'


export function App() {

    function dueFunc() {
        const audio = new Audio('dog.mp3')
        audio.play()
    }

    return (<Router>
        <main>
            <Routes>
                <Route path='/' element={<WebWorker/>} />
            </Routes>
        </main>
    </Router>
    )
}