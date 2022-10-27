import React from 'react'
import MainContent from './MainContent/MainContent'
import './Main.css'
const Main = () => {
    return (
        <>
            <div id='Main'>
                <h1>The Company</h1>
                <h2>Shpipping Time Calculator</h2>
                <input type='date' />
                <input type='dropdown' />
            </div>
            <MainContent />
        </>
    )
}

export default Main