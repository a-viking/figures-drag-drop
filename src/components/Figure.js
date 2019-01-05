import React from 'react';

const Figure = ({type, onDragStart, onDragEnd, x, y}) => {
    const cls = type === 'rect' ? '' : type;
    const position = {top: y + 'px', left: x + 'px'};
    return (
        <div 
            className={`figure-example ${cls} on-layout`}
            draggable="false"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={position}
        ></div>
    );
}

export default Figure;