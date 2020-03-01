import React, {Component} from 'react';
import './index.css';


 class Button extends Component{
    
    constructor() {
        super();
    
        this.button = React.createRef();
      }

      componentDidMount() {
        this.button.current.focus();
      }
  

    createSymbols = symbol => {
        return (
            <button
            ref={this.button}
            key={symbol.key} className="button" onKeyPress={
                this.props.handleKeyPress }> {symbol.text}</button>
        )
    }
    render(){
        const symbolEntries = this.props.entries
        const listButtons = symbolEntries.map(this.createSymbols)
        return  (
            <div className="columns is-centered" >
            <div className="column is-half"> {listButtons} </div>
        </div>
        )
       
        
    }
}


export default Button;