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
import Draggable from "Draggable"

const dotNumberToDominoComponent = [
  BlankSide,
  OneDotSide,
  TwoDotSide,
  ThreeDotSide,
  FourDotSide,
  FiveDotSide,
  SixDotSide,
]

const defaultWidth = 100
const defaultHeight = 200
const defaultBorderRadius = 10
const defaultBorderWidth = 3
const defaultSeparatorWidth = 2

interface DominoProps {
  domino: DominoType
  scale?: number
  hidden?: boolean
}

const Domino = ({ domino, scale = 1, hidden = false }: DominoProps) => {
  const topSideComponent = React.useMemo(() => {
    const Component = dotNumberToDominoComponent[domino.onTop]
    return <Component scale={scale} />
  }, [domino.onTop, scale])
  const bottomSideComponent = React.useMemo(() => {
    const Component = dotNumberToDominoComponent[domino.onBottom]
    return <Component scale={scale} />
  }, [domino.onBottom, scale])

  const objectRef = React.useRef<View>(null)

  const [
    startingXPositionInParentComponent,
    setStartingXPositionInParentComponent,
  ] = React.useState<number>(0)
  const [
    startingYPositionInParentComponent,
    setStartingYPositionInParentComponent,
  ] = React.useState<number>(0)
  const [
    xPositionOfParentComponentInWindow,
    setXPositionOfParentComponentInWindow,
  ] = React.useState<number>(0)
  const [
    yPositionOfParentComponentInWindow,
    setYPositionOfParentComponentInWindow,
  ] = React.useState<number>(0)
  const [dominoWidth, setDominoWidth] = React.useState<number>(
    defaultWidth * scale,
  )
  const [dominoHeight, setDominoHeight] = React.useState<number>(
    defaultHeight * scale,
  )

  if (hidden) {
    return (
      <View
        style={{
          ...styles.container,
          width: dominoWidth,
          height: dominoHeight,
          borderRadius: defaultBorderRadius * scale,
          borderWidth: defaultBorderWidth * scale,
          backgroundColor: "#bbb",
        }}
      />
    )
  }

  return (
    <Draggable
      objectWidth={dominoWidth}
      objectHeight={dominoHeight}
      startingXPositionInParentComponent={startingXPositionInParentComponent}
      startingYPositionInParentComponent={startingYPositionInParentComponent}
      xPositionOfParentComponentInWindow={xPositionOfParentComponentInWindow}
      yPositionOfParentComponentInWindow={yPositionOfParentComponentInWindow}
    >
      <View
        ref={objectRef}
        onLayout={() => {
          objectRef.current?.measure(
            (
              startingXPositionInParentComponent,
              startingYPositionInParentComponent,
              objectWidth,
              objectHeight,
              xPositionOfParentComponentInWindow,
              yPositionOfParentComponentInWindow,
            ) => {
              setStartingXPositionInParentComponent(
                startingXPositionInParentComponent,
              )
              setStartingYPositionInParentComponent(
                startingYPositionInParentComponent,
              )
              setDominoWidth(objectWidth)
              setDominoHeight(objectHeight)
              setXPositionOfParentComponentInWindow(
                xPositionOfParentComponentInWindow,
              )
              setYPositionOfParentComponentInWindow(
                yPositionOfParentComponentInWindow,
              )
            },
          )
        }}
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
    </Draggable>
  )
}

export default Domino

const styles = StyleSheet.create({
  container: {
    borderColor: "#bbb",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  centerDivider: {
    width: "100%",
    backgroundColor: "#bbb",
  },
})
