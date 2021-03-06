import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/advanced-ui', state: 'advancedUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/maps', state: 'mapsMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
      { path: '/general-pages', state: 'generalPagesMenuOpen' },
      { path: '/ecommerce', state: 'ecommercePagesMenuOpen' },
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    }));

  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt => evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>David Grey. H</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>


 <li className={this.isPathActive('/about') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/about">
              <span className="menu-title"><Trans>?? ??????????????????</Trans></span>
              <i className="mdi mdi-web menu-icon"></i>
            </Link>
          </li>
          <li className={this.isPathActive('/methodology') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/methodology">
              <span className="menu-title"><Trans>??????????????????????</Trans></span>
              <i className="mdi mdi-android-studio menu-icon"></i>
            </Link>
          </li>

          <li className={this.isPathActive('/costs') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/costs">
              <span className="menu-title"><Trans>??????????????</Trans></span>
              <i className="mdi mdi-coin menu-icon"></i>
            </Link>
          </li>
          <li className={this.isPathActive('/labor-and-funds') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/labor-and-funds">
              <span className="menu-title"><Trans>?????????? ?? ??????????</Trans></span>
              <i className="mdi mdi-worker menu-icon"></i>
            </Link>
          </li>
          <li className={this.isPathActive('/matrix-multiplier') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/matrix-multiplier">
              <span className="menu-title"><Trans>????????????????????????????</Trans></span>
              <i className="mdi mdi-matrix menu-icon"></i>
            </Link>
          </li>
         

          <li className='nav-item' >
            <Link className="nav-link">
            </Link>
          </li>

        
          <li className={this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('userPagesMenuOpen')} data-toggle="collapse">
              <span className="menu-title"><Trans>User Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/user-pages/login') ? 'nav-link active' : 'nav-link'} to="/user-pages/login"><Trans>Login</Trans></Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/user-pages/register') ? 'nav-link active' : 'nav-link'} to="/user-pages/register"><Trans>Register</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('errorPagesMenuOpen')} data-toggle="collapse">
              <span className="menu-title"><Trans>Error Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-security menu-icon"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link'} to="/error-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link'} to="/error-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li>
         
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);