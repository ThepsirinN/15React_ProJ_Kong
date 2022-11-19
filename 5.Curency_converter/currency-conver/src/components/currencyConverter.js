import "./currencyConverter.css";

const CurrencyComponent = (props) => {
  const { currencyChoice, selectedCurrency, setCurrency, amount, handleOnChange } = props;
  const changeCurrency = ({ target }) => {
    const { value } = target;
    return setCurrency(value);
  };

  return (
    <div className="currency">
      <select value={selectedCurrency} onChange={changeCurrency}>
        {currencyChoice.map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <input type="number" value={amount} onChange={handleOnChange} step="1" />
    </div>
  );
};

export default CurrencyComponent;
