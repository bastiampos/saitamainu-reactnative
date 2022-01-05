import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../views/Login'
import SignUp from '../views/SignUp'
import FirstView from '../views/FirstView'
import RegisteredCode from '../views/RegisteredCode'
import OfficialyWolf from '../views/OfficiallyWolf'
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const NavStartStack = (props) => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
                name='start' 
                component={FirstView} 
                options= {{headerShown: false}}
            />
            {<Stack.Screen 
                name='signin' 
                component={SignIn} 
                options= {{headerShown: false}}
            />}
            {<Stack.Screen 
                name='signup' 
                component={SignUp} 
                options= {{headerShown: false}}
            />}
            {<Stack.Screen 
                name='registeredCode' 
                component={RegisteredCode} 
                options= {{headerShown: false}}
            />}
            <Stack.Screen 
                name='officiallyWolf' 
                component={OfficialyWolf} 
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name='home' 
                component={Home} 
                options= {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default NavStartStack