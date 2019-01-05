import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LeftPanel = (props) => {
    function handleDrag(e) {
        const layout = document.querySelector('.layout');
        layout.classList.toggle('active');
    }

    function handleDragStart(e, figureType) {
        handleDrag();
        e.dataTransfer.setData('text/plain', figureType);
    }

    return (
        <div className="left-panel">
            <div 
                className="figure-example circle"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, 'circle')}
                onDragEnd={handleDrag}
            ></div>
            <div 
                className="figure-example"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, 'rect')}
                onDragEnd={handleDrag}
            ></div>
        </div>
    );
}

export default LeftPanel;