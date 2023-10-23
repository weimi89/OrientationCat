import { Alert, Platform, ScrollView, StatusBar, StyleSheet } from "react-native"
import Color from "../../Color"
import ListItem from "../ListItem"
import Orientations from "react-native-orientation-manager"
import OrientationLock from "../../types/OrientationLock"
import OrientationLockedListItem from "../OrientationLockedListItem"

function HomeScreen(): React.JSX.Element {
  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor={Color.PrimaryAdjacent} barStyle="light-content" />
      <ListItem name="方向監視器" screen="OrientationObserver" />
      <OrientationLockedListItem name="僅限豎向" lock={OrientationLock.PORTRAIT} text="這是僅限豎向的畫面" />
      <OrientationLockedListItem
        name="僅限倒置豎向"
        lock={OrientationLock.PORTRAIT_UPSIDE_DOWN}
        text="這是僅限倒置豎向的畫面。在某些設備上不支援。"
      />
      <OrientationLockedListItem name="僅限左橫向" lock={OrientationLock.LANDSCAPE_LEFT} text="這是僅限左橫向的畫面" />
      <OrientationLockedListItem name="僅限右橫向" lock={OrientationLock.LANDSCAPE_RIGHT} text="這是僅限右橫向的畫面" />
      <OrientationLockedListItem name="僅限橫向" lock={OrientationLock.LANDSCAPE} text="這是僅限橫向的畫面" />
      <OrientationLockedListItem
        name="除倒置豎向外的所有方向"
        lock={OrientationLock.ALL_ORIENTATIONS_BUT_UPSIDE_DOWN}
        text="這是除倒置豎向外的所有方向的畫面"
        guard={(): boolean => {
          if (Platform.OS === "android") {
            Alert.alert("不支援", "Android 上不支援此鎖定類型。")
            return false
          }

          return true
        }}
      />
      <OrientationLockedListItem
        name="解鎖所有方向"
        lock={OrientationLock.UNLOCK_ALL_ORIENTATIONS}
        text="此畫面中解鎖所有方向。這可能允許某些設備進入倒置豎向。"
      />
      <ListItem
        name="僅限橫向並在方向變更時離開"
        screen="LandscapeOnlyWithLeavingOnOrientationChange"
        guard={(): boolean => {
          if (Orientations.interfaceOrientation.isLandscape()) return true

          Alert.alert("僅限橫向", "您必須處於橫向模式才能進入此畫面。")
          return false
        }}
      />
      <ListItem name="僅限豎向，可導航至僅限橫向" screen="PortraitOnlyThatNavigatesToLandscapeOnly" />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Primary,
  },
})

export default HomeScreen