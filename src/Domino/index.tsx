import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import BlankSide from "./BlankSide"
import OneDotSide from "./OneDotSide"
import TwoDotSide from "./TwoDotSide"
import ThreeDotSide from "./ThreeDotSide"
import FourDotSide from "./FourDotSide"
import FiveDotSide from "./FiveDotSide"
import SixDotSide from "./SixDotSide"
import { DominoType } from "fullSetOfDominoes"

const dotNumberToDominoComponent = [
  BlankSide,
  OneDotSide,
  TwoDotSide,
  ThreeDotSide,
  FourDotSide,
  FiveDotSide,
  SixDotSide,
]

interface DominoProps {
  domino: DominoType
  dominoStyle?: ViewStyle
}

const Domino = ({ domino, dominoStyle = {} }: DominoProps) => {
  const topSideComponent = React.useMemo(
    () => dotNumberToDominoComponent[domino.onTop](),
    [domino.onTop],
  )
  const bottomSideComponent = React.useMemo(
    () => dotNumberToDominoComponent[domino.onBottom](),
    [domino.onBottom],
  )

  return (
    <View
      style={{
        ...styles.container,
        ...dominoStyle,
      }}
    >
      {topSideComponent}
      <View style={styles.centerDivider} />
      {bottomSideComponent}
    </View>
  )
}

export default Domino

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#bbb",
    justifyContent: "space-between",
  },
  centerDivider: {
    height: 2,
    width: "100%",
    backgroundColor: "#bbb",
  },
})
