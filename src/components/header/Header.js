import React from 'react'
import './header.css'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
function Header() {
    return (
        <div className='header'>
            <ul className='external-links-menu'>
                <li>
                    <a href="#" title='E-mail'><AiOutlineMail /></a>
                    <a href="#" title='Instagram'><AiOutlineInstagram /></a>
                    <a href="#" title='Linkedin'><AiOutlineLinkedin /></a>
                    <a href="#" title='Github'><AiFillGithub /></a>
                    <a href="#" title='Stack Overflow'><FaStackOverflow /></a>
                </li>
            </ul>
            <ul className='internal-links-menu'>
                <li>
                    <a href="#">html</a>
                    <a href="#">css</a>
                    <a href="#">javascript</a>
                    <a href="#">react</a>
                </li>
            </ul>
        </div>
    )
}

export default Header