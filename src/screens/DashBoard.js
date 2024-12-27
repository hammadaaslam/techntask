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
  TouchableWithoutFeedback,
  Pressable
} from 'react-native';
import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { changerole } from '../redux';
import { Colors } from '../utils/Colors';



const DashBoard = ({ navigation }) => {

  const dispatch = useDispatch();
  const [ismodal, setIsmodal] = useState(false)



  const data = [
    {
        id: 1,
        image: require('../images/house2.png'),
        rating: '4.9',
        title: 'Woodland Apartment',
        location: '1012 Ocean avanue, New yourk, USA',
    },
    {
      id: 2,
      image: require('../images/house2.png'),
      rating: '4.9',
      title: 'Woodland Apartment',
      location: '1012 Ocean avanue, New yourk, USA',
  },
    
];

  return (

    <View style={{
      flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      backgroundColor: 'white'
    }}>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>




        {/* <Text onPress={()=>setIsmodal(true)} style={{color:'black',fontSize:26}}>Hello</Text> */}



        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, height: 80 }}>

          <View style={{ width: '50%' }}>

            <Text style={{ color: Colors.gray, fontSize: 20 }}>Let’s Find your <Text style={{ color: Colors.navyblue, fontSize: 20, fontWeight: 'bold' }}>Favorite Home</Text></Text>
          </View>



          <TouchableOpacity onPress={()=>setIsmodal(true)}>
            <Image style={{ height: 85, width: 85, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/girl.png')} />
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', height: 60, alignItems: 'center', }}>

          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'white',
              height: 50,
              width: 270,
              borderRadius: 10,
              // justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              // marginTop: '5%',
              elevation: 3,

            }}>


            <View style={{ justifyContent: 'center' }}>
              <Image style={{ height: 20, width: 20, marginLeft: 20 }} resizeMode={'contain'} source={require('../images/search.png')}
              />
            </View>

            <TextInput
              style={{
                fontSize: 12,
                color: Colors.gray,
                marginTop: 5,
                width: '85%',
              }}
              placeholder=" Search by Address, City, or ZIP"
              placeholderTextColor={Colors.gray}
              placeholderStyle={{}}
            />


          </View>


          <View style={{ backgroundColor: Colors.blue, height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>

            <Image style={{ height: 20, width: 20, }} resizeMode={'contain'} source={require('../images/settings.png')}
            />

          </View>


        </View>



        <ScrollView
          style={{ width: '90%', alignSelf: 'center', height: 60 }}
          horizontal={true}>
          {/* < View style={{width:'80%',alignSelf:'center',justifyContent:'space-between',alignItems:'center',height:60,marginTop:20,flexDirection:'row'}}> */}

          <TouchableOpacity

            style={{

              alignSelf: 'center',
              backgroundColor: "#E5F1FF",
              height: 34,
              width: 103,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
              // elevation:3
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                // fontFamily: Fonts.regular,
                color: Colors.blue,
              }}>
              Recomended
            </Text>
          </TouchableOpacity>

          <TouchableOpacity

            style={{
              marginLeft: 10,
              alignSelf: 'center',
              backgroundColor: "#F1F2F4",
              height: 34,
              width: 103,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
              // elevation:3
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                // fontFamily: Fonts.regular,
                color: Colors.navyblue,
              }}>
              Top Rates
            </Text>
          </TouchableOpacity>


          {/* <TouchableOpacity onPress={()=>setCategory('voice')}> */}

          <TouchableOpacity

            style={{
              marginLeft: 10,
              alignSelf: 'center',
              backgroundColor: "#F1F2F4",
              height: 34,
              width: 103,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
              // elevation:3
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                // fontFamily: Fonts.regular,
                color: Colors.navyblue,
              }}>
              Best Offers
            </Text>
          </TouchableOpacity>

          {/* </TouchableOpacity> */}

          <TouchableOpacity

            style={{
              marginLeft: 10,
              alignSelf: 'center',
              backgroundColor: "#F1F2F4",
              height: 34,
              width: 103,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
              // elevation:3
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                // fontFamily: Fonts.regular,
                color: Colors.navyblue,
              }}>
              Most Recent
            </Text>
          </TouchableOpacity>

        </ScrollView>



        <ScrollView style={{ width: '90%', alignSelf: 'center', marginTop: 20, height: 265 }} contentContainerStyle={{ alignItems: 'center' }} horizontal>


          <View style={{ backgroundColor: 'white', width: 263, height: 260, elevation: 1, marginLeft: 5, borderRadius: 20 }}>

            <Image style={{ width: 263 }} resizeMode={'stretch'} source={require('../images/house.png')} />

            <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>Lorem House</Text>

            <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 10, marginTop: 5 }}>$340/month</Text>



            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row' }}>

                <Image source={require('../images/locationbottom.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />


                <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 10 }}>Avenue, West Side</Text>


              </View>


              <TouchableOpacity

                style={{
                  // marginLeft:10,
                  //   alignSelf: 'center',
                  backgroundColor: "#E5F0FF",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginTop: '5%',
                  // elevation:3
                }}>


                <Image source={require('../images/bookmarkbottom.png')} tintColor={Colors.blue} style={{ height: 20, width: 20 }} resizeMode='contain' />

              </TouchableOpacity>




            </View>





          </View>







          <View style={{ backgroundColor: 'white', width: 263, height: 260, elevation: 1, marginLeft: 10, marginRight: 5, borderRadius: 20 }}>

            <Image style={{ width: 263 }} resizeMode={'stretch'} source={require('../images/house.png')} />

            <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>Lorem House</Text>

            <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 10, marginTop: 5 }}>$340/month</Text>



            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row' }}>

                <Image source={require('../images/locationbottom.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />


                <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 10 }}>Avenue, West Side</Text>


              </View>


              <TouchableOpacity

                style={{
                  // marginLeft:10,
                  //   alignSelf: 'center',
                  backgroundColor: "#E5F0FF",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginTop: '5%',
                  // elevation:3
                }}>


                <Image source={require('../images/bookmarkbottom.png')} tintColor={Colors.blue} style={{ height: 20, width: 20 }} resizeMode='contain' />

              </TouchableOpacity>




            </View>





          </View>



        </ScrollView>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '90%', marginTop: 20 }}>



          <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>Near You</Text>

          <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 10, marginTop: 5 }}>More</Text>

        </View>



{data.map((item,index)=> (


<Pressable onPress={()=>navigation.navigate('ContentScreen')}>

<View style={{ backgroundColor: 'white', elevation: 7, alignSelf: 'center', width: '90%', height: 150, marginTop: 10, justifyContent: 'space-between', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>


{/* <View> */}


<Image source={item?.image} style={{ height: 120, width: 120, marginLeft: 10 }} resizeMode={'contain'} />

{/* </View> */}



<View style={{ width: '60%', height: 120 }}>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

    <View style={{ flexDirection: 'row' }}>

      <Image source={require('../images/star.png')} style={{ height: 20, width: 20, marginLeft: 10 }} resizeMode={'contain'} />
      <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>{item?.rating}</Text>


    </View>



    <TouchableOpacity

      style={{

        // alignSelf: 'center',
        backgroundColor: "#E5F1FF",
        height: 20,
        width: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '5%',
        // elevation:3
      }}>
      <Text
        style={{
          fontSize: 12,
          // fontWeight:'bold',
          // fontFamily: Fonts.regular,
          color: Colors.blue,
        }}>
        Apartment
      </Text>
    </TouchableOpacity>



  </View>


  <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>{item?.title}</Text>

  <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', marginLeft: 10 }}>

    <Image source={require('../images/locationbottom.png')} tintColor={Colors.navyblue} style={{ height: 15, width: 15 }} resizeMode='contain' />


    <Text style={{ color: Colors.navyblue, fontSize: 10, marginLeft: 3 }}>{item?.location}</Text>


  </View>



  <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15,alignItems:'center' }}>

    <View style={{ flexDirection: 'row',marginLeft:10 }}>
      

      <View style={{flexDirection:'row',alignItems:'center'}}>

      <Image source={require('../images/ticket.png')} tintColor={Colors.navyblue} style={{ height: 15, width: 15 }} resizeMode='contain' />

    <Text style={{ color: Colors.gray, fontSize: 14,marginLeft:3 }}>1,225</Text>

</View>



<View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>

<Image source={require('../images/bed.png')} tintColor={Colors.navyblue} style={{ height: 15, width: 15 }} resizeMode='contain' />

<Text style={{ color: Colors.gray, fontSize: 14,marginLeft:3 }}>3.0</Text>

</View>


    </View>



    
      <Text
        style={{
          fontSize: 14,
          fontWeight:'bold',
          // fontFamily: Fonts.regular,
          color: Colors.blue,
          marginRight:5
        }}>$340/month
      </Text>
 



  </View>



</View>



</View>

</Pressable>


))}

        











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
                <TouchableOpacity onPress={() => { dispatch(changerole({ mode: 'user' })); setIsmodal(false) }}
                >
                  <View
                    style={{
                      backgroundColor: Colors.blue,
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
                      Switch to User
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: Colors.blue,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginTop: 20,
                    height: 40,
                    width: 200,
                  }}>
                  <TouchableOpacity
                    onPress={() => { dispatch(changerole({ mode: 'admin' })); setIsmodal(false) }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        // fontFamily: Fonts.light,
                        color: 'white',
                      }}>
                      Switch to Admin
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
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
    backgroundColor: '#1A1C43',
    borderRadius: 20
    // zIndex:9999999999
  },

  conatiner: {
    flex: 1,
    backgroundColor: '#1A1C43',
    justifyContent: 'center',
    alignItems: 'center'
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