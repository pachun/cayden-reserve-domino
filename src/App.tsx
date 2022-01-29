import React from "react"
import { StatusBar } from "expo-status-bar"
import { FlatList, StyleSheet, View } from "react-native"
import Domino from "Domino"

const App = () => {
  return (
    <View style={styles.container}>
      <Domino domino={{ onTop: 5, onBottom: 4 }} />
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
