import React from 'react';

const StarShape = ({color="currentColor",outLined=false, height="1em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 432 408">
            {
                outLined ? <path fill={color} d="M427 157L310 258l35 150l-132-80l-132 80l35-150L0 157l153-13L213 3l60 141zM213 289l81 48l-22-91l71-62l-93-8l-37-86l-36 86l-93 8l70 62l-21 91z"></path>
                    :
                    <path fill={color} d="M 427 157 L 310 258 l 35 150 l -132 -80 l -132 80 l 35 -150 L 0 157 l 153 -13 L 213 3 l 60 141 z z"></path>
            }

        </svg>
    );
};

export default StarShape;
