import React from 'react';
import Grid from '@material-ui/core/Grid';
export default class Weather extends React.Component {


    renderLabel(name, data) {
        return (<label>{name} <p>{data}</p></label>)
    }

     justHour(time){
        const date = new Date(time);
        const localeSpecificTime = date.toLocaleTimeString();
        return localeSpecificTime.replace(/:\d+ /, ' ');
    }


    renderHourly(weather) {

        return (<Grid item className='weather-detail'>
            {this.renderLabel('Hora', this.justHour(weather.dt_txt))}
            {this.renderLabel('Se siente', weather.main.feels_like)}
            {this.renderLabel('Humedad', weather.main.humidity)}
            {this.renderLabel('Presion', weather.main.pressure)}
            {this.renderLabel('Temp.', weather.main.temp)}
        </Grid>);
    }

    render() {


        if (this.props.info.length > 0) {
            return (<div className='container'>
                <Grid className='grid-day' container  spacing={2}>
                    {this.props.info.map(wheater => {
                        return this.renderHourly(wheater)

                    })}
                </Grid>
            </div>)
        } else {
            return <div>Cargando: </div>
        }
    }
}