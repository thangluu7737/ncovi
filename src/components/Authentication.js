import React from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Loading} from './authentications/Loading.js'
import {Login} from './authentications/Login.js'
import {Signup} from './authentications/SignUp.js'
import {Main} from './authentications/Main.js';

const Stack = createStackNavigator();

function Authentication() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Authentication;