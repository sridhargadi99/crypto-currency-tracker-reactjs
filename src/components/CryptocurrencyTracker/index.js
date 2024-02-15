// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {
    criptoCurrencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCriptocurrencyList()
  }

  getCriptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({criptoCurrencyList: updatedList, isLoading: false})
  }

  render() {
    const {criptoCurrencyList, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList criptoCurrencyList={criptoCurrencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
