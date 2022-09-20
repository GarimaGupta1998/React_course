import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">{props.tittle}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode ==='light'? 'dark' :'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    </nav>
  )
}

/*proptype ka use isliye taki (ye conformation string hai to tittle ke string value ki krni hai
agar number ya koi other type ki value send ki to error show hogi)*/
//isrequried is used to check tittle,abouttext value defined aur not (it check protypes value defined or not)
Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

//set default prop (agar prop me(means tittle,abouttext) value pas nhi krte hai to deafultprop in value ko pass krta hai)

/*Navbar.defaultProps = {
    tittle: 'about tittle here',
    aboutText: 'about text here'
  };*/

