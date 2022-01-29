import React from "react"
import { StyleSheet, View } from "react-native"
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
  scale?: number
}

const defaultWidth = 100
const defaultHeight = 200
const defaultBorderRadius = 10
const defaultBorderWidth = 3
const defaultSeparatorWidth = 2

const Domino = ({ domino, scale = 1 }: DominoProps) => {
  const topSideComponent = React.useMemo(() => {
    const Component = dotNumberToDominoComponent[domino.onTop]
    return <Component scale={scale} />
  }, [domino.onTop, scale])
  const bottomSideComponent = React.useMemo(() => {
    const Component = dotNumberToDominoComponent[domino.onBottom]
    return <Component scale={scale} />
  }, [domino.onBottom, scale])

  return (
    <View
      style={{
        ...styles.container,
        width: defaultWidth * scale,
        height: defaultHeight * scale,
        borderRadius: defaultBorderRadius * scale,
        borderWidth: defaultBorderWidth * scale,
      }}
    >
      {topSideComponent}
      <View
        style={{
          ...styles.centerDivider,
          height: defaultSeparatorWidth * scale,
        }}
      />
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
