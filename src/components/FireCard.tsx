import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FireCard = ({ status, code, time, location }) => {
  const navigation = useNavigation()

  const handleCardPress = () => {
    navigation.navigate('Contactos')
  }

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
          backgroundColor: '#FFFFFF',
          padding: 20,
          borderWidth: 1,
          borderColor: '#D9D9D9',
          borderRadius: 5
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: '50%',
            borderWidth: 3,
            borderColor: '#1761A0',
            marginLeft: -2.5,
            height: 43
          }}
        ></View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#A2A4B0',
              paddingVertical: 3
            }}
          >
            {status}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
              paddingVertical: 3
            }}
          >
            {code}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#A2A4B0',
              paddingVertical: 3
            }}
          >
            Tiempo
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
              paddingVertical: 3
            }}
          >
            {time}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#A2A4B0',
              paddingVertical: 3
            }}
          >
            Ubicación
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
              paddingVertical: 3
            }}
          >
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FireCard
