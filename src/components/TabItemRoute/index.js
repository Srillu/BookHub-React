import './index.css'

const TabItemRoute = props => {
  const {eachItem, onClickTabItemLabel, isActive} = props
  const {id, label, value} = eachItem

  const onClickTabItem = () => {
    onClickTabItemLabel(id, label, value)
    // console.log(id)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="book-shelf-tab-Item">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onClickTabItem}
      >
        {label}
      </button>
    </li>
  )
}

export default TabItemRoute
