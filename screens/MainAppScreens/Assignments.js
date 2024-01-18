import { color, font } from '../../global/styles';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Assignments = () => {
  const Assignment = ({navigation}) => {
    return(
      <View style={styles.Container}>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.primaryContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.secondaryContainer} onPress={()=> {navigation.navigate('AssignmentDeets')}}>
                    <View>
                        <View style={{justifyContent: 'center', alignItems: 'center', alignSelf:'flex-start', paddingLeft: 8, width:'30%'}}>
                            <Image
                                source={require('../../assets/Ellipse.png')}
                                style={{ width: 28}}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>Assignment 1</Text>
                        <Text style={{ fontFamily: font.medium, fontSize: 14, color: '#FF5151', includeFontPadding:false,}}><Text style={{color: color.dark}} >Due:</Text> 18 Nov 2023, 11:55 PM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.secondaryContainer} onPress={()=> {navigation.navigate('AssignmentDeets')}}>
                    <View>
                        <View style={{justifyContent: 'center', alignItems: 'center', alignSelf:'flex-start', paddingLeft: 8, width:'30%'}}>
                            <Image
                                source={require('../../assets/Ellipse.png')}
                                style={{ width: 28}}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>Assignment 2</Text>
                        <Text style={{ fontFamily: font.medium, fontSize: 14, color: '#FF5151', includeFontPadding:false,}}><Text style={{color: color.dark}} >Due:</Text> 18 Nov 2023, 11:55 PM</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <StatusBar style="auto" translucent={false} />
        </View>
    )
  }

  const AssignmentDeets = () => {
  return (
    <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.primaryContainer}>
            <View style={{marginBottom: 10}}>
              <Text style={{fontFamily: font.regular, color: color.dark, fontSize: 18}}>Due date and time</Text>
              <Text style={{fontFamily: font.semiBold, color: color.red, fontSize: 18, includeFontPadding:false, marginTop: -6}}>18 Nov 2023, 11:55 PM</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{fontFamily: font.regular, color: color.dark, fontSize: 18}}>Resubmissions allowed until</Text>
              <Text style={{fontFamily: font.semiBold, color: color.dark, fontSize: 18, includeFontPadding:false, marginTop: -6}}>21 Nov 2023 11:55 PM</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{fontFamily: font.regular, color: color.dark, fontSize: 18}}>Number of resubmissions allowed: <Text style={{fontFamily: font.semiBold}}>3</Text></Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{fontFamily: font.regular, color: color.dark, fontSize: 18}}>Status: <Text style={{fontFamily: font.semiBold, color: color.red}}>Not started</Text></Text>
            </View>
            <View style={{marginBottom: 32}}>
              <Text style={{fontFamily: font.regular, color: color.dark, fontSize: 18}}>Grade scale: <Text style={{fontFamily: font.semiBold}}>{`Points (max 10.00)`}</Text></Text>
            </View>
          </View>
          <View style={styles.primaryContainer}>
            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: color.secondaryAlt,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,}} onPress={()=> {navigation.navigate('AssignmentDeets')}}>
              <View>
                  <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>Instructions</Text>
                  <Text style={{ fontFamily: font.light, fontSize: 14, color: color.dark, includeFontPadding:false,}}>Lorem ipsum dolor sit amet consectetur. Massa et massa auctor feugiat hendrerit nam. Sed libero enim quis feugiat amet eu. Nibh aliquam dictum sagittis sed varius mauris arcu. Massa elementum ullamcorper in sed. Sed velit magne</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: color.primaryAlt,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,}} onPress={()=> {navigation.navigate('AssignmentDeets')}}>
              <View>
                  <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>Files</Text>
              </View>
              <View>
              <Image
                source={require('../../assets/pdf.png')}
                style={{ width: 28, marginTop: 8}}
                />
                <Text style={{color: color.light, fontFamily: font.regular, fontSize: 14}}>Assignment 1</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      <StatusBar style="auto" translucent={false} />
    </View>  
  )
}

return (
  <NavigationContainer independent={true} >
    <Stack.Navigator>
      <Stack.Screen name='Assignment' component={Assignment} options={{headerTitle: 'Your assignments', headerShadowVisible:false,
            headerTintColor: color.primary,
            headerStyle: { backgroundColor: color.background },
            headerTitleStyle: {fontFamily: font.semiBold,}
            }} />
      <Stack.Screen name='AssignmentDeets' component={AssignmentDeets} options={{headerTitle: 'Assignment 1', headerShadowVisible:false,
            headerTintColor: color.primary,
            headerStyle: { backgroundColor: color.background },
            headerTitleStyle: {fontFamily: font.semiBold,}
            }}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default Assignments;


const styles = StyleSheet.create({
  Container :{
      flex: 1,
      backgroundColor: color.background,
  },
  container: {
      flex: 1,
      marginBottom: 64,
      paddingHorizontal: 16,
  },
  primaryContainer:{
      width: "100%",
  },
  secondaryContainer:{
      backgroundColor: color.lightGrey,
      flexDirection: 'row',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      // justifyContent: 'space-between',
  }
})