import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {id, website, username, password} = passwordDetails
  return (
    <li className="eachpassword-details">
      <div className="password-item">
        <div className="logo-details">
          <div className="initial-circle">
            <p className="logo">{website[0].toUpperCase()}</p>
          </div>
          <div className="details">
            <p className="website">{website}</p>
            <p className="username">{username}</p>
            <p className="password">{password}</p>
          </div>
        </div>
        <button data-testid="delete" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
