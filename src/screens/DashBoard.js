import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Modal,
    TouchableWithoutFeedback
  } from 'react-native';
  import React, { useState, useRef } from "react";
  import { useDispatch } from 'react-redux';
import { changetheme } from '../redux';



const DashBoard = ({navigation}) => {

const dispatch = useDispatch();
  const [ismodal,setIsmodal] = useState(false)
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
        <Text onPress={()=>setIsmodal(true)} style={{fontSize: 15, marginLeft: 10,color:'white'}}>
          Developer Atique
        </Text>
       
      </View>

        </ScrollView>


        <Modal
                        visible={ismodal}
                        animationType="slide"
                        transparent
                        onRequestClose={() => setIsmodal(false)}>
                        <TouchableWithoutFeedback
                            onPress={() => setIsmodal(false)}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        padding: 40,
                                        borderRadius: 10,
                                    }}>
                                    <TouchableOpacity onPress={()=>dispatch(changetheme({mode:'dark'}))}
                                        >
                                        <View
                                            style={{
                                                backgroundColor: 'blue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    marginBottom: 10,
                                                    // fontFamily: Fonts.light,
                                                    color: 'white',
                                                    top: 4,
                                                    padding: 2,
                                                }}>
                                                Take Photo
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: "blue",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 10,
                                            marginTop: 20,
                                            height: 40,
                                            width: 200,
                                        }}>
                                        <TouchableOpacity
                                        onPress={()=>dispatch(changetheme({mode:'light'}))}
                                            >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    // fontFamily: Fonts.light,
                                                    color: 'white',
                                                }}>
                                                Choose from Library
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
    </View>
  )
}

export default DashBoard

const styles = StyleSheet.create({
  menuIcon: {
    height: 22,
    width: 22,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor:'#1A1C43',
    borderRadius:20
    // zIndex:9999999999
  },

  conatiner: {
    flex: 1,
    backgroundColor:'#1A1C43',
    justifyContent:'center',
    alignItems:'center'
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
modalView: {
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  height: 200,
  width: '80%',
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  backgroundColor: '#2196F3',
},
textStyle: {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  color: 'black',
},
});