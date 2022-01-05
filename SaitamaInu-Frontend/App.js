import React from 'react';
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import mainReducer from './redux/reducers/main'
import NavStartStack from './navigation/NavStack'



const globalStore = createStore(mainReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <NavStartStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
})