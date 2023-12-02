import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/AuthenticationScreens/LogIn';
import SignUpScreen from './screens/AuthenticationScreens/SignUp';
import Splash from './screens//HomeScreens/splashHome';
import ForgotPassword from './screens/AuthenticationScreens/ForgotPassword';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import * as Font from 'expo-font'

import { auth } from './firebase';
import { Text, View } from 'react-native';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk';
import Main from './components/Main';


const store = createStore(rootReducer, applyMiddleware(thunk))

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

  constructor(props){
    super(props);
    this.state={
      loaded: false,
    }
  }

  componentDidMount() {
    this._loadFontsAsync();
    auth.onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn : false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    const {loggedIn, loaded} = this.state;
    if(!loaded){
      return(
        <View>
          <Text>Loading ...</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}