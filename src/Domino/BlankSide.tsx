import React from "react"
import { StyleSheet, View } from "react-native"

const BlankSide = () => {
  return <View style={styles.container} />
}

export default BlankSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
