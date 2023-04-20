import styles from "../../styles/MainNav.module.css";

import MainLogo from "../../assets/logos/main.png";
import PromoLogo from "../../assets/logos/promo.png";
import ServicesSidenav from "./ServicesSidenav";
import AboutSidenav from "./AboutSidenav";
import { useEffect, useState } from "react";

const defaultStatus = {
  services: {
    name: "services",
    active: false,
  },
  about: {
    name: "about",
    active: false,
  },
};

const Sidebar = ({ toggleDimmer }) => {
  const [activeStatus, setActiveStatus] = useState(defaultStatus);
  const [isFirstToggle, setIsFirstToggle] = useState(true);

  const toggleActive = (e) => {
    if (isFirstToggle) {
      toggleDimmer();
      setIsFirstToggle(false);
    }

    const menuToToggle = e.target.getAttribute("data-name");

    setActiveStatus((prev) => ({
      ...defaultStatus,
      [menuToToggle]: {
        ...prev[menuToToggle],
        active: !prev[menuToToggle].active,
      },
    }));
  };

  useEffect(() => {
    if (
      Object.values(activeStatus)
        .map((obj) => obj.active)
        .every((value) => value === false) &&
      !isFirstToggle
    ) {
      toggleDimmer();
      setIsFirstToggle(true);
    }
  }, [activeStatus]);

  return (
    <div className={styles.Sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={MainLogo} alt="Logo" />
          <div className={styles.logoText}>
            <p>Дент Сервис</p>
            <p className={styles.dim}>Центр приватной стоматологии</p>
          </div>
        </div>

        <div className={styles.contacts}>
          <p>+7 (999) 012-34-56</p>
          <button>Записаться на приём</button>
        </div>

        <nav>
          <ul className={styles.mainUl}>
            <li className={styles.services}>
              <p
                className={activeStatus.services.active ? styles.active : ""}
                data-name={"services"}
                onClick={(e) => toggleActive(e)}
              >
                Услуги
                <span>+</span>
              </p>

              <ServicesSidenav isActive={activeStatus.services.active} />
            </li>
            <li className={styles.about}>
              <p
                className={activeStatus.about.active ? styles.active : ""}
                data-name={"about"}
                onClick={(e) => toggleActive(e)}
              >
                О Центре
                <span>+</span>
              </p>
              <AboutSidenav isActive={activeStatus.about.active} />
            </li>

            <li>
              <p>Команда Врачей</p>
            </li>
            <li>
              <p>Ценообразование и цены</p>
            </li>
            <li>
              <p>Отзывы</p>
            </li>
            <li>
              <p>Статьи для пациентов</p>
            </li>
            <li>
              <p>Пациентам из регионов</p>
            </li>
            <li>
              <p>Контакты</p>
            </li>
          </ul>
        </nav>

        <div className={styles.promo}>
          <div>
            <p>Лечение зубов во сне</p>
            <p>Все зубы сразу за 1 визит</p>
          </div>
          <img src={PromoLogo} alt="Promo Logo" />
        </div>

        <div className={styles.schedule}>
          <p>График работы</p>
          <div>
            <span className={styles.days}>Пн - Пт:</span>{" "}
            <span className={styles.time}>10:00 - 20:00</span>
          </div>
          <div>
            <span className={styles.days}>Сб - Вс:</span>{" "}
            <span className={styles.time}>10:00 - 19:00</span>
          </div>
        </div>

        <div className={styles.social}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
          </svg>
        </div>

        <div className={styles.interact}>
          <button>Контакты и запись на приём</button>
          <button>Служба контроля качества</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
