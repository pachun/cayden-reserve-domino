import React from "react"
import { StyleSheet, View } from "react-native"
import ThreeDotSide from "./ThreeDotSide"
import TwoDotSide from "./TwoDotSide"
import FiveDotSide from "./FiveDotSide"
import FourDotSide from "./FourDotSide"
import SixDotSide from "./SixDotSide"

{
  /* transform: [{ rotate: "90deg" }, { scale: 0.5 }], */
}

const Domino = () => (
  <View
    style={{
      ...styles.container,

      transform: [{ rotate: "90deg" }, { scale: 0.5 }],
    }}
  >
    <FiveDotSide />
    <View style={styles.centerDivider} />
    <SixDotSide />
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
