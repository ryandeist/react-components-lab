import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherData = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <>
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <p><span>conditions: </span><br />{conditions}</p>
            <p><span>time: </span><br />{time}</p>
        </>
    )
}

export default WeatherData