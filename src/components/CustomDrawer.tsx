import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { View, Text, ImageBackground, Image } from 'react-native'
import SvgUri from 'react-native-svg-uri'

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../../assets/images/splash.png')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../../assets/images/favicon.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10
            }}
          />
          <Text>John Doe</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View>
        <SvgUri source={require('../../assets/icons/alert.svg')} />
      </View>
    </View>
  )
}

export default CustomDrawer
