import path from 'path';
import Image from 'next/image';
import StockOperation from '@components/stock-operation';

export const Card = ({ stock, operationType }) => {
  const { id, stockId, name, stockName, price, quantity, initialStockValue } =
    stock;

  const finalPrice = operationType == 'BUY' ? price : initialStockValue;
  const finalName = operationType == 'BUY' ? name : stockName;
  const finalId = operationType == 'BUY' ? id : stockId;

  return (
    <div className="stock-card">
      <Image
        src={path.join('/assets', 'stock.png')}
        alt={stock.name || stock.stockName}
        width={87}
        height={86}
        objectFit="cover"
        layout="fixed"
      />

      <div className="stock-card__content">
        <p className="stock-card-product-name">
          {stock.name || stock.stockName}
        </p>
        <p className="stock-card-product-quantity">
          {' '}
          Quantity : {stock.quantity}
        </p>
        <p className="stock-card-product-price">
         <i className="dollar">
              <Image
              src={path.join('/assets', 'dollar.png')}
              alt={"dollar sign"}
              width={18}
              height={18}
              objectFit="cover"
              layout="fixed"
            />
          </i> {stock.price || stock.initialStockValue}
        </p>
        <div>
          <StockOperation
            stockId={finalId}
            name={finalName}
            price={finalPrice}
            availableQty={quantity}
          />
        </div>
      </div>
      <style jsx>
        {`
          .stock-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-family: 'Poppins';
            margin: 10px;
            padding-top: 16px;
            border: 1px solid #eee;
            box-shadow: 0 2px 2px #ccc;
            text-align: center;
            min-width: 250px;
            min-height: 297px;
            border-radius: 1.5em;
            transition: 0.2s;
            background: #F6FDFB;
          }
          .stock-card:hover {
            box-shadow: 0px 4px 10px #ccc;
            cursor: pointer;
          }
          .stock-card .img {
            width: 80%;
            flex: 1;
          }
          .stock-card__content {
            text-align: center;
            width: 100%;
            padding: 1rem;
            background-color: #F6FDFB;
            border-radius: 1.5em;
          }

          .stock-card-product-name {
            font-weight: 500;
            font-size: 1.125em;
            color: #540075;
            margin: 0;
          }
          p {
            margin-block-start: 0.5rem;
            margin-block-end: 0.5rem;
          }
          .stock-card-product-price {
            font-weight: bold;
            font-size: 1.125em;
            color: #e30062;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }
          .stock-card-product-price .dollar{
            font-style: normal;
            font-size: 1.1em;
            display: flex;
            justify-content: center;
            align-items: end;
          }
          .stock-card-product-quantity {
            font-size: 0.875em;
            color: #540075;
            margin: 2px;
          }
        `}
      </style>
    </div>
  );
};
