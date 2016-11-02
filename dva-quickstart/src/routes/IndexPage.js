


import React from 'react';
import {Link} from 'dva/router'
import { connect } from 'dva';
import { Carousel } from 'antd'
import ProductList from '../components/ProductList';

const Products = (props) => {

  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
      <Carousel afterChange={onChange}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
      <Link to="/page2">我要去page2</Link><br/>
      <Link to="/test_data">我要去test_data</Link>
    </div>
  );
};


// export default Products;
export default connect(({ products}) => ({
  products
}))(Products);