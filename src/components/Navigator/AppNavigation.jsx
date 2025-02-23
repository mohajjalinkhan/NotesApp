//screens
import AllNotes from "../../screens/AllNotes";
import UpdateNote from "../../screens/UpdateNote";
import AddNote from "../../screens/AddNote";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="allNotes">
        <Stack.Screen
          name="allNotes"
          component={AllNotes}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addNote"
          component={AddNote}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#020617" },
            headerTintColor: "#fff",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="updateNote"
          component={UpdateNote}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#020617" },
            headerTintColor: "#fff",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
