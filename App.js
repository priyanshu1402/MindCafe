/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Node } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import CreateAccount from './screens/CreateSccount';
import { Login } from './screens/login';
import { Register } from './screens/Register';
import Navbar from './component/navbar';
import HomePage from './screens/HomePage';
import BottomNav from './component/BottomNav';
import {NavigationContainer} from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <LinearGradient colors={['#FAEDE4', '#FAEDE4']} style={{height:'100%'}}>

      <SafeAreaView style={styles.sectionContainer}>
        <NavigationContainer>

        {/* <Login/> */}
        {/* <Register/> */}
        {/* <Navbar/> */}
        {/* <HomePage/> */}
        <BottomNav/>
        </NavigationContainer>
        

      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // backgroundColor: "#171E38",
  }
});

export default App;
