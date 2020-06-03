import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },

    {
        title: 'Blog',
        path: '/blog'
    },

    {
        title: 'Contact Me',
        path: '/contact-me'
    },

    {
        title: 'Login',
        path: '/login'
    }
]

const Navigation = () => {
    return (
        <nav className='site-navigation'>
            <span className='title'>
                Nicholas Wease
            </span>

            <div className='content-container'>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>
                                {link.title}
                                HELLO YOU
                            </Link>
                        </li>
                    ))}
                </ul>

                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={36} />

            </div>
        </nav>
    );
};

export default Navigation;
