import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import LibraryScreen from "./screens/LibraryScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Library") {
              iconName = "albums";
            } else if (route.name === "Settings") {
              iconName = "ios-cog";
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#F37878",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            borderTopWidth: 0.4,
            borderTopColor: "#AAAAAA",
            marginBottom: 5,
            paddingTop: 5,
          },
          headerStyle: {
            borderBottomColor: "#AAAAAA",
            borderBottomWidth: 0.4,
          },
        })}
      >
        <Stack.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Add"
                color="#F37878"
              />
            ),
          }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
