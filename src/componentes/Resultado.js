import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Resultado extends React.Component {
  render() {
    const resultado = this.props.resultado;
    const mensaje = !resultado
      ? 'Por favor elige Marca, Año y tipo de seguro para cotizar'
      : 'El total es: $';

    return (
      <div className="gran-total">
        {mensaje}
        <TransitionGroup className="resultado" component="span">
          <CSSTransition
            classNames="resultado"
            key={resultado}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Resultado;
