import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BASE_IMAGE_URL } from 'constants.js';
import styles from './Auctions.module.css';
import fetchData from '../../utils/fetchData';
import fetchSelfDetails from '../../utils/fetchSelfDetails';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const AUCTIONS_URL = `${BASE_API_URL}/auctions`;

const HandleAuctions = () => {
  const [auctionsData, setAuctionsData] = useState([]);
  const [userBid, setUserBid] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAndSetAuctions();
  }, []);

  useEffect(() => {
    fetchSelfDetails()
      .then((res) => {
        if (res.status === 200) {
          setIsUserLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log('User is not logged in', err);
      });
  }, []);

  const fetchAndSetAuctions = async () => {
    const response = await fetchData(`${AUCTIONS_URL}`);
    const json = await response.json();
    setAuctionsData(json.auctions);
    setIsLoading(false);
  };

  const handleNewBid = async (e, auctionId) => {
    if (!isUserLoggedIn) {
      return alert('Please log in to bid!');
    }
    setIsLoading(true);
    e.preventDefault();
    const reqBody = { bid: userBid };
    const response = await fetchData(
      `${AUCTIONS_URL}/bid/${auctionId}`,
      'POST',
      {
        credentials: 'include',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const { status } = await response;
    if (status === 204) {
      fetchAndSetAuctions();
      setIsLoading(false);
    }
  };

  const validateBid = (userBid, highestBid) => {
    if (userBid <= highestBid) alert('You must bid higher than current bid!');
    else setUserBid(userBid);
  };

  const getColumns = (totalBidder) => {
    return totalBidder <= 12 ? Math.ceil(totalBidder / 2) : 7;
  };

  const auctionHandler = auctionsData.map((auction) => {
    const { id, seller, quantity, highest_bid, bidders } = auction;
    return (
      <div className={`${styles.auctionContainer} ${id}`} key={id}>
        <div className={styles.auctionSeller}>
          <h2>Seller:</h2>
          <Image
            src={`${BASE_IMAGE_URL}/${seller}/img.png`}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.auctionStats}>
          <div className={styles.itemInfo}>
            <h1>
              {quantity} x {'  '}
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
              <div className={styles.currentBidPrice}>{highest_bid}</div>
            </h2>
          </div>
        </div>
        <div>
          <form
            className={styles.bidOptions}
            onSubmit={(e) => handleNewBid(e, id)}
          >
            <input
              className={styles.inputBid}
              type="number"
              min={parseInt(highest_bid) + 1}
              required={true}
              onBlur={({ target: { value } }) =>
                validateBid(value, highest_bid)
              }
            />
            <button type="submit" className={styles.bidBtn}>
              Bid
            </button>
          </form>
        </div>
        <div className={styles.bidders}>
          {bidders.map((bidder) => {
            return (
              <div
                className={styles.biddersImg}
                key={bidder}
                data-columns={getColumns(bidders.length)}
                title={bidder}
              >
                <Image
                  src={`${BASE_IMAGE_URL}/${bidder}/img.png`}
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

  return (
    <div className={styles.mainContainer}>
      <h2>{isLoading ? 'Please wait...' : 'Ongoing Auctions:'}</h2>
      {auctionHandler}
    </div>
  );
};

export default HandleAuctions;
