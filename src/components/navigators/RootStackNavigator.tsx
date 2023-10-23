import * as React from "react"
import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator } from "@react-navigation/stack"
import { Platform } from "react-native"
import Color from "../../Color"
import type RootStackParamList from "../../types/RootStackParamList"
import HomeScreen from "../screens/HomeScreen"
import OrientationObserverScreen from "../screens/OrientationObserverScreen"
import OrientationLockedScreen from "../screens/OrientationLockedScreen"
import LandscapeOnlyWithLeavingOnOrientationChangeScreen from "../screens/LandscapeOnlyWithLeavingOnOrientationChangeScreen"
import PortraitOnlyThatNavigatesToLandscapeOnlyScreen from "../screens/PortraitOnlyThatNavigatesToLandscapeOnlyScreen"

const RootStack = (Platform.OS === "windows" ? createStackNavigator : createNativeStackNavigator)<RootStackParamList>()

export function RootStackNavigator(): React.JSX.Element {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: style.header,
        headerTintColor: Color.PrimaryAdjacentText,
      }}
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="OrientationObserver" component={OrientationObserverScreen} options={{ title: "方向監視器" }} />
      <RootStack.Screen name="OrientationLocked" component={OrientationLockedScreen} />
      <RootStack.Screen
        name="LandscapeOnlyWithLeavingOnOrientationChange"
        component={LandscapeOnlyWithLeavingOnOrientationChangeScreen}
        options={{ title: "僅限橫向並在方向變更時離開" }}
      />
      <RootStack.Screen
        name="PortraitOnlyThatNavigatesToLandscapeOnly"
        component={PortraitOnlyThatNavigatesToLandscapeOnlyScreen}
        options={{
          title: "僅限豎向，可導航至僅限橫向",
          headerStyle: style.portraitOnlyThatNavigatesToLandscapeOnlyHeader,
          headerTintColor: Color.SecondaryAdjacentText,
        }}
      />
    </RootStack.Navigator>
  )
}

const style = StyleSheet.create({
  header: {
    backgroundColor: Color.PrimaryAdjacent,
    borderBottomWidth: 0,
  },
  portraitOnlyThatNavigatesToLandscapeOnlyHeader: {
    backgroundColor: Color.SecondaryAdjacent,
    borderBottomWidth: 0,
  },
})