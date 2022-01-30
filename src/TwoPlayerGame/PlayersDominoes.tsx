import React from "react"
import { View } from "react-native"
import { DominoType } from "fullSetOfDominoes"
import Domino from "Domino"

interface PlayersDominoesProps {
  dominoes: DominoType[]
}

const PlayersDominoes = ({ dominoes }: PlayersDominoesProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {dominoes.map(domino => (
        <Domino domino={domino} scale={0.5} />
      ))}
    </View>
  )
}

export default PlayersDominoes
