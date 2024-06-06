import React, { useState, useEffect, useRef } from 'react';
import Options from '../components/Options';
import axios from 'axios';
import Card from '../components/Card';
import appStyles from '../styles/App.module.scss'
import section1Style from '../styles/Section1.module.scss'
import section2Style from '../styles/Section2.module.scss'
import section3Style from '../styles/Section3.module.scss'
import secureIcon from '../assets/card_assets/SECURE.svg';
import accesibleIcon from '../assets/card_assets/ACCESSIBLE.svg';
import fastIcon from '../assets/card_assets/FAST.svg';
import heroIcon from '../assets/HERO.svg';
import exchangeIcon from '../assets/icons_flags//exchance_icon.svg'
import Image from 'next/image';
import Navbar from "../components/Navbar";
import LoginModal from '../components/LoginModal';

const Index = () => {
  /* STATES */
  const [amount, setAmount] = useState(61);
  const [fromSelect, setFromSelect] = useState('USD');
  const [toSelect, setToSelect] = useState('GBP');
  const [ratesData, setRatesData] = useState({});
  const [resultCurrency, setResultCurrency] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const section3Ref = useRef(null);

  /* EVENT HANDLER */
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;
      case 'fromSelect':
        setFromSelect(value);
        break;
      case 'toSelect':
        setToSelect(value);
        break;
    }
  };

  useEffect(() => {
    const api = `https://api.exchangerate-api.com/v4/latest/${fromSelect}`;
    axios
      .get(api)
      .then(function (response) {
        setRatesData(response.data.rates);
      })
      .catch(function (e) {
        console.error('Fetch Error!', e);
      });
  }, [fromSelect]);

  const convertCurrency = () => {
    const ratesValue = ratesData[toSelect];
    if (ratesValue) {
      const resultCurrency = amount * ratesValue;
      setResultCurrency(resultCurrency.toFixed(2));
    }
  };

  /* SWAP CURRENCY */
  const swapCurrency = () => {
    setFromSelect(toSelect);
    setToSelect(fromSelect);
  };

  useEffect(() => {
    convertCurrency();
  }, [ratesData]);

  const handleExchangeFundClick = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={appStyles.container}>
      <Navbar onLoginClick={() => setShowModal(true)} />
      <LoginModal show={showModal} handleClose={() => setShowModal(false)} />
      
      {/* Section 1 */}
      <div className={`${section1Style.section1} section`}>
        <div className={section1Style.textMainContainer}>
          <div className={section1Style.section1Text}>
            <div className={section1Style.section1Text1}>
              Exchange Your Money
            </div>
            <div className={section1Style.section1Text2}>
              Easily, Quickly And
            </div>
            <div className={section1Style.section1Text2}>
              Securely
            </div>
            <div className={section1Style.section1Paragraph}>
              Best Source for currency conversion, sending money<br />
              online and tracking exchange rates. Live tracking and <br /> notifications + flexible delivery and payment options.
            </div>
            <div>
              <button className={section1Style.btnSection1} onClick={handleExchangeFundClick}>Exchange Fund</button>
            </div>
          </div>
        </div>
        <div>
          <Image src={heroIcon} className={section1Style.hero} alt="Hero Icon" />
        </div>
      </div>

      {/* Section 2 */}
      <div className={`${section2Style.section2} section`}>
        <Card cardImage={secureIcon} alt={'card'} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Card cardImage={accesibleIcon} alt={'card'} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Card cardImage={fastIcon} alt={'card'} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>

      {/* Section 3 */}
      {/* <div className={`${section3Style.section3} section`} ref={section3Ref}>
        <h1 className='converterTitle'>Convert Fund</h1>
        
        <div className={section3Style.elementGroup}>
          <label className="inputLabel">Amount</label>
          <input type="number" name="amount" className={section3Style.converterInput} value={amount} onChange={onHandleChange} />
        </div>
        
        <div className={section3Style.elementGroup}>
          <label className="inputLabel">From</label>
          <select name="fromSelect" className={section3Style.converterInput} value={fromSelect} onChange={onHandleChange}>
            <Options ratesData={ratesData} />
          </select>
        </div>
        
        <div className={section3Style.swap}>
          <button className={section3Style.btnSwap} onClick={swapCurrency}>
            <Image src={exchangeIcon} alt='exchangeIcon'/>
          </button>
        </div>
        
        <div className={section3Style.elementGroup}>
          <label className="inputLabel">To</label>
          <select name="toSelect" className={section3Style.converterInput} value={toSelect} onChange={onHandleChange}>
            <Options ratesData={ratesData} />
          </select>
        </div>
        
        <div className='result'>
          <h2 className={section3Style.elementH2}>Result:
            <strong>{resultCurrency}</strong>
          </h2>
        </div>
        
        <div className='convertBtn'>
          <button className={section3Style.convert} onClick={convertCurrency}>Convert</button>
        </div>
      </div> */}
      <div className={`${section3Style.section3} section`} ref={section3Ref}>
  <h1 className='converterTitle'>Convert Fund</h1>

  <div className={section3Style.elementGroup}>
    <label className="inputLabel">Amount</label>
    <input type="number" name="amount" className={section3Style.converterInput} value={amount} onChange={onHandleChange} />
  </div>

  <div className={section3Style.elementGroup}>
    <label className="inputLabel">From</label>
    <select name="fromSelect" className={section3Style.converterInput} value={fromSelect} onChange={onHandleChange}>
      <Options ratesData={ratesData} />
    </select>
  </div>

  <div className={section3Style.swap}>
    <button className={section3Style.btnSwap} onClick={swapCurrency}>
      <Image src={exchangeIcon} alt='exchangeIcon'/>
    </button>
  </div>

  <div className={section3Style.elementGroup}>
    <label className="inputLabel">To</label>
    <select name="toSelect" className={section3Style.converterInput} value={toSelect} onChange={onHandleChange}>
      <Options ratesData={ratesData} />
    </select>
  </div>

  <div className='result'>
    <h2 className={section3Style.elementH2}>Result:
      <strong>{resultCurrency}</strong>
    </h2>
  </div>

  <div className='convertBtn'>
    <button className={section3Style.convert} onClick={convertCurrency}>Convert</button>
  </div>
</div>
    </div>
  );
}

export default Index;
