import { useState } from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../redux/action';
import { getCartItems, getCartTotalItems } from '../redux/selector';

function Mock(props) {
  const [item, setItemName] = useState('');
  return (
    <>
      <p>Hello Mock</p>
      <input
        onChange={(e) => setItemName(e.target.value)}
        type="text"
        placeholder="enter item name"
      />
      <button onClick={() => props.addCartItem(item)}> Add Item</button>
    </>
  );
}

const mapStateToProps = (state) => {
  const cartItems = getCartItems(state.addItem);
  return { cartItems };
};

export default connect(mapStateToProps, { addCartItem })(Mock);
