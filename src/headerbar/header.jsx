import React from 'react'
import {nav, button} from '@blueprintjs/core'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render () {
        return (
            <nav className="pt-navbar .modifer">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Hashtagging It</div>
                    <input className="pt-input" placeholder="Searh does nothing..." type="text" />
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <Link to="/"><button className="pt-button pt-minimal pt-icon-home">Home</button></Link>
                    <span className="pt-navbar-divider"></span>
                    <Link to="/login"><button className="pt-button pt-minimal pt-icon-user"></button></Link>
                    <button className="pt-button pt-minimal pt-icon-help"></button>
                    <Link to="/about"><button className="pt-button pt-minimal pt-icon-cog"></button></Link>
                </div>
            </nav>
        )
    }
}

export default Header