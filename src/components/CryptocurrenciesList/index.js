// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {criptoCurrencyList} = props
  return (
    <div className="crypto-currency-list-container">
      <h1 className="crypto-currency-list-heading-style">
        Cryptocurrency Tracker
      </h1>
      <img
        className="crypto-currency-list-image-style"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="crypto-currency-item-list-container">
        <li className="crypto-currency-item-main-list-style">
          <p className="coin-style">Coin Type</p>
          <div className="usd-euro-container">
            <p className="usd-style">USD</p>
            <p className="euro-style">EURO</p>
          </div>
        </li>
        {criptoCurrencyList.map(eachCurrencyList => (
          <CryptocurrencyItem
            eachCurrencyListDetails={eachCurrencyList}
            key={eachCurrencyList.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
