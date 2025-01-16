import { useState } from 'react'
import { View, Text,Image, ImageBackground ,Pressable,Modal, StyleSheet} from 'react-native'
import React from 'react'
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace'
import { assets } from './react-native.config'
import Images from './Helper/Images';
import SignUpPage from './components/SignUpPage'


const App = () => {
  const [status, setStatus] = useState(0);
  return (
    <View>
       {status == 0 ?(
    <View>
      <ImageBackground  style={style.bagimg} source={Images.image3}>
      <View style={style.v1}>
        <Text style={style.h1}>Curated for Your Health</Text>
       <View style={style.v2}>
        <Text style={style.text}>Choose the fruits you love and create a custome plan that aligns with your health goals.</Text>
       </View>
       </View>
       <Pressable  onPress={() => setStatus(1)}>
       
        <View style={style.v3}>
          <Text style={{color :'#ffffff',marginLeft : 20}}>Next</Text>
          </View> 
        </Pressable>
      
      </ImageBackground>
    </View>
      ): status == 1 ?(
        <View>
      <ImageBackground  style={style.bagimg1} source={Images.image4}>
      <View style={style.v1}>
        <Text style={style.h2}>Daily,Fresh Delivaries</Text>
       <View style={style.v2}>
        <Text style={style.text}>We bring fresh fruits to your door, exactly when you need them. No hassle, just healthy choices.</Text>
       </View>
       </View>
       <Pressable  onPress={() => setStatus(2)}>
        <View style={style.v3}>
          <Text style={{color :'#ffffff',marginLeft: 20}}>Next</Text>
          </View> 
        </Pressable>
      </ImageBackground>
    </View>
      ): status == 2 ?(
        <View>
      <ImageBackground  style={style.bagimg3} source={Images.image2}>
      <View style={style.v1}>
        <Text style={style.h1}>Curated for Your Health</Text>
       <View style={style.v2}>
        <Text style={style.text}>Choose the fruits you love and create a custome plan that aligns with your health goals.</Text>
       </View> 
       </View>
       <Pressable onPress={()=> setStatus(3)}>
       <View style={style.v3}>
         <Text style={{color :'#ffffff'}}>Get started</Text>
         </View> 
       </Pressable>
     
      </ImageBackground>
    </View>
      ):(
        <View>
          <SignUpPage />
        </View>
      )
      }
    </View>
  )
}
const style= StyleSheet.create({
  bagimg :{width : 393,height:800, marginTop: -3},
  bagimg1 :{width : 362,height:852,marginLeft: -2},
  bagimg3 :{width : 360,height:800, marginTop: -3},
  h1 :{
    fontFamily: 'dancingscriptsemibold',
    fontWeight: 600,
    fontSize: 24,   
    color:'#ffffff',
    lineHeight : 32.68,
    padding : 10, 
    marginLeft: 10
    },
    h2 :{
      fontFamily: 'OpenSansMedium',
      fontWeight: 600,
      fontSize: 24,   
      color:'#ffffff',
      lineHeight : 32.68,
      padding : 10, 
      marginLeft: 25
      },
  text :{
    fontFamily: 'Raleway-Regular',
    fontWeight: 400,
    fontSize :16,
    lineHeight: 24,
    textAlign : 'center',
    color: '#ffffff'
  },
  v1 :{
    width : 290, 
    height: 125, 
    marginTop : 450, 
    marginLeft :36 
  },
  v2 :{
    width : 290,
    height: 90,
    padding :10, 
    gap:10,
    marginTop: -15
  },
  v3 :{
    backgroundColor :'#39B549', 
    width : 280,
    height: 51, 
    marginTop : 80, 
    marginLeft: 50, 
    borderRadius: 20, 
    paddingTop: 16,
    paddingRight: 100, 
    paddingBottom: 16,
    paddingLeft: 100,
    gap :10
  },
  v4 :{
    backgroundColor :'#39B549', 
    width : 280,
    height: 51, 
    marginTop : 8, 
    marginLeft: 10, 
    borderRadius: 20, 
    paddingTop: 16,
    paddingRight: 100, 
    paddingBottom: 16,
    paddingLeft: 100,
    gap :10
  },
})

export default App