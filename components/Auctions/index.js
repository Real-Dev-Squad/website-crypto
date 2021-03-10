import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './Auctions.module.css';
import fetchData from '../../utils/fetchData';
import fetchSelfDetails from '../../utils/fetchSelfDetails';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const AUCTIONS_URL = `${BASE_API_URL}/auctions`;
const BASE_IMAGE_URL =
  'https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members';

const HandleAuctions = () => {
  const [auctionsData, setAuctionsData] = useState([]);
  const [userBid, setUserBid] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [selfUsername, setSelfUsername] = useState();
  const [fetchAuctions, setFetchAuctions] = useState(0);

  useEffect(() => {
    fetchAndSetAuctions();
  }, []);

  useEffect(() => {
    fetchSelfDetails()
      .then((res) => {
        if (res.status === 200) {
          setSelfUsername(res.username);
          setIsUserLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log('User is not logged in', err);
      });
  }, []);

  const fetchAndSetAuctions = async () => {
    const response = await fetchData('http://localhost:3000/auctions.json');
    const json = await response.json();
    setAuctionsData(json);
  };

  const handleNewBid = async (e, auctionId) => {
    e.preventDefault();
    const reqBody = { my_latest_bid: userBid };
    const response = await fetchData(`${AUCTIONS_URL}/${auctionId}`, 'POST', {
      credentials: 'include',
      body: JSON.stringify(reqBody),
    });
    const { status } = await response;
    if (status === 204) {
      setFetchAuctions(fetchAuctions + 1);
    }
  };

  const validateBid = (userBid, highestBid) => {
    if (userBid <= highestBid) alert('You must bid higher than current bid!');
    else setUserBid(userBid);
  };

  const auctionHandler = auctionsData.map((auction) => {
    const { id, seller, quantity, highest_bid, bidders_and_bids } = auction;
    return (
      <div className={styles.auctionContainer} key={id}>
        <div className={styles.auctionSeller}>
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
            onSubmit={(e, id) => handleNewBid(e, id)}
          >
            <input
              className={styles.inputBid}
              type="number"
              min={parseInt(highest_bid) + 1}
              required="true"
              onBlur={(e) => validateBid(e.target.value, highest_bid)}
            />
            <button type="submit" className={styles.bidBtn}>
              Bid
            </button>
          </form>
        </div>
        <div className={styles.bidders}>
          {bidders_and_bids.map((info) => {
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
