import React from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";
import {Button} from "antd";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: "products/delete",
      payload: id,
    });
  }
  function add(){
    dispatch({
      type: "products/add",
      payload: { 
        name: "mty",
        id:Math.random()*10 + 10
       }
    })
  }
  return (
    <div>
      <h2>商品列表</h2>
      <ProductList onDelete={handleDelete} products={products} />
      <Button onClick={add}>添加</Button>

    </div>
  );
};

export default connect(({ products }) => ({ products }))(Products);
