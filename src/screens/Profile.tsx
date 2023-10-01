import { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#ffffff', padding: 20 }}>
        <SafeAreaView>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
            Configuración de perfil
          </Text>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 20
            }}
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
          </View>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#D9D9D9',
              borderRadius: 5
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#1761A0',
                borderColor: '#D9D9D9',
                borderRadius: 5
              }}
            >
              <View style={{ padding: 20 }}>
                <AntDesign name="profile" color="white" size={24} />
              </View>
              <View style={{ padding: 20 }}>
                <Text style={{ color: '#ffffff' }}>Detalles de cuenta</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View style={{ padding: 20 }}>
                <Ionicons name="lock-closed-outline" size={24} />
              </View>
              <View style={{ padding: 20 }}>
                <Text>Cambiar contraseña</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View style={{ padding: 20 }}>
                <Feather name="edit" size={24} />
              </View>
              <View style={{ padding: 20 }}>
                <Text>Editar información</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <View style={{ padding: 20 }}>
                <Ionicons name="log-out-outline" size={24} />
              </View>
              <View style={{ padding: 20 }}>
                <Text>Cerrar sesión</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: 'bold', paddingVertical: 20 }}>
              Ajustes de cuenta
            </Text>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 140
                }}
              >
                Correo electrónico
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 80
                }}
              >
                Nombres
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 80
                }}
              >
                Apellidos
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 130
                }}
              >
                No. Identificación
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 110
                }}
              >
                No. Empleado
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 70
                }}
              >
                Puesto
              </Text>
              <TextInput style={styles.input} cursorColor="#000000" />
            </View>
            <View
              style={{
                paddingVertical: 20
              }}
            >
              <CustomButton
                title="Guardar"
                buttonStyle={{ backgroundColor: '#1761A0', borderRadius: 8 }}
                textStyle={{ color: 'white', fontSize: 13 }}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    flexBasis: 200,
    flexGrow: 2
  },
  input: {
    fontSize: 16,
    color: '#333333',
    paddingBottom: 10
  }
})

export default Profile
