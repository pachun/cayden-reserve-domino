import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"
import { DotSideProps } from "./dotSideProps"
import defaultDotSidePadding from "./defaultDotSidePadding"

const FourDotSide = ({ scale = 1 }: DotSideProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.threeVerticalColumnsWithPaddingContainer,
          padding: defaultDotSidePadding * scale,
        }}
      >
        <View style={styles.leftSideContainer}>
          <Dot scale={scale} />
          <Dot scale={scale} />
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.rightSideContainer}>
          <Dot scale={scale} />
          <Dot scale={scale} />
        </View>
      </View>
    </View>
  )
}

export default FourDotSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  threeVerticalColumnsWithPaddingContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftSideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  verticalSeparator: {
    flex: 1,
  },
  rightSideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
})
