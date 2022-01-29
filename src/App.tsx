import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Domino from "Domino"
import fullSetOfDominoes, { DominoType } from "fullSetOfDominoes"

const dominoesPerPlayerInATwoPlayerGame = 7
const numberOfRandomDominoesNeededForAGame =
  2 * dominoesPerPlayerInATwoPlayerGame

const randomlySortedDominoes: DominoType[] = fullSetOfDominoes
  .map(domino => ({ domino, randomNumber: Math.random() }))
  .sort((dominoWithRandomNumber1, dominoWithRandomNumber2) =>
    dominoWithRandomNumber1.randomNumber < dominoWithRandomNumber2.randomNumber
      ? 1
      : -1,
  )
  .map(dominoWithRandomNumber => dominoWithRandomNumber.domino)
  .slice(numberOfRandomDominoesNeededForAGame)

const firstPlayersDominoes = randomlySortedDominoes.slice(
  0,
  dominoesPerPlayerInATwoPlayerGame,
)

const secondPlayersDominoes = randomlySortedDominoes.slice(
  dominoesPerPlayerInATwoPlayerGame,
)

interface State {
  firstPlayer: {
    dominoes: DominoType[]
  }
  secondPlayer: {
    dominoes: DominoType[]
  }
}

const state: State = {
  firstPlayer: {
    dominoes: firstPlayersDominoes,
  },
  secondPlayer: {
    dominoes: secondPlayersDominoes,
  },
}

const App = () => {
  return (
    <View style={styles.container}>
      {state.firstPlayer.dominoes.map(domino => (
        <Domino domino={domino} />
      ))}
      <Domino domino={{ onTop: 6, onBottom: 5 }} scale={0.3} />
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
  },
})
