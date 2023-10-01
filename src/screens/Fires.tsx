import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import SvgUri from 'react-native-svg-uri'
import FireCard from '../components/FireCard'

const fires = [
  {
    status: 'Nueva',
    code: '1256AB12',
    time: '12:06 12:50',
    location: 'Ensanche Luperón'
  },
  {
    status: 'Nueva',
    code: '12543252',
    time: '12:06 12:50',
    location: 'Ensanche Luperón'
  },
  {
    status: 'Nueva',
    code: '12SADS897',
    time: '12:06 12:50',
    location: 'Ensanche Luperón'
  },
  {
    status: 'Nueva',
    code: '121112DDD',
    time: '12:06 12:50',
    location: 'Ensanche Luperón'
  }
]

const Fires = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#ffffff', padding: 20 }}>
        <SafeAreaView>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
            Incendios
          </Text>

          <Text style={{ fontSize: 9, marginBottom: 20, paddingVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5
            }}
          >
            <View style={styles.fireGroupContainer}>
              <View
                style={[styles.fireGroupIcon, { backgroundColor: '#AEC8DE' }]}
              >
                <SvgUri
                  source={require('../../assets/icons/group-objects-new.svg')}
                />
              </View>
              <View>
                <Text style={{ fontSize: 10, fontWeight: '400' }}>Nuevas</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>23</Text>
              </View>
            </View>
            <View style={styles.fireGroupContainer}>
              <View
                style={[styles.fireGroupIcon, { backgroundColor: '#FDF6F6' }]}
              >
                <SvgUri
                  source={require('../../assets/icons/process-on-vm-line.svg')}
                />
              </View>
              <View>
                <Text style={{ fontSize: 10, fontWeight: '400' }}>
                  En proceso
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>23</Text>
              </View>
            </View>
            <View style={styles.fireGroupContainer}>
              <View
                style={[styles.fireGroupIcon, { backgroundColor: '#D8F7C7' }]}
              >
                <SvgUri source={require('../../assets/icons/bed-ready.svg')} />
              </View>
              <View>
                <Text style={{ fontSize: 10, fontWeight: '400' }}>
                  Completadas
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>23</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              backgroundColor: '#EDF0F9',
              padding: 20,
              borderRadius: 5
            }}
          >
            <View>
              <Text
                style={{ fontSize: 12, fontWeight: 'bold', color: '#A2A4B0' }}
              >
                Todas
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 12, fontWeight: 'bold', color: '#A2A4B0' }}
              >
                Nuevas
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 12, fontWeight: 'bold', color: '#A2A4B0' }}
              >
                En proceso
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 12, fontWeight: 'bold', color: '#A2A4B0' }}
              >
                Completadas
              </Text>
            </View>
          </View>

          {fires.map((fire) => (
            <FireCard
              status={fire.status}
              code={fire.code}
              time={fire.time}
              location={fire.location}
              key={fire.code}
            />
          ))}
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  fireGroupContainer: {
    flexDirection: 'row'
  },
  fireGroupIcon: {
    width: 28,
    height: 28,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Fires
