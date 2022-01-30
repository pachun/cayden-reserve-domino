import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import newTwoPlayerGame, { TwoPlayerGameType } from "newTwoPlayerGame"
import TwoPlayerGame from "TwoPlayerGame"

interface State {
  twoPlayerGame: TwoPlayerGameType
}

const state: State = {
  twoPlayerGame: newTwoPlayerGame(),
}

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 50 }} />
      <TwoPlayerGame game={state.twoPlayerGame} />
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
