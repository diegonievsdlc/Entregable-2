const Information = ({description, speed, all, gust}) => {
    return (
        <div>
            <ul>
                <li><span>"{description}"</span></li>
                <li><span>Wind speed: </span>{speed} m/s</li>
                <li><span>Clouds: </span>{all}%</li>
                <li><span>Gust: </span>{gust} mb</li>
            </ul>
        </div>
    );
};

export default Information;