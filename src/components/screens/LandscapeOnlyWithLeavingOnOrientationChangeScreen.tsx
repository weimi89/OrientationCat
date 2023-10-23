import * as React from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"
import Color from "../../Color"
import { useInterfaceOrientationWhenFocusedEffect, type InterfaceOrientation } from "react-native-orientation-manager"
import type RootStackScreenProps from "../../types/RootStackScreenProps"

function LandscapeOnlyWithLeavingOnOrientationChangeScreen({ navigation }: RootStackScreenProps<"LandscapeOnlyWithLeavingOnOrientationChange">): React.JSX.Element {
  useInterfaceOrientationWhenFocusedEffect((interfaceOrientation: InterfaceOrientation) => {
    if (!interfaceOrientation.isLandscape()) navigation.goBack()
  })

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Color.PrimaryAdjacent} barStyle="light-content" />
      <Text style={style.text}>
        這是僅限橫向的畫面，當方向變更為豎向時將返回。
      </Text>
      <Text style={style.text}>
        請嘗試將方向更改為豎向。
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Color.TertiaryText,
    fontSize: 18,
    textAlign: "center",
  },
})

export default LandscapeOnlyWithLeavingOnOrientationChangeScreen