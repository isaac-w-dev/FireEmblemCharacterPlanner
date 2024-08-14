import React from 'react'
const Nav = (props) => {
    const { title } = props;
    return (
        <header>
            <nav className='d-flex justify-content-around border bg-dark text-white'>
                <div className='left'>
                    <h1>{title}</h1>
                </div>
            </nav>
        </header>
    )
}

export default Nav