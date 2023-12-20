import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { color, font } from '../../global/styles';
import { StatusBar } from 'expo-status-bar';

import L100 from './Courses/l100';
import L200 from './Courses/l200';
import L300 from './Courses/l300';
import L400 from './Courses/l400';


const Tab = createMaterialTopTabNavigator();


const Courses = ({currentUser}) => {
  const Level100 = () =>{
    return(
      <L100 currentUser={currentUser} />
    )
  }
  const Level200 = () =>{
    return(
      <L200 currentUser={currentUser} />
    )
  }
  const Level300 = () =>{
    return(
      <L300 currentUser={currentUser} />
    )
  }
  const Level400 = () =>{
    return(
      <L400 currentUser={currentUser} />
    )
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary,
        tabBarLabelStyle: { fontSize: 14, fontFamily: font.semiBold },
        // lazy: false,
      }}
    >
      <Tab.Screen name='Level 100' component={Level100} />
      <Tab.Screen name='Level 200' component={Level200} />
      <Tab.Screen name='Level 300' component={Level300} />
      <Tab.Screen name='Level 400' component={Level400} />
      
    </Tab.Navigator>
  )
}

export default Courses;