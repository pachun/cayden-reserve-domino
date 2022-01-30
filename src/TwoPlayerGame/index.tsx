import React from "react"
import { View } from "react-native"
import { TwoPlayerGameType } from "newTwoPlayerGame"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import PlayersDominoes from "./PlayersDominoes"

interface TwoPlayerGameProps {
  game: TwoPlayerGameType
}

const TwoPlayerGame = ({ game }: TwoPlayerGameProps) => {
  const insets = useSafeAreaInsets()
  return (
    <>
      <View style={{ height: insets.top }} />
      <View
        style={{
          flex: 1,
          paddingLeft: 50,
          paddingRight: 50,
          justifyContent: "space-between",
        }}
      >
        <PlayersDominoes dominoes={game.playersDominoes} hidden={true} />
        <PlayersDominoes dominoes={game.playersDominoes} hidden={false} />
      </View>
      <View style={{ height: insets.bottom }} />
    </>
  )
}

export default TwoPlayerGame
