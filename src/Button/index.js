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
            key={symbol.key} className="button is-rounded is-light" onKeyPress={
                this.props.handleKeyPress }> {symbol.text}</button>
        )
    }
    render(){
        const symbolEntries = this.props.entries
        const listButtons = symbolEntries.map(this.createSymbols)
        return  (
        <div className="hero-body is-half is-centered">
            <div className="buttons are-medium is-half is-centered "> {listButtons} </div>
        </div>
        )
       
        
    }
}


export default Button;