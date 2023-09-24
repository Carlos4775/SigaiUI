import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { View, Text, ImageBackground, Image } from 'react-native'
import alert from '../../assets/icons/alert.png'

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../../assets/images/transparent-line.png')}
          style={{ padding: 20 }}
          blurRadius={2}
        >
          <Image
            source={require('../../assets/images/image-profile.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10
            }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
            Ashfak Sayem
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
        <View
          style={{
            padding: 30,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Image source={alert} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer
