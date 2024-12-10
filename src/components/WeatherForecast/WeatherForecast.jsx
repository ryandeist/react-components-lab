import './WeatherForecast.css';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = ( forecast ) => {
    return (
        <>
            <div className='weather'>
                <WeatherData 
                img={forecast.img}
                imgAlt={forecast.imgAlt}
                day={forecast.day}
                conditions={forecast.conditions}
                time={forecast.time}
                />
            </div>
        </>
    );
};

export default WeatherForecast