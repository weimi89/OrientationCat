import { View, StyleSheet, Text, StatusBar } from "react-native"
import Color from "../../Color"
import { useInterfaceOrientation, useDeviceOrientation } from "react-native-orientation-manager"

function OrientationObserverScreen(): React.JSX.Element {
  const interfaceOrientation = useInterfaceOrientation()
  const deviceOrientation = useDeviceOrientation()

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Color.PrimaryAdjacent} barStyle="light-content" />
      <Text style={style.text}>
        介面方向：{interfaceOrientation.getName()}
      </Text>
      <Text style={style.text}>
        設備方向：{deviceOrientation.getName()}
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
  },
})

export default OrientationObserverScreen