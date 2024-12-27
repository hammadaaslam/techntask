import React,{useState,useEffect} from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  EventEmitter
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { useSelector,useDispatch } from 'react-redux';
import DashBoard from '../../screens/DashBoard';
import Description from '../../screens/Description';
import Review from '../../screens/Review';
import Gallery from '../../screens/Gallery';
import ArtificalIntelligence from '../../screens/ArtificalIntelligence';
// import { EventEmitter } from 'react-native';





// import DashboardFlow from '../../screens/home/Home'
// import TransactionsFlow from '../../screens/home/Search'
// import AddTransactionFlow from '../../screens/livecalling/MembersSections'
// // import StatisticsFlow from '../../screens/home/Shorts'
// import ProfileFlow from '../../screens/home/ProfileMenu'
// import {Colors} from '../../utils/Colors';
// import {Fonts} from '../../utils/Fonts';
// import Helper from '../../utils/Helper';
// import {ImagePath} from '../../utils/imagePath';
// import Home from '../../screens/home/Home';
// import DashboardFlow from '../../screens/home/TabsSection'
// import StatisticsFlow from '../../screens/home/ForumTabs'

// const CustomTabBarButton = ({children, onPress, }) => (
//   <TouchableOpacity onPress={onPress}
//     style={styles.cutomTabBarButtonContainer}
//   >
//     <View style={styles.cutomTabBarButtonContainerChild}>
//       {children}
//     </View>

//     <Text style={{
//         fontFamily:Fonts.bold,
//         fontSize:Helper.fontSize10,
//         color:"gray",

//     }}>{'LIVE'}</Text>
//   </TouchableOpacity>
// )

const Tab = createBottomTabNavigator();

export default function HomeTab() {

   const role = useSelector(state=>state.role)

//   const roleChangeEmitter = new EventEmitter();

//   const [hammad,setHammad] = useState('')
//     const doos = async () => {
//     try {
//       const roles = await AsyncStorage.getItem('role');
//       console.log(roles, 'roles drawer');
//       setHammad(roles);
//     } catch (error) {
//       console.error('Error retrieving theme from AsyncStorage:', error);
//     }
//   };
//   useEffect(()=>{
//     // setTimeout(()=> {
// // doo()

//     // },1000)

//     doos();

//     const subscription = roleChangeEmitter.addListener('roleChanged', fetchRole);

//     return () => {
//       subscription.remove(); // Clean up subscription on unmount
//     };
//   }, []);





  return (

    // <DrawerSceneWrapper>
<>
{role.mode === 'user' 


?

<Tab.Navigator
screenOptions={{
  headerShown: false,
  tabBarShowLabel:false,
  tabBarStyle: {
    backgroundColor: 'white',
    // elevation
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // height: 55,
    // width:'50%',
    // overflow: 'hidden',
    // position: 'absolute',
    // zIndex:999999,
    // bottom:0
    borderTopWidth:0,
    // borderTopColor:'#23265a',
    // marginHorizontal:20
    // elevation:3
    
  },
  
}}
// tabBarOptions={{showLabel: false}}
>



<Tab.Screen
  name="Dashboard"
  component={DashBoard}
  options={{
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
            <Image resizeMode="contain"
          
            source={require('../../images/homebottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
         
        </View>
      );
    },
  }}
/>

<Tab.Screen
  name="Description"
  component={Description}
  options={{
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/locationbottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
            />
  
            {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>

<Tab.Screen
  name="Review"
  component={Review}
  
  
  
  options={{
    // tabBarStyle:{}
    // tabBarStyle:{display:'none'},
    
    
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/bookmarkbottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>



<Tab.Screen
  name="Gallery"
  component={Gallery}
  options={{
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/personbottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
          {/* <MaterialCommunityIcons
            // style={{marginRight: 10}}
            name="shopping"
            size={20}
            color={focused ? 'yellow' : 'white'}
          /> */}
          {/* <Text style={[styles.menuName,{ color: focused ?  'red' : 'gray', }]}>
            Main
          </Text> */}
        </View>
      );
    },
  }}
/>

</Tab.Navigator>



:




<Tab.Navigator
screenOptions={{
  headerShown: false,
  tabBarShowLabel:false,
  tabBarStyle: {
    backgroundColor: 'white',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // height: 55,
    // width:'50%',
    // overflow: 'hidden',
    // position: 'absolute',
    // zIndex:999999,
    // bottom:0
    borderTopWidth:0,
    // borderTopColor:'#23265a',
    // marginHorizontal:20
    
  },
  
}}
// tabBarOptions={{showLabel: false}}
>



<Tab.Screen
  name="Dashboard"
  component={DashBoard}
  options={{
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
            <Image resizeMode="contain"
          
            source={require('../../images/homebottom.png') }
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
         
        </View>
      );
    },
  }}
/>




<Tab.Screen
  name="Review"
  component={Review}
  
  
  
  options={{
    // tabBarStyle:{}
    // tabBarStyle:{display:'none'},
    
    
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/messagebottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>


<Tab.Screen
  name="Description"
  component={Description}
  options={{
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/personbottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
            />
  
            {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>



<Tab.Screen
  name="ArtificalIntelligence"
  component={ArtificalIntelligence}
  
  
  
  options={{
    // tabBarStyle:{}
    // tabBarStyle:{display:'none'},
    
    
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/artificial-intelligence.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>



<Tab.Screen
  name="Gallery"
  component={Gallery}
  
  
  
  options={{
    // tabBarStyle:{}
    // tabBarStyle:{display:'none'},
    
    
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.menuView}>
          
          <Image resizeMode="contain"
            source={require('../../images/personbottom.png')}
            style={[styles.menuIcon,{ tintColor: focused ? '#3C94FF' : 'gray',}]}
          />

          {focused ? <View  style={{backgroundColor:'#3C94FF',height:10,width:10,borderRadius:200,marginTop:5}} /> : null}
        </View>
      );
    },
  }}
/>







</Tab.Navigator>




}


</>


   



  );
}

const styles = StyleSheet.create({
  menuIcon: {
    height: 22,
    width: 22,
  },
  menuView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS == 'ios' ? 15 : 3,
    // backgroundColor:'red'
  },
  menuName: {
    fontSize: 11,
    // fontFamily:Fonts.regular,
    marginTop: 2,
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'red',
    borderRadius: 35,
    height: 90,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
