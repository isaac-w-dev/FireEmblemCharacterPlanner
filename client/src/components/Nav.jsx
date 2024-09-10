import React from 'react'
const Nav = (props) => {
    const { title } = props;
    return (
        <header>
            <nav className='flex justify-center bg-dark text-white'>
                <div className=''>
                    <h1>{title}</h1>
                </div>
            </nav>
        </header>
    )
}

export default Nav