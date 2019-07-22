import React, { Component, Fragment } from 'react';
import './App.css';
//Import of json information to build page
import products from './products.json';

//Import of custom Components
import Products from './products/Products';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: props.type,
      options: [
        {
          name: 'All',
          value: '',
        },
       
        {
          name: 'Beer',
          value: 'Beer',
        },
        {
          name: 'Wine',
          value: 'Wine',
        },
        {
          name: 'Cidder',
          value: 'Cider',
        },
        {
          name: 'Spirits',
          value: 'Spirits',
        },
      ],
      
    }
  }

  

  handleChange = filter => {
    this.setState({ selectedCategory: filter.target.value });
  };

  

  render() {
    const { options, value } = this.state;
    let dStyle={
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '1em'
    };
    return (
      
      <div className="App">
        <div className="App-content">
          <h3 className="Page-header">
            Our Products
          </h3>
          <p className="Page-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className="App-sidebar">
        <h3>Filter Products {value}</h3>
        <div className="Dropdown" >
        <select onChange={this.handleChange} style = {dStyle} value={value} onFilter={this.props.onFilter} selected={true}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select> </div> </div>
           
        
        <div className="App-content-products">
          <Products products={products.products} filter={this.state.selectedCategory}/>
        </div>
        
      </div>
    );
  }
}
