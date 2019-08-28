import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello World",
      monsters: [],
      searchField: ""
    };

  }
  // When this component mounts - when react puts it for the 1st time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox 
        placeholder='search monsters...'
        handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
// props.children is what's inside the closing tags
export default App;
