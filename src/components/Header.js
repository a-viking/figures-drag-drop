import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    const boardNum = window.location.pathname.split('/')[2];
    return (
        <>
            <header>
                <h1 id="board-name">{`Board ${boardNum}`}</h1>
                <div className="board-navigation">
                    <NavLink to='/board/1' className='nav-link' activeClassName='active'>Board 1</NavLink>
                    <NavLink to='/board/2' className='nav-link' activeClassName='active'>Board 2</NavLink>
                    <NavLink to='/board/3' className='nav-link' activeClassName='active'>Board 3</NavLink>
                    <NavLink to='/board/4' className='nav-link' activeClassName='active'>Board 4</NavLink>
                </div>
            </header>
            <div className="content-wrapper">
                {props.children}
            </div>
        </>
    );
}

export default Header;