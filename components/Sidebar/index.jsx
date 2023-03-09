import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sidebarMenuOptions from 'constants/sidebarMenuOptions';
import { MENU_ICON_HEIGHT, MENU_ICON_WIDTH } from 'constants/sidebarImgDetails';
import sidebarIconPaths from 'constants/sidebarMenuIconPaths';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const router = useRouter();
  const navigateTo = (url) => router.push(url);
  const { ICON_PATH_LOGO, ICON_PATH_ARROW, ICON_PATH_INFO } = sidebarIconPaths;

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
        <Image
          src={ICON_PATH_ARROW}
          width={MENU_ICON_WIDTH}
          height={MENU_ICON_HEIGHT}
        />
      </div>

      <aside className={styles.sidebar}>
        <span className={styles.heading}>
          <Image src={ICON_PATH_LOGO} width={50} height={50} />
          <h3>RealDevSquad</h3>
        </span>
        <div className={styles.options}>
          {sidebarMenuOptions.map((option, index) => {
            return (
              <span
                key={index}
                // this code below insure even if we are in nested path like currency-exchange/**/
                //even then the link is active
                className={styles.option + addActiveOptionClass(option.urlPath)}
                onClick={() => navigateTo(option.urlPath)}
              >
                <Image
                  src={option.iconPath}
                  className={styles.option_image}
                  width={MENU_ICON_WIDTH}
                  height={MENU_ICON_HEIGHT}
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
              <Image
                src={ICON_PATH_INFO}
                width={MENU_ICON_WIDTH}
                height={MENU_ICON_HEIGHT}
              />
              Trade Now
            </button>
          )}
          <button className={styles.button}>
            <Image
              src={ICON_PATH_INFO}
              width={MENU_ICON_WIDTH}
              height={MENU_ICON_HEIGHT}
            />
            Guide
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
