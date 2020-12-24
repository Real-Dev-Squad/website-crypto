import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import MiningScraps from './mining-scraps';
import s from './s.module.css';

import { store, ADD_SCRAPS } from 'stores/minting';

const MiningBot = (props) => {
  const { id, username } = props;
  // Count of all the coins generated so far
  const [totalScraps, setTotalScraps] = useState(0);
  const [newScraps, setGeneratedScarps] = useState(0);
  const stateFromStore = useContext(store);

  useEffect(() => {
    const generatedScraps = Math.round(Math.random() * 5) + 1; // +1 hack
    const timeoutDuration = Math.round(5 + Math.random() * 5) * 1000;

    // Use useInterval after Kratika works on it
    const timerId = setTimeout(() => {
      const { dispatch } = stateFromStore;
      dispatch({
        type: ADD_SCRAPS,
        payload: {
          username,
          newScraps: generatedScraps,
        },
      });

      setGeneratedScarps(generatedScraps);
      const newTotalScraps = totalScraps + generatedScraps;
      setTotalScraps(newTotalScraps);
    }, timeoutDuration);

    return () => {
      clearTimeout(timerId);
    };
  }, [totalScraps]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={s['coin-row']}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      <span className={s.someVal}>Miner-{id}</span>
      <MiningScraps key={totalScraps} coins={newScraps} />
      Extracted: {newScraps}
    </motion.div>
  );
};

MiningBot.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MiningBot;
