import React from 'react';

class Filter extends React.Component {
    render(){
        return(
            <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filtrar por
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/">Fecha de Creación</a>
                    <a className="dropdown-item" href="/">Fecha de Caducidad</a>
                    <a className="dropdown-item" href="/">Estado Primario</a>
                </div>
            </div>
        )
    }
}
export default Filter;
