import { useState } from 'react';
import styles from './sidebar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sidebarMenuOptions from 'constants/sidebarMenuOptions';

const Sidebar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const router = useRouter();
  const navigateTo = (url) => router.push(url);

  const basePath = router.pathname;
  const pagePath = router.pathname.split('/')[1];

  const addActiveOptionClass = (optionURL) =>
    pagePath === optionURL || (basePath === '/' && '/' === optionURL)
      ? ' ' + styles.option_active
      : '';

  return (
    <div className={styles.wrapper} data-testid="sidebar-notification">
      <div
        className={
          styles.mobileToggle +
          ` ${mobileToggle ? styles['mobileToggle--active'] : ''}`
        }
        onClick={() => setMobileToggle((prev) => !prev)}
      >
        <h3>Menu</h3>
        <Image src="/assets/MenuArrow.svg" width={25} height={25} />
      </div>

      <aside className={styles.sidebar}>
        <span className={styles.heading}>
          <Image src={'/assets/Real-Dev-Squad1x.png'} width={50} height={50} />
          <h3>RealDevSquad</h3>
        </span>
        <div className={styles.options}>
          {sidebarMenuOptions.map((option, index) => {
            const optionPath = option.urlPath;
            return (
              <span
                key={index}
                // this code below insure even if we are in nested path like currency-exchange/**/
                //even then the link is active
                className={styles.option + addActiveOptionClass(optionPath)}
                onClick={() => navigateTo(optionPath)}
              >
                <Image
                  src={option.iconPath}
                  className={styles.option_image}
                  width={25}
                  height={25}
                />
                <p>{option.name}</p>
                <span className={styles.option_bar}></span>
              </span>
            );
          })}
        </div>

        <div className={styles.buttonWrapper}>
          {router.pathname !== '/currency-exchange' && (
            <button className={styles.button}>
              <Image src="/assets/InfoSquare.svg" width={25} height={25} />
              Trade Now
            </button>
          )}
          <button className={styles.button}>
            <Image src="/assets/InfoSquare.svg" width={25} height={25} />
            Guide
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
