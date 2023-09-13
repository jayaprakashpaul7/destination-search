import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="list-item">
      <img className="img" src={imgUrl} alt={name} />
      <h1 className="img-name">{name}</h1>
    </li>
  )
}

export default DestinationItem
