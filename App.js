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
import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();
  return (
    <LinearGradient colors={['#FAEDE4', '#FAEDE4']} style={{ height: '100%' }}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Create' component={CreateAccount} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <HomePage/> */}
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
