import React, { Component } from "react";
import Button from "./Button";
// import "../node_modules/bulma/css/bulma.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
  
      symbols: [
        { text: "j", key: "898" },
        { text: "k", key: "98" },
        { text: "j", key: "8981" },
        { text: "k", key: "982" }
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
      <div className="App">
        <Button at
          entries={this.state.symbols}
          deleteItem={this.deleteItem}
          handleKeyPress={this.handleKeyPress} 
        />
      </div>
    );
  }
}
export default App;
