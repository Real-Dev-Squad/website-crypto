import path from 'path';
import colors from '../../color/color.json';
import Image from 'next/image';
const SaveLater = (props) => {
  const { details: product } = props;
  const handleMoveToCart = (item) => {
    props.add.addCartItem(item);
    props.add.addShopListItem(item);
    props.remove(item);
  };
  return (
    <div className="savelateritem-container">
      <Image
        src={path.join('/assets', product.image)}
        alt={product.name}
        width={100}
        height={100}
      />
      <span className="savelater-product-name">{product.name}</span>
      <button onClick={() => handleMoveToCart(product.name)}>
        Move to Cart
      </button>
      <style jsx>
        {`
            .savelateritem-container {
                display : flex;
                justify-content: space-evenly;
                align-items: center;
                background-color: ${colors.green.primary};
                padding :5px;
                margin : 2px;
            }
            .savelateritem-container > span {
                font-size:1.5em;
            }
            .savelateritem-container > button {
                border : none;
                padding : 5px;
                height : 2em;
                color : white;
                display: inline-block;
                font-size: 16px;
                background-color : ${colors.blue.primary};
                cursor : pointer;
            }
            @media only screen and (max-width: 600px) {
                .savelateritem-container {
                  flex-direction: column;
                }
            `}
      </style>
    </div>
  );
};

export default SaveLater;
//this should receive a product and a button that will move item to cart with a quantity 1 it will also have del  button
// you cannot have same item in your car and also in save later
