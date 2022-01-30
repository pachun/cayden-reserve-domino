import React from "react"
import { View } from "react-native"
import { TwoPlayerGameType } from "newTwoPlayerGame"
import PlayersDominoes from "./PlayersDominoes"

interface TwoPlayerGameProps {
  game: TwoPlayerGameType
}

const TwoPlayerGame = ({ game }: TwoPlayerGameProps) => {
  return (
    <View>
      <PlayersDominoes dominoes={game.playersDominoes} />
    </View>
  )
}

export default TwoPlayerGame
