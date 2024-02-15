import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrencyListDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = eachCurrencyListDetails

  return (
    <li className="crypto-currency-item-list-style">
      <div className="currency-logo-name-style">
        <img
          className="currency-logo-style"
          src={currencyLogo}
          alt={currencyName}
        />
        <p className="currency-logo-name-style">{currencyName}</p>
      </div>
      <div className="usd-euro-value-container">
        <p className="usd-value-style">{usdValue}</p>
        <p className="euro-value-style">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
