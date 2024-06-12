import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    addItem: "",
    items: [],
    isEditing: false,
    currentIndex: null
  };

  handleChange = (event) => {
    this.setState({ addItem: event.target.value });
  };

  handleAdd = () => {
    const { addItem, items, isEditing, currentIndex } = this.state;
    if (addItem !== "") {
      if (isEditing) {
        const updatedItems = items.map((item, index) =>
          index === currentIndex ? addItem : item
        );
        this.setState({
          items: updatedItems,
          addItem: "",
          isEditing: false,
          currentIndex: null
        });
      } else {
        this.setState({
          items: [...items, addItem],
          addItem: ""
        });
      }
    }
  };


  handleDelete = (index) => {
    const { items } = this.state;
    const updatedItems = items.filter((item, i) => i !== index);
    this.setState({ items: updatedItems });
  };

  handleEdit = (index) => {
    const { items } = this.state;
    this.setState({
      addItem: items[index],
      isEditing: true,
      currentIndex: index
    });
  };

  render() {
    const { addItem, items } = this.state;
    return (
      <div className='App'>
        <div className='InputItem'>
          <input
            name='input'
            type='text'
            value={addItem}
            onChange={this.handleChange}
            placeholder='time to be productive'
          />
        </div>
        <div>
          <button onClick={this.handleAdd}>
           add item
          </button>
        </div>
        <ul className="item-list">
        {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
