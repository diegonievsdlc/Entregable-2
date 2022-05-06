import React from 'react';

const Info = ({text1, text2, text3, text4}) => {
    return (
        <div>
            <ul>
                <li><span>"{text1}"</span></li>
                <li><span>Wind speed: </span>{text2} m/s</li>
                <li><span>Clouds: </span>{text3}%</li>
                <li><span>Gust: </span>{text4} mb</li>
            </ul>
        </div>
    );
};

export default Info;