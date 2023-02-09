import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import LibraryScreen from './screens/LibraryScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator>
        <Stack.Screen name='Library' component={LibraryScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
