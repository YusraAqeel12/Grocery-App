import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screen/SignUp';
import OnScreen from '../Screen/OnScreen';
import HomeScreen from '../Screen/HomeScreen';
import ItemScreen from '../Screen/ItemScreen';
const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator   >

        <Stack.Screen
          name="Auth"
          component={AuthNavigation} />


        <Stack.Screen
          name="Home"
          component={HomeNavigator} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AuthNavigation = () => {
  return (
    <Stack.Navigator >

      <Stack.Screen
        options={{ headerShown: false }}
        name="LOGIN"
        component={OnScreen}
      />


      <Stack.Screen
        name="SIGN IN"
        component={SignUp}
      />

    </Stack.Navigator>


  )
}
const HomeNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen} />

      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}

      />



    </Stack.Navigator>


  )

}


export default Navigator;