import * as types from './actionTypes';
import Firebase from 'firebase'

export function logoutClick() {
	return {
		type: types.LOGOUT
	}
}

export function loginClick(provider) {
	return dispatch =>  {
		dispatch({ type: types.LOGIN_BEGIN })
		let authProvider
		switch (provider) {
			case 'TWITTER':
			authProvider = new Firebase.auth.TwitterAuthProvider()
			break
			case 'FACEBOOK':
			authProvider = new Firebase.auth.FacebookAuthProvider()
			break
			case 'GOOGLE':
			authProvider = new Firebase.auth.GoogleAuthProvider()
			break
		}

		Firebase.auth().signInWithPopup(authProvider).then( results => 
			dispatch({ 
				type: types.LOGIN_COMPLETE,
				user: results.user
			})
		).catch(error =>
			dispatch({
				type: types.LOGIN_ERROR,
				error
			})
		)
	}
}