import './index.css'
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsList: [],
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordDetails = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswordDetails = {
      id: uuid(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordDetails],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {websiteInput, usernameInput, passwordInput, passwordsList} =
      this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="password-generate-container">
          <form className="form-container" onSubmit={this.onAddPasswordDetails}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-section">
              <div className="label-section">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
                id="website"
              />
            </div>
            <div className="input-section">
              <div className="label-section">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeUsernameInput}
                value={usernameInput}
                id="username"
              />
            </div>
            <div className="input-section">
              <div className="label-section">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
                id="password"
              />
            </div>
            <div className="add-button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="password-items-container">
          <div className="search-text-section">
            <div className="password-count-container">
              <p className="password-text">Your Passwords</p>
              <div className="count-container">
                <p className="passwords-count">{passwordsList.length}</p>
              </div>
            </div>
            <div className="search-container">
              <div className="label-section">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
              </div>
              <input type="text" className="input" placeholder="Search" />
            </div>
          </div>
          <hr className="line" />
          <div className="showpasswords-container">
            <div>
              <input type="checkbox" id="showpassword" className="checkbox" />
              <label className="showpassword" htmlFor="showpassword">
                Show Passwords
              </label>
            </div>
          </div>
          {passwordsList.length === 0 ? (
            <div className="empty-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="nopasswords-image"
              />
              <p className="nopasswords-text">No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-list">
              {passwordsList.map(eachItem => (
                <PasswordItem key={eachItem.id} passwordDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
