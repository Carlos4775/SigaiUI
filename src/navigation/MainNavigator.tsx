import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomIcon from '../components/CustomIcon'
import Firefighters from '../screens/Firefighters'
import Fires from '../screens/Fires'
import Incident from '../screens/Incident'
import Profile from '../screens/Profile'
import UnitAssignment from '../screens/UnitAssignment'
import Contacts from '../screens/Contacts'
import ChangesHistory from '../screens/ChangesHistory'
import AlarmHistory from '../screens/AlarmHistory'
import CustomDrawer from '../components/CustomDrawer'
import contactsIcon from '../../assets/icons/contacts.svg'
import historialCambiosIcon from '../../assets/icons/historial-cambios.svg'

const Drawer = createDrawerNavigator()

const menuItems = [
  {
    label: 'Incendios',
    screenName: 'Fires',
    component: Fires
  },
  {
    label: 'Contactos',
    screenName: 'Conctacts',
    component: Contacts,
    icon: contactsIcon
  },
  {
    label: 'Perfil',
    screenName: 'Profile',
    component: Profile
  },
  {
    label: 'Historial de alarmas',
    screenName: 'AlarmHistory',
    component: AlarmHistory
  },
  {
    label: 'Historial de cambios',
    screenName: 'ChangesHistory',
    component: ChangesHistory,
    icon: historialCambiosIcon
  },
  {
    label: 'Unidades',
    screenName: 'UnitAssignment',
    component: UnitAssignment
  },
  { label: 'Incidentes', screenName: 'AlarmHistory', component: Incident },
  {
    label: 'Bomberos',
    screenName: 'AlarmHistory',
    component: Firefighters
  }
]

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SignIn"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        {menuItems.map((menuItem) => (
          <Drawer.Screen
            name={menuItem.label}
            component={menuItem.component}
            key={menuItem.screenName}
            options={{
              drawerIcon: ({ color, size }) => (
                <CustomIcon source={menuItem.icon} color={color} />
              )
            }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
