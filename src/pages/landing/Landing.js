import React from 'react'
import './landing.css'
import Logo from './logo.svg'

export default () => {
    return (
        <div className={'landing'}>
            <div>
                <div className={'title-container'}>
                    <h1 className={'title'}>ROB MOORE</h1>
                    <h2 className={'sub-title'}>WEB DEVELOPMENT</h2>
                    <img className={'logo'}
                         src={Logo} alt=""/>
                </div>
                <div className={'bottom-container'}>
                    <p>DISCOVER</p>
                    <Dot/>
                    <p>DESIGN</p>
                    <Dot/>
                    <p>DEVELOP</p>
                    <Dot/>
                    <p>DEPLOY</p>
                </div>
            </div>
        </div>
    )
}

const Dot = () => {
    return(
        <div className={'dot'}/>
    )
}