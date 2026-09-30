import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "./src/screens/StudentsScreens";
import ApiScreen from "./src/screens/ApiScreens";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="Api"
          component={ApiScreen}
          options={{ title: "Personajes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}