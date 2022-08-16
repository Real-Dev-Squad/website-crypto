import styles from './sidebar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sidebarMenuOptions from 'constants/sidebarMenuOptions';

const Sidebar = () => {
  const router = useRouter();
  const navigateTo = (url) => router.push(url);

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <span className={styles.heading}>
          <Image src={'/assets/Real-Dev-Squad1x.png'} width={50} height={50} />
          <h3>RealDevSquad</h3>
        </span>
        <div className={styles.options}>
          {sidebarMenuOptions.map((option, index) => {
            return (
              <span
                key={index}
                // this code below insure even if we are in nested path like currency-exchange/**/
                //even then the link is active
                className={
                  styles.option +
                  (router.pathname.split('/')[1] === option.urlPath ||
                  (router.pathname === '/' && '/' === option.urlPath)
                    ? ' ' + styles.option_active
                    : '')
                }
                onClick={() => navigateTo(option.urlPath)}
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

//pure TDD
