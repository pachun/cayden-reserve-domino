import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

const TwoDotSide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.threeVerticalColumnsWithPaddingContainer}>
        <View style={styles.bottomAlignedContainer}>
          <Dot />
        </View>
        <View style={styles.centerAlignedContainer}>
          <Dot />
        </View>
        <View style={styles.topAlignedContainer}>
          <Dot />
        </View>
      </View>
    </View>
  )
}

export default TwoDotSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  threeVerticalColumnsWithPaddingContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
  },
  bottomAlignedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  centerAlignedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topAlignedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
})
