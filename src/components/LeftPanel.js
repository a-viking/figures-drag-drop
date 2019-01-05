import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LeftPanel = (props) => {
    function handleDrag(e) {
        const layout = document.querySelector('.layout');
        layout.classList.toggle('active');
    }

    return (
        <div className="left-panel">
            <div 
                className="figure-example circle"
                draggable="true"
                onDragStart={handleDrag}
                onDragEnd={handleDrag}
            ></div>
            <div 
                className="figure-example"
                draggable="true"
                onDragStart={handleDrag}
                onDragEnd={handleDrag}
            ></div>
        </div>
    );
}

export default LeftPanel;