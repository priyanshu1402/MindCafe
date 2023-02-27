import React from 'react'
import Navbar from '../component/navbar';
import List from '../component/List';

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
function HomePage({navigation}) {
  return (
    <View>
        <Navbar/>
        <List/>

    </View>
  )
}

export default HomePage;