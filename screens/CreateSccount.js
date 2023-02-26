import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

function CreateAccount() {
  return (
    <View>
      <Image source={require('../images/medi1.png')} style={style.medi1} />
      <Text style={style.Resolvetext}>Resolve all your mental</Text>
      <Text style={style.problemtext}>PROBLEM</Text>
      <Text style={style.taketext}>Take a breath, let’s get started</Text>
      <TouchableOpacity  >
        <View style={style.CreateButton}>

        <Text style={style.createtext}>Create Account</Text>
        </View>
      </TouchableOpacity>
      <Text style={style.alreadytext}>Already have an account? <Text style={style.signintext}>Sign In</Text></Text>
    </View>

  )
}
const style = StyleSheet.create({
  medi1: {
    position: 'relative',
    width: 385,
    height: 544,

  },
  Resolvetext: {
    fontSize: 24,
    top: -70,
    position: 'relative',
    textAlign: 'center',
    color: '#000000'
  },
  problemtext: {
    fontSize: 45,
    top: -70,
    textAlign: 'center',
    fontWeight: 'semi-bold',
    color: '#181F39'
  },
  taketext: {
    fontSize: 15,
    top: -50,
    position: 'relative',
    textAlign: 'center',

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

  },
  createtext:{
    color:'#fff',
    fontSize:22,

  },
  alreadytext:{
    textAlign:'center',
    fontSize:16,

  },
  signintext:{
    fontWeight:'bold',
  }
})

export default CreateAccount