// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="search-icon-c">
          <input
            type="search"
            id="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
          <label htmlFor="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="icon"
              alt="search icon"
              htmlFor="search"
            />
          </label>
        </div>

        <ul className="item-c">
          {searchResults.map(eachItem => (
            <DestinationItem destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
