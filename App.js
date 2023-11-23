import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/AuthenticationScreens/LoginScreen';
import SignUpScreen from './screens/AuthenticationScreens/SignUpScreen';
import Splash from './screens//HomeScreens/splashHome';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import * as Font from 'expo-font'


let customFonts = {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
}

const Stack = createStackNavigator();

export default class App extends React.Component {

  state ={
    fontsLoaded : false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({fontsLoaded: true});
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}