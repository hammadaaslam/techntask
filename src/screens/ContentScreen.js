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
  ImageBackground
} from 'react-native';
import React, { useState, useRef } from "react";
import { Colors } from '../utils/Colors';



const ContentScreen = ({ navigation }) => {



  const [current, setCurrent] = useState('description')


  const data = [
    {
      id: 1,
      image: require('../images/bxs_car-wash.png'),
      title: 'Car Parking',

    },
    {
      id: 2,
      image: require('../images/map_swimming.png'),

      title: 'Swimming',

    },
    {
      id: 3,
      image: require('../images/material-symbols_exercise.png'),

      title: 'Gym',

    },
    {
      id: 4,
      image: require('../images/eat.png'),

      title: 'Restaurant',

    },
    {
      id: 5,
      image: require('../images/fontisto_wifi.png'),

      title: 'WIFI',

    },
    {
      id: 6,
      image: require('../images/ic_baseline-pets.png'),

      title: 'Pet Center',

    },
    {
      id: 7,
      image: require('../images/fa-solid_running.png'),

      title: 'Sports',

    },
    {
      id: 8,
      image: require('../images/map_laundry.png'),

      title: 'Laundry',

    },

  ];



  const data2 = [
    {
      id: 1,
      image: require('../images/image1.png'),


    },
    {
      id: 2,
      image: require('../images/image2.png'),


    },
    {
      id: 3,
      image: require('../images/image3.png'),


    },
    {
      id: 4,
      image: require('../images/image1.png'),


    },
    {
      id: 5,
      image: require('../images/image2.png'),


    },
    {
      id: 6,
      image: require('../images/image3.png'),

    },


  ];





  const data3 = [
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.',
      image: require('../images/image1.png'),


    },
    {
      id: 2,
      title: 'Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.',
      image: require('../images/image2.png'),


    },



  ];




  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };


  const chunkedData = chunkArray(data, 4);
  const chunkedData2 = chunkArray(data2, 2);



  return (
    <View style={{
      flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      backgroundColor: 'white'
    }}>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>


        <ImageBackground style={{ width: '100%', height: 400 }} resizeMode='cover' source={require('../images/house3.png')} >


          <View style={{ alignSelf: 'center', width: '90%', marginTop: 20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>


            <View>
              <Image source={require('../images/back.png')} style={{ height: 40, width: 40 }} resizeMode='contain' />
            </View>


            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../images/share.png')} style={{ height: 40, width: 40, marginRight: 20 }} resizeMode='contain' />

              <Image source={require('../images/heart.png')} style={{ height: 40, width: 40 }} resizeMode='contain' />
            </View>



          </View>

        </ImageBackground>





        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>

          <View style={{ flexDirection: 'row' }}>

            <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />
            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>4.9 (6.8K reviews)</Text>


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



        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>



          <Text style={{ color: Colors.navyblue, fontSize: 22, fontWeight: 'bold', }}>Woodland Apartment</Text>




          <Text style={{ color: Colors.gray, fontSize: 12, }}>1012 Ocean avanue, New yourk, USA</Text>


        </View>




        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', marginTop: 20 }} >


          <View style={{ width: '33.3%', borderBottomColor: current == 'description' ? Colors?.blue : Colors.gray, borderBottomWidth: 2, height: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => setCurrent('description')} style={{ color: current == 'description' ? Colors?.blue : Colors.gray, fontSize: 14, fontWeight: 'bold', }}>Description</Text>

          </View>

          <View style={{ width: '33.3%', borderBottomColor: current == 'gallery' ? Colors?.blue : Colors.gray, borderBottomWidth: 2, height: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => setCurrent('gallery')} style={{ color: current == 'gallery' ? Colors?.blue : Colors.gray, fontSize: 14, fontWeight: 'bold', }}>Gallery</Text>

          </View>


          <View style={{ width: '33.3%', borderBottomColor: current == 'review' ? Colors?.blue : Colors.gray, borderBottomWidth: 2, height: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => setCurrent('review')} style={{ color: current == 'review' ? Colors?.blue : Colors.gray, fontSize: 14, fontWeight: 'bold', }}>Review</Text>

          </View>


        </View>




        {current === 'description' ?
          <>


            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                height: 70,
                alignItems: 'center'
              }}>
              <View style={{ width: 85, textAlign: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                >
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 3,
                      height: 60,
                      width: 70,
                      borderRadius: 15,
                      justifyContent: 'center',
                    }}>
                    {/* <Ionicons
    style={{alignSelf: 'center'}}
    name="notifications-outline"
    size={20}
    color={'white'}
  /> */}
                    <Image
                      resizeMode="contain"
                      source={require('../images/ticket.png')}
                      style={styles.menuIcon}
                    />



                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.blue,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        marginTop: 3,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      1,225
                    </Text>


                    <Text
                      style={{
                        fontSize: 9,
                        color: Colors.gray,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        // marginTop: 5,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      sqft
                    </Text>
                  </View>



                </TouchableOpacity>

              </View>
              <View style={{ width: 85, textAlign: 'center', alignItems: 'center' }}>
                <TouchableOpacity >
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 3,
                      height: 60,
                      width: 70,
                      borderRadius: 15,
                      justifyContent: 'center',
                    }}>
                    {/* <Ionicons
    style={{alignSelf: 'center'}}
    name="notifications-outline"
    size={20}
    color={'white'}
  /> */}
                    <Image
                      resizeMode="contain"
                      source={require('../images/bed.png')}
                      style={styles.menuIcon}
                    />


                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.blue,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        marginTop: 2,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      3.0
                    </Text>


                    <Text
                      style={{
                        fontSize: 9,
                        color: Colors.gray,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        // marginTop: 5,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      Bedrooms
                    </Text>
                  </View>




                </TouchableOpacity>

              </View>
              <View style={{ width: 85, textAlign: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 3,
                      height: 60,
                      width: 70,
                      borderRadius: 15,
                      justifyContent: 'center',
                    }}>
                    <Image
                      resizeMode="contain"
                      source={require('../images/ticket.png')}
                      style={styles.menuIcon}
                    />
                    {/* <Ionicons
    style={{alignSelf: 'center'}}
    name="cloud"
    size={20}
    color={'white'}
  /> */}



                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.blue,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        marginTop: 3,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      1.0
                    </Text>


                    <Text
                      style={{
                        fontSize: 9,
                        color: Colors.gray,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        // marginTop: 5,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      Bathroom
                    </Text>
                  </View>



                </TouchableOpacity>

              </View>
              <View style={{ width: 85, textAlign: 'center', alignItems: 'center' }}>
                <TouchableOpacity >
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 3,
                      height: 60,
                      width: 70,
                      borderRadius: 15,
                      justifyContent: 'center',
                    }}>
                    {/* <Ionicons
    style={{alignSelf: 'center'}}
    name="barcode"
    size={20}
    color={'white'}
  /> */}
                    <Image
                      resizeMode="contain"
                      source={require('../images/ticket.png')}
                      style={styles.menuIcon}
                    />

                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.blue,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        marginTop: 3,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      4,457
                    </Text>


                    <Text
                      style={{
                        fontSize: 9,
                        color: Colors.gray,
                        // color: colorScheme === 'dark'  ? '#fff' : '#000',
                        // marginTop: 5,
                        textAlign: 'center',
                        // fontFamily: Fonts.light,
                      }}>
                      Safety Rank
                    </Text>


                  </View>



                </TouchableOpacity>

              </View>


            </View>



            <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>



              <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', }}>Listing Agent</Text>



            </View>



            <View style={{ alignSelf: 'center', width: '90%', marginTop: 10, justifyContent: 'space-between', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>


              {/* <View> */}


              <Image source={require('../images/boy.png')} style={{ height: 40, width: 40, }} resizeMode={'contain'} />

              {/* </View> */}



              <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'space-between', }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                  <View style={{}}>


                    <Text style={{ color: Colors.navyblue, fontSize: 14, marginLeft: 5, fontWeight: 'bold' }}>Sandeep S.</Text>

                    <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>Partner</Text>


                  </View>




                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>



                    <Image source={require('../images/email.png')} style={{ height: 30, width: 30, marginRight: 10 }} resizeMode={'contain'} />

                    <Image source={require('../images/phone.png')} style={{ height: 30, width: 30, }} resizeMode={'contain'} />


                  </View>







                </View>










              </View>



            </View>





            <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>



              <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', }}>Facilities</Text>



            </View>







            {chunkedData.map((row, rowIndex) => (

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                  height: 70,
                  alignItems: 'center'
                }}>
                {row.map((item, index) => (

                  <View style={{ width: 85, textAlign: 'center', alignItems: 'center' }}>

                    <TouchableOpacity
                    >
                      <View
                        style={{
                          backgroundColor: 'white',
                          elevation: 3,
                          height: 60,
                          width: 70,
                          borderRadius: 15,
                          justifyContent: 'center',
                        }}>
                        {/* <Ionicons
style={{alignSelf: 'center'}}
name="notifications-outline"
size={20}
color={'white'}
/> */}
                        <Image
                          resizeMode="contain"
                          source={item?.image}
                          style={styles.menuIcon}
                        />





                        <Text
                          style={{
                            fontSize: 9,
                            color: Colors.gray,
                            // color: colorScheme === 'dark'  ? '#fff' : '#000',
                            marginTop: 5,
                            textAlign: 'center',
                            // fontFamily: Fonts.light,
                          }}>
                          {item?.title}
                        </Text>


                      </View>






                    </TouchableOpacity>

                  </View>

                ))}




              </View>

            ))}
















            <View style={{ flexDirection: 'row', alignSelf: 'center', width: '90%', justifyContent: 'space-between', marginTop: 10 }}>

              <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', }}>Address</Text>


              <Text style={{ color: Colors.blue, fontSize: 14, fontWeight: 'bold', }}>View on Map</Text>




            </View>




            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 10 }}>

              <Image source={require('../images/locationbottom.png')} style={{ height: 20, width: 20, tintColor: Colors.navyblue }} resizeMode='contain' />


              <Text style={{ color: Colors.navyblue, fontSize: 14, marginLeft: 10 }}>Lorem Ipsum is simply dummy text </Text>


            </View>





            <View style={{ alignSelf: 'center', width: '90%', marginTop: 20 }}>

              <Image source={require('../images/bigmap.png')} style={{ height: 200, width: '100%', }} resizeMode='contain' />


            </View>

          </>

          :


          current === 'gallery' ?



            <>
              <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>




                <Text style={{ color: Colors.navyblue, fontSize: 14, fontWeight: 'bold' }}>Gallery (400) </Text>


              </View>



              {chunkedData2.map((row, rowIndex) => (

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                    alignSelf: 'center',
                    // height: 70,
                    alignItems: 'center',
                    // backgroundColor:'yellow'
                  }}>
                  {row.map((item, index) => (
                    <>
                      {/* <View style={{marginTop:20,width:'100%',backgroundColor:'red'}}> */}


                      {/* <View style={{height:200,width:'50%',backgroundColor:'red',justifyContent:'center',alignItems:'center'}}> */}

                      <Image style={{ width: 160, height: 160, borderRadius: 20 }} resizeMode='contain' source={item?.image} />

                      {/* </View> */}
                    </>
                  ))}




                </View>

              ))}





            </>


            :


            current === 'review' ?
              <>




                <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>



                  <Text style={{ color: Colors.navyblue, fontSize: 18, fontWeight: 'bold', }}>Review</Text>



                </View>



                {data3.map((item, index) => (


                  <>

                    <View style={{ alignSelf: 'center', width: '90%', marginTop: 10, justifyContent: 'space-between', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>


                      {/* <View> */}


                      <Image source={require('../images/boy.png')} style={{ height: 40, width: 40, }} resizeMode={'contain'} />

                      {/* </View> */}



                      <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'space-between', }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                          <View style={{}}>


                            <Text style={{ color: Colors.navyblue, fontSize: 14, marginLeft: 5, fontWeight: 'bold' }}>Sandeep S.</Text>



                          </View>




                          <View style={{ alignItems: 'center' }}>



                            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5, fontWeight: 'bold' }}>2 months ago</Text>



                          </View>







                        </View>










                      </View>



                    </View>




                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>



                      <Text style={{ color: Colors.gray, fontSize: 13 }}>Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.</Text>



                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>

                      <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />
                        <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />

                        <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />
                        <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />
                        <Image source={require('../images/star.png')} style={{ height: 20, width: 20, }} resizeMode={'contain'} />

                        <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>5.0</Text>


                      </View>



                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            // fontFamily: Fonts.regular,
                            color: Colors.navyblue,
                          }}>
                          Helpful?
                        </Text>

                      </View>


                    </View>


                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>


                      <Image style={{ width: 100, height: 100, borderRadius: 20 }} resizeMode='contain' source={require('../images/image1.png')} />


                    </View>



        <View style={{ width: '100%', borderWidth: 0.3, borderColor: Colors.gray, marginTop: 10 }} />



      






                  </>


                ))}




<View style={{width:'90%',alignSelf:'center',marginTop:20}}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            // fontFamily: Fonts.regular,
                            color: 'red',
                          }}>View all 172 reviews
                        </Text>

                      </View>





              </>



              :


              null






        }







        <View style={{ width: '100%', borderWidth: 0.5, borderColor: Colors.gray, marginTop: 20 }} />


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: 10 }}>

          <View>
            <Text style={{ color: Colors.navyblue, fontSize: 14, fontWeight: 'bold' }}>Total Price</Text>
            <Text style={{ color: Colors.blue, fontSize: 20, fontWeight: 'bold', }}>$350 <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 10 }}>/month</Text></Text>



          </View>



          <TouchableOpacity style={{ width: 165, height: 55, backgroundColor: Colors.blue, borderRadius: 55, justifyContent: 'center', alignItems: 'center' }}>


            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Book Now</Text>


          </TouchableOpacity>


        </View>








      </ScrollView>
    </View>
  )
}

export default ContentScreen

const styles = StyleSheet.create({
  menuIcon: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    tintColor: Colors.blue
  },
})