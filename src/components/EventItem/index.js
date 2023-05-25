// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, setActiveId, isActive} = props
  const {name, imageUrl, location, id} = eventItem
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveId(id)
  }
  return (
    <li className="li-item">
      <button type="button" onClick={onClickEvent}>
        <img className={eventImageClassName} src={imageUrl} alt="event" />
      </button>

      <p className="item-head">{name}</p>
      <p className="item-para">{location}</p>
    </li>
  )
}

export default EventItem
