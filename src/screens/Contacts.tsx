import { useCallback, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { debounce } from 'lodash'
import CustomButton from '../components/CustomButton'
import CustomTable from '../components/CustomTable'
import ContactCard from '../components/ContactCard'

const Contacts = () => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const handleSearch = (search) => {
    if (search && search.length > 2) {
      setLoading(true)
      // searchContacts({
      //   query: search,
      //   include_adult: false,
      //   language: 'en-US',
      //   page: '1'
      // }).then((data) => {
      //   console.log('got search results')
      //   setLoading(false)
      //   if (data && data.results) setResults(data.results)
      // })
    } else {
      setLoading(false)
      setResults([])
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#ffffff', padding: 20 }}>
        <SafeAreaView>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
            Contactos
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.container}>
              <Text
                style={{
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  marginTop: -10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  width: 100
                }}
              >
                Buscador
              </Text>
              <TextInput
                style={styles.input}
                inputMode="search"
                onChangeText={handleTextDebounce}
                cursorColor="#000000"
              />
            </View>
            <View
              style={{
                flexBasis: 'auto',
                flexGrow: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CustomButton
                title="Agregar"
                buttonStyle={{ backgroundColor: '#1761A0', borderRadius: 8 }}
                textStyle={{ color: 'white', fontSize: 13 }}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <ContactCard
              name="José Santos"
              idDocument=""
              telephone=""
              email=""
              gateway=""
            />
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

export default Contacts
