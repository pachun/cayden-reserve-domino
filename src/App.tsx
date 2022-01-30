import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Domino from "Domino"
import newTwoPlayerGame, { TwoPlayerGame } from "./newTwoPlayerGame"

interface State {
  twoPlayerGame: TwoPlayerGame
}

const state: State = {
  twoPlayerGame: newTwoPlayerGame(),
}

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 50 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {state.twoPlayerGame.firstPlayer.dominoes.map(domino => (
          <Domino domino={domino} scale={0.5} />
        ))}
      </View>
      <View style={{ height: 50 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {state.twoPlayerGame.secondPlayer.dominoes.map(domino => (
          <Domino domino={domino} scale={0.5} />
        ))}
      </View>
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
