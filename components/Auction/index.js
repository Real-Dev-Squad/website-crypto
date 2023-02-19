import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BASE_IMAGE_URL } from 'constants.js';
import styles from './Auction.module.css';
import fetchData from '../../utils/fetchData';
import fetchSelfDetails from '../../utils/fetchSelfDetails';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const AUCTIONS_URL = `${BASE_API_URL}/auctions`;
const WALLET_URL = `${BASE_API_URL}/wallet`;

const auctionMockData = [
  {
    id: '4e1S5xsuFA8XFm37We57',
    start_time: 1615666096945,
    item: 'Pigs',
    end_time: 1903637296536,
    highest_bid: '999999999',
    highest_bidder: 'harshith',
    quantity: '100',
    seller: 'rajakvk',
    bidders: ['rajakvk', 'prakash', 'ankush', 'harshith'],
  },
  {
    id: '8ZXE6fMfpVRfEU74HeRV',
    highest_bid: '9999999999999',
    start_time: 1615666322572,
    seller: 'ankush',
    end_time: 2479666321898,
    item: 'Monkeys',
    quantity: '1000000000',
    highest_bidder: 'deipayan',
    bidders: ['harshith', 'prem', 'ankush', 'deipayan', 'prakash'],
  },
];

const HandleAuctions = () => {
  const [auctionsData, setAuctionsData] = useState(auctionMockData);
  const [userBid, setUserBid] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userMoney, setUserMoney] = useState();

  useEffect(() => {
    fetchAndSetAuctions();
  }, []);

  useEffect(() => {
    getUserWallet();
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
    const response = await fetchData(AUCTIONS_URL);
    const json = await response.json();
    setAuctionsData((prev) => prev.concat(...json.auctions));
    setIsLoading(false);
  };

  const getUserWallet = async () => {
    const response = await fetchData(WALLET_URL, 'GET', {
      credentials: 'include',
    });
    const { status } = await response;
    if (status === 200) {
      const { wallet } = await response.json();
      if (Object.keys(wallet).length === 0) return setUserMoney(0);
      else {
        const {
          currencies: { dinero },
        } = wallet;
        setUserMoney(dinero);
      }
    } else {
      setUserMoney(0);
    }
  };

  const handleNewBid = async (e, auctionId) => {
    e.preventDefault();
    if (!isUserLoggedIn) {
      alert('Please log in to bid!');
    } else if (userMoney === 0) {
      alert('You do not have a wallet!');
    } else if (parseInt(userBid) > parseInt(userMoney)) {
      alert('You do not have enough money!');
    } else {
      setIsLoading(true);
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
      if (status === 201) {
        fetchAndSetAuctions();
        setIsLoading(false);
      }
    }
  };

  const validateBid = (userBid, highestBid) => {
    if (parseInt(userBid) <= parseInt(highestBid)) {
      alert('You must bid higher than current bid!');
      return;
    }
    setUserBid(userBid);
  };

  const getColumns = (totalBidder) => {
    return totalBidder <= 12 ? Math.ceil(totalBidder / 2) : 7;
  };

  const brokenImageHandler = (e) => {
    e.target.src = '/assets/default_avatar.jpg';
  };

  const auctionHandler = auctionsData.map((auction) => {
    const { id, seller, quantity, highest_bid, bidders } = auction;
    return (
      <div className={`${styles.auctionContainer} ${id}`} key={id}>
        <div className={styles.auctionSeller}>
          <img
            className={styles.profilePhoto}
            src={`${BASE_IMAGE_URL}/${seller}/img.png`}
            onError={brokenImageHandler}
          />
        </div>
        <div className={styles.auctionStatsBidderWrapper}>
          <div className={styles.auctionStats}>
            <div className={styles.itemInfo}>
              <h1>
                {quantity} x {'  '}
              </h1>
              <Image
                className={styles.gemImage}
                layout="fixed"
                src="/assets/gem.png"
                width={25}
                height={25}
              />
            </div>
            <div className={styles.currentStatus}>
              <h2>Current Bid:</h2>
              <h2>
                <div className={styles.currentBidPrice}>{highest_bid}</div>
              </h2>
            </div>
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
                  <img
                    className={styles.profilePhoto}
                    src={`${BASE_IMAGE_URL}/${bidder}/img.png`}
                    onError={brokenImageHandler}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.auctionForm}>
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
            <button
              type="submit"
              className={`${styles.auctionButton} ${styles.bidBtn}`}
            >
              Bid
            </button>
          </form>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.autionsPageTitle}>
        {isLoading ? 'Loading Please wait...' : 'Ongoing Auctions'}
      </h2>
      <div className={styles.auctionWrapper}>{auctionHandler}</div>
    </div>
  );
};

export default HandleAuctions;
