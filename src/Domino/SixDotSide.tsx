import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

const TwoDotSide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.threeVerticalColumnsWithPaddingContainer}>
        <View style={styles.bottomAlignedContainer}>
          <Dot />
          <Dot />
          <Dot />
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.topAlignedContainer}>
          <Dot />
          <Dot />
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
    justifyContent: "space-between",
  },
  verticalSeparator: {
    flex: 1,
  },
  topAlignedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
})
