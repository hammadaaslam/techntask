import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Login from '../../screens/Login';
// import Otp from '../../screens/Otp';
// import Signup from '../../screens/Signup';
// import Splash from '../../screens/Splash';
// import Main from '../../screens/Main';


import TabNav from '../tabs/HomeTab';

import DashBoard from '../../screens/DashBoard';
import Description from '../../screens/Description';
import Gallery from '../../screens/Gallery';
import Review from '../../screens/Review';



const Stack = createNativeStackNavigator();
// const Drawer =createDrawerNavigator();


const Routes = () => {
  // const navigation = useNavigation();
  





  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={'TabNav'}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        
      }}>
     
      <Stack.Screen name={'TabNav'} component={TabNav} />
      

      <Stack.Screen name={'DashBoard'} component={DashBoard} />
      <Stack.Screen name={'Description'} component={Description} />
      <Stack.Screen name={'Gallery'} component={Gallery} />
      <Stack.Screen name={'Review'} component={Review} />

      
    </Stack.Navigator>

   </NavigationContainer>
  );
};

export default Routes;
