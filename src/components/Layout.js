import React from 'react';
import Figure from './Figure';

const Layout = (props) => {
    function handleDragover(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        const figureType = e.dataTransfer.getData('text');
        props.handleAddFigure(figureType, {x: e.clientX, y: e.clientY});
        e.dataTransfer.clearData();
    }

    const figures = props.layout.map((figure) => <Figure key={'fig_' + figure.id} {...figure}/>);

    return (
        <div className="layout" onDrop={handleDrop} onDragOver={handleDragover}>
            {figures}
        </div>
    );
}

export default Layout;