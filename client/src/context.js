import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{

    constructor(props){
        super(props);

        this.state = {
        }
    };

    render() {
        return(
            <Context.Provider>
            {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;