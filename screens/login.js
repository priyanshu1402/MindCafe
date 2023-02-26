import React from 'react'

import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export const Login = () => {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState('');
  return (
    <LinearGradient colors={['#FAEDE4', '#F4F1FA']} style={{height:'100%'}}>
        <Image source={require('../images/mindcafe.png')} style={style.mindcafe} />
        <View style={style.input}>
        <Image source={require('../images/emailicon.png')}style={style.icon}/>
        <TextInput
        style={style.inputtext}
        onChangeText={onChangeText}
        value={text}
        placeholder="UserEmail"
      />
      </View>
        <View style={style.input}>
        <Image source={require('../images/password.png')}style={style.icon} />
        <TextInput
        style={style.inputtext}
        onChangeText={onChangeText}
        value={text}
        placeholder="Password"
      />
      </View>
      <TouchableOpacity  >
        <View style={style.CreateButton}>

        <Text style={style.createtext}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={style.alreadytext}>Already have an account? <Text style={style.signintext}>Sign In</Text></Text>
    </LinearGradient>
  )
}
const style= StyleSheet.create({
    mindcafe:{
        width:228,
        height:96,
        left:64,
        top:74,

    },
    input:{
        width:289,
        height:61,
        top:270,
        left:35,
        borderRadius:20,
        backgroundColor:'#F8F8F8',
        color:'#D2CCCC',
        fontSize:18,
        flexDirection:'row',
        marginBottom:20,

    },
    inputtext:{
        fontSize:24,
        left:18

    },
    icon:{
        width:32,
        color:'#CECECE',
        height:34,
        top:16,
        left:15
    },
    CreateButton:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#121A3A',
        padding: 10,
        width:210,
        left:75,
        height:64,
        borderRadius:25,
        top:350,
      },
      createtext:{
        color:'#fff',
        fontSize:22,
    
      },
      alreadytext:{
        textAlign:'center',
        fontSize:16,
        top:400,
    
      },
      signintext:{
        fontWeight:'bold',
      }
})
