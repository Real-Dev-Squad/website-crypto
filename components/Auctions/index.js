import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from './Auctions.module.css';
import mockAuction from '../../mock/auctions.json';

const BASE_IMAGE_URL =
  'https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members';

const HandleAuctions = () => {
  const [auctionsData, setAuctionsData] = useState(mockAuction);

  const auctionHandler = auctionsData.map((auction) => {
    return (
      <div className={styles.auctionContainer} key={auction.id}>
        <div className={styles.auctionSeller}>
          <Image
            src={`${BASE_IMAGE_URL}/${auction.seller}/img.png`}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.auctionStats}>
          <div className={styles.itemInfo}>
            <h1>
              {auction.quantity} x {'  '}
              <Image
                className={styles.gemImage}
                layout="fixed"
                src="/assets/gem.png"
                width={25}
                height={25}
              />
            </h1>
          </div>
          <div className={styles.currentStatus}>
            <h2>
              Current Bid:
              <div className={styles.currentBidPrice}>
                {auction.highest_bid}
              </div>
            </h2>
          </div>
        </div>
        <div className={styles.bidBtnContainer}>
          <button className={styles.bidBtn}>Bid</button>
        </div>
        <div className={styles.bidders}>
          {auction.bidders_and_bids.map((info) => {
            return (
              <div className={styles.biddersImg} key={info.bidder}>
                <Image
                  src={`${BASE_IMAGE_URL}/${info.bidder}/img.png`}
                  width={80}
                  height={80}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className={styles.mainContainer}>{auctionHandler}</div>;
};

export default HandleAuctions;
