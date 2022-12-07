import React, { Component } from 'react';

class Componente extends Component{
    render(){
        return <>
            <h2> hola soy un componente </h2>
            <h3> {this.props.msg} </h3>
        </>
    }
}

export default Componente;