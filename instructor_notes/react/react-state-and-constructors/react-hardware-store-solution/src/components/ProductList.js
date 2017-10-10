import React, { Component } from 'react'

import Product from './Product'

class ProductList extends Component {
  dedupeAndCountQuantity(productArray) {
    let dedupedProducts = []
    
    productArray.forEach((originalProduct)=>{
      originalProduct.quantity = 0;
      let isNewProduct = true;

      dedupedProducts = dedupedProducts.map((uniqueProduct, index)=>{
        if(originalProduct.productName == uniqueProduct.productName){
          originalProduct.quantity = uniqueProduct.quantity + 1
          isNewProduct = false;
          return originalProduct;
        } else {
          return uniqueProduct;
        }
      });
      if(isNewProduct){
        dedupedProducts.push(originalProduct);
      }
    });

    return dedupedProducts;
  }
  render () {
    const productList = this.dedupeAndCountQuantity(this.props.productList)
    const productComponents = productList.map((product, index) => {
      return <Product
        viewMode={this.props.viewMode}
        productName={product.productName}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        key={index}
        index={index}
        deleteProductFromListByIndex={this.props.deleteProductFromListByIndex}
        addProductToCart={this.props.addProductToCart}
        removeProductFromCart={this.props.removeProductFromCart}/>
    })
    return (
      <div>
        {productComponents}
      </div>
    )
  }
}

export default ProductList
