import {Component} from 'react'

// import {ImBookmark} from 'react-icons/im'

import Cookies from 'js-cookie'

import {withRouter, Link} from 'react-router-dom'

import {BsFillXCircleFill} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'

import './index.css'

class Header extends Component {
  state = {isClicked: false}

  onClickLogOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickBars = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onClickRemove = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <nav>
        <ul className="nav-header">
          <div>
            <Link to="/">
              <img
                alt="website logo"
                className="header-website-logo"
                src="https://res.cloudinary.com/dxekjdhel/image/upload/v1677398141/Screenshot_2023-02-26_122633_ej00kn.png"
              />
            </Link>
          </div>
          <div className="nav-menu">
            <div>
              <Link className="nav-link" to="/">
                <li className="home-heading">Home</li>
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/shelf">
                <li className="bookshelves-heading">Bookshelves</li>
              </Link>
            </div>
            <div>
              <Link to="/bookmark" className="nav-link">
                <li className="bookmark-heading">Bookmarks</li>
              </Link>
            </div>

            <div>
              <button
                type="button"
                className="header-logout-button"
                onClick={this.onClickLogOut}
              >
                Logout
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mobile-nav-button"
            onClick={this.onClickBars}
          >
            <FaBars className="mobile-bar-button" />
          </button>
        </ul>
        {isClicked ? (
          <div className="mobile-nav-items-container">
            <ul className="mobile-ul-container">
              <div>
                <Link className="nav-link" to="/">
                  <li className="home-heading">Home</li>
                </Link>
              </div>
              <div>
                <Link className="nav-link" to="/shelf">
                  <li className="bookshelves-heading">Bookshelves</li>
                </Link>
              </div>
              <div>
                <Link to="/bookmark" className="nav-link">
                  <li className="bookmark-heading">Bookmarks</li>
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="header-logout-button"
                  onClick={this.onClickLogOut}
                >
                  Logout
                </button>
              </div>
            </ul>
            <div>
              <button type="button" className="remove-mobile-button">
                <BsFillXCircleFill
                  className="remove-icon-mobile"
                  onClick={this.onClickRemove}
                />
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    )
  }
}
export default withRouter(Header)
