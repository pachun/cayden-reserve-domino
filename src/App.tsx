import React from "react"
import { StatusBar } from "expo-status-bar"
import { FlatList, StyleSheet, View } from "react-native"
import Domino from "Domino"
import fullSetOfDominoes, { DominoType } from "fullSetOfDominoes"

const dominoesPerPlayerInATwoPlayerGame = 7
const numberOfRandomDominoesNeededForAGame =
  2 * dominoesPerPlayerInATwoPlayerGame

const randomlySortedDominoes: DominoType[] = fullSetOfDominoes
  .map(domino => [domino, Math.random()])
  .sort((domino1, domino2) => (domino1[1] < domino2[1] ? 1 : -1))
  .map(
    dominoInArrayWithSubsequentRandomNumber =>
      dominoInArrayWithSubsequentRandomNumber[0],
  )
  .slice(numberOfRandomDominoesNeededForAGame) as DominoType[] // this sucks.

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
      {state.firstPlayer.dominoes.map(playerOneDomino => (
        <Domino domino={playerOneDomino} />
      ))}
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
