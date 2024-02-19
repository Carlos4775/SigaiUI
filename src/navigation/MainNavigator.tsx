import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Firefighters from '../screens/Firefighters'
import Fires from '../screens/Fires'
import Incident from '../screens/Incident'
import Profile from '../screens/Profile'
import UnitAssignment from '../screens/UnitAssignment'
import Contacts from '../screens/Contacts'
import ChangesHistory from '../screens/ChangesHistory'
import AlarmHistory from '../screens/AlarmHistory'
import CustomDrawer from '../components/CustomDrawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image } from 'react-native'

const Drawer = createDrawerNavigator()

const menuItems = [
  {
    label: 'Incendios',
    screenName: 'Fires',
    component: Fires,
    icon: 'fire',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Contactos',
    screenName: 'Contacts',
    component: Contacts,
    icon: 'contacts',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Perfil',
    screenName: 'Profile',
    component: Profile,
    icon: 'account-box',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Historial de alarmas',
    screenName: 'AlarmHistory',
    component: AlarmHistory,
    icon: 'alarm-light',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Historial de cambios',
    screenName: 'ChangesHistory',
    component: ChangesHistory,
    icon: 'history',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Unidades',
    screenName: 'UnitAssignment',
    component: UnitAssignment,
    icon: 'fire-truck',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Gestion de Incidentes',
    screenName: 'AlarmHistory',
    component: Incident,
    icon: 'account-group-outline',
    iconLibrary: 'MaterialCommunityIcons'
  },
  {
    label: 'Bomberos',
    screenName: 'AlarmHistory',
    component: Firefighters,
    icon: 'human',
    iconLibrary: 'MaterialCommunityIcons'
  }
]

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SignIn"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          headerTintColor: '#1761A0',
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
          drawerInactiveBackgroundColor: '#FFFFFF',
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: '#A6AAB8',
            borderRadius: 0,
            width: '100%',
            marginHorizontal: 0,
            marginVertical: 0
          },
          drawerActiveBackgroundColor: '#FDF6F6',
          drawerActiveTintColor: '#CF1717',
          drawerInactiveTintColor: '#A6AAB8'
        }}
      >
        {menuItems.map((menuItem) => (
          <Drawer.Screen
            name={menuItem.label}
            component={menuItem.component}
            key={menuItem.screenName}
            options={{
              drawerIcon: ({ focused, color, size }) => {
                return (
                  <MaterialCommunityIcons
                    name={menuItem.icon}
                    size={size}
                    color={color}
                  />
                )
              }
            }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
