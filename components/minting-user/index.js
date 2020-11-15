import { useState } from 'react';

import MiningBot from 'components/mining-bot';
import s from './s.module.css';

import { StateConsumer } from 'stores/minting';

const MintingUser = (props) => {
  const { username } = props;
  const userImgURL = `https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members/${username}/img.png`;

  const [miningBots, setMiningBots] = useState([1, 2]);

  function addMiner() {
    const newMiners = miningBots.slice();
    newMiners.push(newMiners.length + 1);
    setMiningBots(newMiners);
  }

  return (
    <div className={s['user-container']}>
      <div className={s['user-display']}>
        <img className={s['user-img']} src={userImgURL} />
        <span className={s['user-uname']}>{username}</span>
        <span>Total scraps: </span>
        <span className={s['scrap-value']}>
          <StateConsumer username={username} />
        </span>
      </div>

      <button className={s['btn-add-miner']} role="button" onClick={addMiner}>
        +Add Miner
      </button>

      <div className="allMiners">
        {miningBots.map((m) => (
          <MiningBot id={m} key={m} username={username} />
        ))}
      </div>
    </div>
  );
};

export default MintingUser;
