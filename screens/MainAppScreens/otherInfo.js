import { StatusBar } from 'expo-status-bar'
import { View, Text, SafeAreaView } from 'react-native'

const OtherInfo = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>OtherInfo</Text>
        <StatusBar style="auto" translucent={false} />
        </SafeAreaView>
    </View>
  )
}

export default OtherInfo