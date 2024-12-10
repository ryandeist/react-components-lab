import './WeatherForecast.css';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <>
            <div className='weather'>
                <h2>{ day }</h2>
                <img src={ img } alt= { imgAlt } />
                <p><span>conditions: </span><br />{ conditions }</p>
                <p><span>time: </span><br />{ time }</p>
            </div>
        </>
    );
};

export default WeatherForecast