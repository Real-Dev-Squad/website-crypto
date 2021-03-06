import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { CartCard } from '@components/cartlist-card';

afterEach(cleanup);
test('cartlist-card component test add and delete product', () => {
  // arrange
  const fakeProduct = {
    name: 'fakeProduct',
    price: 100,
  };
  const add = {
    addCartItem: jest.fn(),
    addShopListItem: jest.fn(),
  };
  const del = {
    delCartItem: jest.fn(),
    delShopListItem: jest.fn(),
  };
  //   const handleAddProduct = jest.fn();
  //   const handleRemoveProduct = jest.fn();

  const { getByText } = render(
    <CartCard details={fakeProduct} add={add} quantity={10} del={del} />
  );

  // act

  fireEvent.click(getByText('+'), fakeProduct.name);
  fireEvent.click(getByText('-'), fakeProduct.name);

  //assert

  expect(add.addCartItem).toHaveBeenCalledTimes(1);
  expect(add.addCartItem).toHaveBeenCalledWith(fakeProduct.name);
  expect(del.delCartItem).toHaveBeenCalledTimes(1);
  expect(del.delCartItem).toHaveBeenCalledWith(fakeProduct.name);
  expect(del.delShopListItem).toHaveBeenCalledTimes(1);
  expect(del.delShopListItem).toHaveBeenCalledWith(fakeProduct.name);
  expect(add.addShopListItem).toHaveBeenCalledWith(fakeProduct.name);
});
