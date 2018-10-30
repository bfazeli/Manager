import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount()  {
        const config = {
            apiKey: "AIzaSyB7NfJRGB4COR3_wpTtbEhQGn5-BkrHfjI",
            authDomain: "manager-18270.firebaseapp.com",
            databaseURL: "https://manager-18270.firebaseio.com",
            projectId: "manager-18270",
            storageBucket: "manager-18270.appspot.com",
            messagingSenderId: "598074561687"
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App