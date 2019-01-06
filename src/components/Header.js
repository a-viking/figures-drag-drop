import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <header className="clearfix">
                <h1 className="left" id="board-name">{'Board'}</h1>
                <div className="board-navigation right">
                    <Link to="/board/1">Board 1</Link>
                    <Link to="/board/2">Board 2</Link>
                    <Link to="/board/3">Board 3</Link>
                    <Link to="/board/4">Board 4</Link>
                </div>
            </header>
            <div className="content-wrapper">
                {props.children}
            </div>
        </>
    );
}

export default Header;