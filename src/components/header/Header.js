import React from 'react'
import './header.css'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
function Header() {
    const externalLinks = [
        { id: 'exLink-1', title: 'gmail', url: 'https://www.gmail.com/', icon: <AiOutlineMail /> },
        { id: 'exLink-2', title: 'github', url: 'https://www.github.com/', icon: <AiFillGithub /> },
        { id: 'exLink-3', title: 'stack overflow', url: 'https://stackoverflow.com/', icon: <FaStackOverflow /> },
        { id: 'exLink-4', title: 'linkedin', url: 'https://www.linkedin.com/', icon: <AiOutlineLinkedin /> },
        { id: 'exLink-5', title: 'instagram', url: 'https://www.instagram.com/', icon: <AiOutlineInstagram /> },
    ]
    return (
        <div className='header'>
            <ul className='external-links-menu'>
                {externalLinks.map((link) => (
                    <li key={link.id}><a href={link.url} title={link.title}>{link.icon}</a></li>
                ))}
            </ul>
            <ul className='internal-links-menu'>
                <li><a href="#projects">projects</a></li>
                <li><a href="#">contact me</a></li>
            </ul>
        </div>
    )
}

export default Header