import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FireDetails from '../screens/FireDetails';
import FirefighterAssignmentDetails from '../screens/FirefighterAssignmentDetails';
import Firefighters from '../screens/Firefighters';
import Fires from '../screens/Fires';
import Incident from '../screens/Incident';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import UnitAssignment from '../screens/UnitAssignment';
import Contacts from '../screens/Contacts';
import ChangesHistory from '../screens/ChangesHistory';
import AlarmHistory from '../screens/AlarmHistory';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AlarmHistory" options={{headerShown: false}} component={AlarmHistory} />
        <Stack.Screen name="ChangesHistory" options={{headerShown: false}} component={ChangesHistory} />
        <Stack.Screen name="Contacts" options={{headerShown: false}} component={Contacts} />
        <Stack.Screen name="FireDetails" options={{headerShown: false}} component={FireDetails} />
        <Stack.Screen name="FirefighterAssignmentDetails" options={{headerShown: false}} component={FirefighterAssignmentDetails} />
        <Stack.Screen name="Firefighters" options={{headerShown: false}} component={Firefighters} />
        <Stack.Screen name="Fires" options={{headerShown: false}} component={Fires} />
        <Stack.Screen name="Incident" options={{headerShown: false}} component={Incident} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        <Stack.Screen name="SignIn" options={{headerShown: false}} component={SignIn} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp} />
        <Stack.Screen name="Splash" options={{headerShown: false}} component={Splash} />
        <Stack.Screen name="UnitAssignment" options={{headerShown: false}} component={UnitAssignment} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}