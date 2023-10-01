import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ContactCard = ({ name, idDocument, telephone, email, gateway }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Row label="Nombre" value={name} />
        <Row label="Cédula" value={idDocument} />
        <Row label="Teléfono" value={telephone} />
        <Row label="Correo electrónico" value={email} />
        <Row label="Gateway" value={gateway} />
      </View>
    </TouchableOpacity>
  )
}

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text>{value}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  label: {
    fontWeight: 'bold'
  }
})
export default ContactCard
