import React, { Component } from "react";
import Button from "./Button";
import "../node_modules/bulma/css/bulma.min.css";

let css = {
  height: '102vh',
  display:'flex',
}

class App extends Component {
  constructor() {
    super();
    this.state = {
  
      symbols: [
        { text: "j", key: "1" },
        { text: "k", key: "2" },
        { text: "j", key: "3" },
        { text: "k", key: "4" },
        { text: "j", key: "5" },
        { text: "k", key: "6" },
        { text: "j", key: "7" },
        { text: "k", key: "8" }
      ]
    };
  }


  deleteItem = key => {
    const filteredItems = this.state.symbols.filter(symbol => {
      return symbol.key !== key;
    });
    this.setState({
      symbols: filteredItems
    });
  };



  handleKeyPress = e => {
      e.preventDefault();
    if (e.key === this.state.symbols[0].text) {
      console.log("это произошло ");
      this.deleteItem(this.state.symbols[0].key)
    }
  };


  render() {
    return (
      <section className="columns has-background-info is-centered has-text-centered" style={css} >
      <div className="column is-half">
          <h1 className="label is-size-3 has-text-white promo"> Тренажер печати 3000</h1>
          <h3 className="subtitle is-size-4 has-text-white has-text-centered name-level"></h3>
          
        <Button at
          entries={this.state.symbols}
          deleteItem={this.deleteItem}
          handleKeyPress={this.handleKeyPress} 
        />
        </div>
     </section>
    );
  }
}
export default App;
