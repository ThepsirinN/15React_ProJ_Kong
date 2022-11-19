import { useEffect, useState } from "react";
import money from "./img/money.png";
import CurrencyComponent from "./components/currencyConverter";
import "./App.css";

function App() {
  const [fromCurrenncy, setfromCurrenncy] = useState("USD");
  const [toCurrency, setToCurrenncy] = useState("THB");

  const [currencyChoice, setCurrencyChoice] = useState([]);

  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);

  let fromAmount, toAmount
  const [checkFrom, setcheckFrom] = useState(true)
  // set value before pass to props
  if(checkFrom){
    fromAmount = amount 
    toAmount = (fromAmount * exchangeRate).toFixed(2)
  }else{
    toAmount = amount 
    fromAmount = (toAmount / exchangeRate).toFixed(2)
  }

  // for handle onchange each input 
  const onChangeForm = ({target}) =>{
    const {value} = target
    setcheckFrom(true)
    setAmount(value)
  }
  const onChangeTo = ({target}) =>{
    const {value} = target
    setcheckFrom(false)
    setAmount(value)
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrenncy}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrencyChoice([...Object.keys(data.rates)]);
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [fromCurrenncy, toCurrency]);

  return (
    <div className="App">
      <img src={money} alt="logo" className="money-img" />
      <h1>Currency Converter (API)</h1>
      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectedCurrency={fromCurrenncy}
          setCurrency={setfromCurrenncy}
          amount={fromAmount}
          handleOnChange={onChangeForm}
        />
        <div className="equal"> = </div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectedCurrency={toCurrency}
          setCurrency={setToCurrenncy}
          amount={toAmount}
          handleOnChange={onChangeTo}
        />
      </div>
    </div>
  );
}

export default App;
