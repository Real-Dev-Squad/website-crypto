export const CartCard = (props) => {
  const { details: product } = props;
  const handleAddProduct = (item) => {
    console.log(event);
    props.add.addCartItem(item);
    props.add.addShopListItem(item);
  };

  const handleRemoveProduct = (item) => {
    props.del.delCartItem(item);
    props.del.delShopListItem(item);
  };
  return (
    <div className="cartcard-container">
      <img src="" />
      <p> {product.name}</p>
      <p> {product.price}</p>
      <button onClick={() => console.log(product.name)}>Delete Item</button>
      <button onClick={() => console.log(product.name)}>Save for later</button>
      <button onClick={() => handleAddProduct(product.name)}> + </button>
      <button onClick={() => handleRemoveProduct(product.name)}> - </button>
      <p> Quantity : {props.quantity}</p>
    </div>
  );
};
