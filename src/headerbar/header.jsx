import React from 'react'
import styled from 'styled-components'
import {Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Alignment} from '@blueprintjs/core'
import {Link} from 'react-router-dom'

const Title = styled.span`
    font-weight: bold;
    font-size: 26px;
`

class Header extends React.Component {
    render () {
        return (
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading><Title>Hashtagging It</Title></NavbarHeading>
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