import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

const FourDotSide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.threeVerticalColumnsWithPaddingContainer}>
        <View style={styles.leftSideContainer}>
          <Dot />
          <Dot />
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.rightSideContainer}>
          <Dot />
          <Dot />
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
    padding: 10,
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
