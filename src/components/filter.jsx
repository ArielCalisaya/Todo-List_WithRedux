import React from 'react';

class Filter extends React.Component {
    render(){
        return(
            <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filtrar por
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <option className="dropdown-item" value=""></option>
                    <option className="dropdown-item" value="">Fecha de Creación</option>
                    <option className="dropdown-item" value="male">Fecha de Caducidad</option>
                    <option className="dropdown-item" value="female">Estado Primario</option>
                </div>
            </div>
        )
    }
}
export default Filter;
// TODO: Agregar Filter usar como referencia, el sig ej:


    // var filterData = [
    //    { name: 'Matthew', sex: 'male' },
    //    { name: 'Amanda', sex: 'female' },
    //    { name: 'rolando', sex: 'male' },
    //    { name: 'cecilia', sex: 'female' }
    //   ];
    //  var FilterForm = React.createClass({
    //    getInitialState: function() {
    //      return {
    //        data: this.props.data,
    //        sex: ''
    //      }
    //    },
    //    handleChange: function(val) {
    //      this.setState({sex: val});
    //      var filteredData = this.props.data.filter(function(item) {
    //        return item.sex === val;
    //      });
    //      this.setState({data: filteredData});
    //      console.log(filteredData, val);
    //    },
    //    render: function() {
    //      return (
    //        <div className="filter-form">
    //          <h1>Filter Form</h1>
    //          <FilterOptions data={this.state.data} changeOption={this.handleChange} />
    //          <FilterItems data={this.state.data} />
    //        </div>
    //      );
    //    }
    //  });
    //  var FilterOptions = React.createClass({
    //    getInitialState: function() {
    //      return {
    //        data: this.props.data,
    //        sex: ''
    //      }
    //    },
    //    handleChange: function(e) {
    //      var val = e.target.value;
    //      this.setState({sex: val});
    //      this.props.changeOption(val);
    //    },
    //    render: function() {
    //      return (
    //        <select id="sex" value={this.state.sex} onChange={this.handleChange}>
    //          <option value=""></option>
    //          <option value="male">male</option>
    //          <option value="female">female</option>
    //        </select>
    //      );
    //    }
    //  });
    //  var FilterItems = React.createClass({
    //    render: function() {
    //      return (
    //        <div className="filter-item">
    //          {this.props.data.map(function(item) {
    //            return (
    //              <div>{item.name}</div>
    //            );
    //          })}
    //        </div>
    //      );
    //    }
    //  });
    //  React.render(
    //    <FilterForm data={filterData} />,
    //    document.getElementById('app')
    //  );
