import React from 'react';
import Figure from './Figure';

const Layout = (props) => {
    const {boardId} = props.match.params;

    function handleDragover(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        const figureType = e.dataTransfer.getData('text');
        props.handleAddFigure(figureType, {x: e.clientX, y: e.clientY}, boardId);
        e.dataTransfer.clearData();
    }

    const figures = [];
    props.layout.map((figure) => {
        if (figure.boardId === boardId) {
            figures.push(<Figure key={'fig_' + figure.id} {...figure}/>);
        }
    });

    return (
        <div className="layout" onDrop={handleDrop} onDragOver={handleDragover}>
            {figures}
        </div>
    );
}

export default Layout;