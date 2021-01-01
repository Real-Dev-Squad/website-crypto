import * as React from 'react';
import { motion } from 'framer-motion';
import s from './s.module.css';

const container = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.2,
    },
  },
};

const itemShowAnim = {
  hidden: { x: 30, opacity: 0, scale: 0.8 },
  visible: { x: 0, opacity: 1, scale: 1 },
};

const ScrapsAnimation = (props) => {
  const { coins } = props;
  return (
    <motion.ul
      className={s['scraps-row']}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {Array.from(new Array(coins)).map((item, index) => (
        <motion.li
          key={index}
          className={s.scrap}
          variants={itemShowAnim}
          animate={{
            scale: [3, 1, 2, 3, 1],
            rotate: [0, 180, 270, 180, 0],
            borderRadius: ['0%', '20%', '50%', '0%', '20%'],
          }}
        ></motion.li>
      ))}
    </motion.ul>
  );
};

export default ScrapsAnimation;
