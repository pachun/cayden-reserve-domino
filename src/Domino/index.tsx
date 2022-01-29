import React from "react"
import { StyleSheet, View } from "react-native"
import ThreeDotSide from "./ThreeDotSide"
import TwoDotSide from "./TwoDotSide"
import FourDotSide from "./FourDotSide"

{
  /* transform: [{ rotate: "90deg" }, { scale: 0.5 }], */
}

const Domino = () => (
  <View
    style={{
      ...styles.container,
    }}
  >
    <ThreeDotSide />
    <View style={styles.centerDivider} />
    <FourDotSide />
  </View>
)

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
