import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar
  } from 'react-native';
  import React, { useState, useRef } from "react";


const Review = ({navigation}) => {
  return (
    <View style={{  flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        backgroundColor: '#1A1C43'}}>
            <ScrollView>
                
                <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          height:45
          
        }}>
        <Text style={{fontSize: 15,  marginLeft: 10,color:'white'}}>
          Developer Atique
        </Text>
       
      </View>

        </ScrollView>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({})