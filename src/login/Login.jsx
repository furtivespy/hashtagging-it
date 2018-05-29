import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Callout } from "@blueprintjs/core";
import * as actions from '../actions/authActions';

export class Login extends React.Component {
    loginTwitter = () => {
        this.props.actions.loginClick('TWITTER');
    }

    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <Callout intent="primary" title="Only Twitter Login" icon="info-sign" >
                    Login is ony available with twitter at this time
                </Callout>
                <p></p>
                <div><button className="pt-button" onClick={this.loginTwitter}>
                    <img src={require("./sign-in-with-twitter-link.png")} alt="Sign In With Twitter" />
                </button></div>
                <div><button className="pt-button">Facebooks</button></div>
                <div><button className="pt-button">The Googs</button></div>
            </div>
        )
    }
}

Login.propTypes = {
    actions: PropTypes.object.isRequired
  };

function mapStateToProps() {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)