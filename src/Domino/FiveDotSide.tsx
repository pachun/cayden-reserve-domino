import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

const FiveDotSide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.threeVerticalColumnsWithPaddingContainer}>
        <View style={styles.leftColumnContainer}>
          <Dot />
          <Dot />
        </View>
        <View style={styles.centerColumnContainer}>
          <Dot />
        </View>
        <View style={styles.rightColumnContainer}>
          <Dot />
          <Dot />
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
    padding: 10,
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
