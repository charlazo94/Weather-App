import React from 'react';

export default class Weather extends React.Component {


    renderLabel(name, data) {
        return (<label>{name} <p>{data}</p></label>)
    }

    renderHourly(weather) {

        return (<div>
            {this.renderLabel('Hora', weather.dt_txt)}
            {this.renderLabel('Se siente', weather.main.feels_like)}
            {this.renderLabel('Humedad', weather.main.humidity)}
            {this.renderLabel('Presion', weather.main.pressure)}
            {this.renderLabel('Temperatura', weather.main.temp)}
        </div>);
    }

    render() {


        if (this.props.info.length > 0) {
            return (<div>{this.props.info.map(wheater => {
                return this.renderHourly(wheater)
            })}</div>)
        } else {
            return <div>Cargando: </div>
        }
    }
}