import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio } from '../helper';
import { calcularMarca } from '../helper';
import { obtenerPlan } from '../helper';
import Resumen from './Resumen';

class App extends Component {
  state = {
    resultado: 0,
    datos: {}
  };

  cotizarSeguro = datos => {
    const { marca, plan, year } = datos;

    //Precio base
    let resultado = 2000;
    let incrementoPlan = obtenerPlan(plan);

    //Obtener diferecnia de años
    const diferencia = obtenerDiferenciaAnio(year);

    // Por cada año se resta 3% al valor del seguro
    resultado -= (diferencia * 3 * resultado) / 100;

    // Incremento en base a Marca
    resultado *= calcularMarca(marca);

    //Aumento acorde a la cobertura
    resultado *= incrementoPlan;

    //Crear objeto para resumen
    const datosCotizacion = {
      marca: marca,
      plan: plan,
      year: year
    };
    //Actualizar el costto en state
    this.setState({
      resultado: parseFloat(resultado).toFixed(2),
      datos: datosCotizacion
    });
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de Auto" />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />

          <Resumen datos={this.state.datos} resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
