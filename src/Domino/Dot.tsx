import React from "react"
import { StyleSheet, View } from "react-native"

const Dot = () => {
  return <View style={styles.dot} />
}

export default Dot

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#bbb",
  },
})
