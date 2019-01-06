import React from 'react';

const Figure = ({type, x, y, savePosition, id}) => {
    const cls = type === 'rect' ? '' : type;
    const position = {top: y + 'px', left: x + 'px'};

    function handleMouseDown(e) {
        const figure = e.target;
        figure.classList.toggle('moving');
        moveAt(e);

        function moveAt(e) {
            const leftEdge = e.pageX - figure.offsetWidth / 2;
            const topEdge = e.pageY - figure.offsetHeight / 2;
            if (leftEdge < 120 || topEdge < 50) return;

            figure.style.left = leftEdge + 'px';
            figure.style.top = topEdge + 'px';
        }

        document.onmousemove = (e) => {
            moveAt(e);
        }

        e.target.onmouseup = () => {
            savePosition(id, parseInt(figure.style.left), parseInt(figure.style.top));
            figure.classList.toggle('moving');
            document.onmousemove = null;
        }
    }

    return (
        <div 
            className={`figure-example ${cls} on-layout`}
            draggable="false"
            onMouseDown={handleMouseDown}
            style={position}
        ></div>
    );
}

export default Figure;