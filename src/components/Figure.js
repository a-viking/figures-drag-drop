import React from 'react';

const Figure = ({type, onDragStart, onDragEnd, x, y}) => {
    const cls = type === 'rect' ? '' : type;
    const position = {top: y + 'px', left: x + 'px', position: 'absolute'};
    return (
        <div 
            className={`figure-example ${cls}`}
            draggable="false"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={position}
        ></div>
    );
}

export default Figure;