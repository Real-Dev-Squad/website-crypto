import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './new.module.css';
import fetchData from '../../utils/fetchData';
import fetchSelfDetails from '../../utils/fetchSelfDetails';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const AUCTIONS_URL = `${BASE_API_URL}/auctions`;

const CreateNewAuction = () => {
  const router = useRouter();

  const [itemType, setItemType] = useState();
  const [quantity, setQuantity] = useState();
  const [initialPrice, setInitialPrice] = useState();
  const [duration, setDuration] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetchSelfDetails()
      .then((res) => {
        if (res.status === 401) {
          alert('You need to be logged in to be able to create an auction!');
        }
      })
      .catch((err) => {
        console.log('Some error occured', err);
      });
  }, []);

  const auctionSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const durationInMs = duration * 24 * 60 * 60 * 1000;
    const reqBody = {
      item: itemType,
      initialPrice: initialPrice,
      duration: durationInMs,
      quantity,
    };

    const response = await fetchData(`${AUCTIONS_URL}`, 'POST', {
      credentials: 'include',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { status } = response;
    if (status == 200) {
      setIsSubmitted(false);
      router.push('/auctions');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.newAuctionForm} onSubmit={auctionSubmitHandler}>
        {isSubmitted && <h2>Please wait...</h2>}
        <label name="itemType">
          Item to auction:
          <br />
          <input
            className={styles.inputBox}
            htmlFor="itemType"
            onChange={({ target: { value } }) => setItemType(value)}
            required
          />
        </label>
        <label name="quantity">
          Quantity for auction:
          <br />
          <input
            className={styles.inputBox}
            htmlFor="quantity"
            onChange={({ target: { value } }) => setQuantity(value)}
            required
          />
        </label>
        <label name="initialPrice">
          Initial price for this auction:
          <br />
          <input
            className={styles.inputBox}
            htmlFor="initialPrice"
            onChange={({ target: { value } }) => setInitialPrice(value)}
            required
          />
        </label>
        <label name="duration">
          Duration of auction (in number of days):
          <br />
          <input
            className={styles.inputBox}
            htmlFor="duration"
            onChange={({ target: { value } }) => setDuration(value)}
            required
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewAuction;
