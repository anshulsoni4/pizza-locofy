const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoadingScreen from "./screens/LoadingScreen";
import DescriptionPage from "./screens/DescriptionPage";
import Category from "./screens/Category";
import Cart from "./screens/Cart";
import Confirm1 from "./screens/Confirm1";
import Checkout from "./screens/Checkout";
import HomePage from "./screens/HomePage";
import InitialPage from "./screens/InitialPage";
import GetStarted2 from "./screens/GetStarted2";
import GetStartedWindow from "./screens/GetStartedWindow";
import SignUpPage from "./screens/SignUpPage";
import HomePage1 from "./screens/HomePage1";
import LoginPage from "./screens/LoginPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DescriptionPage"
              component={DescriptionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={Category}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirm"
              component={Confirm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InitialPage"
              component={InitialPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted2"
              component={GetStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStartedWindow"
              component={GetStartedWindow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage1"
              component={HomePage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
