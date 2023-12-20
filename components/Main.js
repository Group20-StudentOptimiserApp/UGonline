import React, { Component} from 'react'
import { View } from 'react-native';
import { color, font } from '../global/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

import MainUGContainer from '../screens/UGdetails/mainContainer';
import Home from '../screens/MainAppScreens/Home';
import Courses from '../screens/MainAppScreens/Courses';
import Profile from '../screens/MainAppScreens/Profile';
import OtherInfo from '../screens/MainAppScreens/otherInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export class Main extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }
  
  render() {
    const {currentUser} = this.props

    if(currentUser == undefined){
      return(
        <View></View>
      )
    }
    
    if(currentUser.Programme == undefined){
        return(
          <MainUGContainer/>
        )
    }
    // else if(currentUser.Programme !== undefined){

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const Home1 = () => {
      return <Home currentUser={currentUser}/>
    }
    const Profile1 = () =>{
      return <Profile currentUser={currentUser}/>
    }
    
    const MainHome = () => {
      return(
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: color.primary,
            headerShown:false,
            tabBarStyle: {
              position: 'absolute',
              height: 64,
              paddingTop: 6,
              paddingBottom: 6,
              borderTopColor: "#ffffff",
              borderTopWidth: 0.1,
            },
            tabBarLabelStyle: {
              fontFamily: font.medium,
              fontSize: 12,
            },
            tabBarHideOnKeyboard:true
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home1}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="home" color={focused? color.primary: "#999999"} size={32} />
              ),
              tabBarActiveTintColor: color.primary,
              // tabBarActiveBackgroundColor: color.primary,
            }}
          />
          <Tab.Screen
            name="Courses"
            component={Courses}
            options={{
              tabBarLabel: 'Courses',
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="human-male-board" color={focused? color.primary: "#999999"} size={32} />
              ),
            }}
          />
          <Tab.Screen
            name="OtherInfo"
            component={OtherInfo}
            options={{
              tabBarLabel: 'OtherInfo',
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="notebook" color={focused? color.primary: "#999999"} size={32}/>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile1}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="account" color={focused? color.primary: "#999999"} size = {32} />
              ),
            }}
            />
        </Tab.Navigator>
      )
    }
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainHome" component={MainHome} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )

      // <Home currentUser={currentUser}/>
    // }
    
    
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)