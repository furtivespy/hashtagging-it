import React from 'react'
import {Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Alignment} from '@blueprintjs/core'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render () {
        return (
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Hashtagging It</NavbarHeading>
                    <input className="pt-input" placeholder="Searh does nothing..." type="text" />
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Link to="/"><Button minimal={true} icon="home">Home</Button></Link>
                    <NavbarDivider />
                    <Link to="/login"><Button minimal={true} icon="user"></Button></Link>
                    <Button minimal={true} icon="help"></Button>
                    <Link to="/admin"><Button minimal={true} icon="cog"></Button></Link>
                </NavbarGroup>
            </Navbar>
        )
    }
}

export default Header