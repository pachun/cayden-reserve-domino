import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"
import { DotSideProps } from "./dotSideProps"
import defaultDotSidePadding from "./defaultDotSidePadding"

const FiveDotSide = ({ scale = 1 }: DotSideProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.threeVerticalColumnsWithPaddingContainer,
          padding: defaultDotSidePadding * scale,
        }}
      >
        <View style={styles.leftColumnContainer}>
          <Dot scale={scale} />
          <Dot scale={scale} />
        </View>
        <View style={styles.centerColumnContainer}>
          <Dot scale={scale} />
        </View>
        <View style={styles.rightColumnContainer}>
          <Dot scale={scale} />
          <Dot scale={scale} />
        </View>
      </View>
    </View>
  )
}

export default FiveDotSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  threeVerticalColumnsWithPaddingContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerColumnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightColumnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
})
