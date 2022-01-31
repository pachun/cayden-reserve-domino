import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import newTwoPlayerGame, { TwoPlayerGameType } from "newTwoPlayerGame"
import TwoPlayerGame from "TwoPlayerGame"
import Domino from "./Domino"

interface State {
  twoPlayerGame: TwoPlayerGameType
}

const state: State = {
  twoPlayerGame: newTwoPlayerGame(),
}

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <Domino domino={{ onTop: 6, onBottom: 2 }} />
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
