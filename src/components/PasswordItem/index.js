import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePasswordItem, showPasswords} = props
  const {id, website, username, password, logoBgColor} = passwordDetails
  return (
    <li className="password-item">
      <div className="logo-details">
        <div className="initial-circle" style={{backgroundColor: logoBgColor}}>
          <p className="logo">{website[0].toUpperCase()}</p>
        </div>
        <div className="details">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {showPasswords ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
      </div>
      <button
        data-testid="delete"
        className="delete-button"
        onClick={onDeletePasswordItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
