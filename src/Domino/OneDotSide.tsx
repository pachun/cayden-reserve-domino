import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

const OneDotSide = () => {
  return (
    <View style={styles.container}>
      <Dot />
    </View>
  )
}

export default OneDotSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
