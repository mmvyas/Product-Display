import React, { Component } from 'react';
import "./Product.css";

export default class Product extends Component {
  getIndex(){
    return this.props.product.index;
  }

  getName(){
    return this.props.product.productName;
  }

  getPrice(){
    return this.props.product.price;
  }

  getImgSrc(){
    return this.props.product.productImage;
  }

  getIsSale(){
    return this.props.product.isSale;
  }

  getCategory(){
    return this.props.product.type;
  }

  render(){
    if(!this.props.show){
      return null;
    }
    
    
   
    return (
      
      <div className="product" data-category={this.getCategory()}>
        <div className="product-img">
          <img className="" src={this.getImgSrc()} alt={this.getName()} ></img>
        </div>
        
        <h4 className="product-title">{this.getName()}</h4>
        <p className="product-price">{this.getPrice()}</p>
        <div className="sale">
        {this.props.product.isSale ? (<div>On Sale</div>) : (null)}</div>
      </div>
    );
  }
}
