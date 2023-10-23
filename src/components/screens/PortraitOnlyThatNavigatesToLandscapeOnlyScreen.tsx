import * as React from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"
import Color from "../../Color"
import type RootStackScreenProps from "../../types/RootStackScreenProps"
import { useInterfaceOrientationWhenFocusedEffect, type InterfaceOrientation } from "react-native-orientation-manager"

function PortraitOnlyThatNavigatesToLandscapeOnlyScreen({ navigation }: RootStackScreenProps<"PortraitOnlyThatNavigatesToLandscapeOnly">): React.JSX.Element {
  useInterfaceOrientationWhenFocusedEffect((interfaceOrientation: InterfaceOrientation) => {
    if (interfaceOrientation.isLandscape()) navigation.push("LandscapeOnlyWithLeavingOnOrientationChange")
  })

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Color.SecondaryAdjacent} barStyle="dark-content" />
      <Text style={style.text}>
        這是僅限豎向的畫面，當方向變更為橫向時，導航到僅限橫向的畫面，當方向變更為豎向時返回。
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: Color.SecondaryText,
    fontSize: 18,
    textAlign: "center",
  },
})

export default PortraitOnlyThatNavigatesToLandscapeOnlyScreen