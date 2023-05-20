import React from 'react'
import './App.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'


function App() {
    return (
        <div className='app-container'>
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App