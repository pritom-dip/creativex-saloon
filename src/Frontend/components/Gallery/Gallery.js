import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Gallery.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Gallery = ({ image }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col-md-4 col-sm-12 col-xs-12 mb-3">
            <animated.div
                className="gallery-card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans), backgroundImage: 'url(' + image + ')' }}
            />
        </div>
    );
};

export default Gallery;