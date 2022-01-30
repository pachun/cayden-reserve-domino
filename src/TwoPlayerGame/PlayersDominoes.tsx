import React from "react"
import { View } from "react-native"
import { DominoType } from "fullSetOfDominoes"
import Domino from "Domino"

interface PlayersDominoesProps {
  dominoes: DominoType[]
  hidden: boolean
}

const PlayersDominoes = ({ dominoes, hidden }: PlayersDominoesProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {dominoes.map(domino => (
        <Domino domino={domino} scale={0.3} hidden={hidden} />
      ))}
    </View>
  )
}

export default PlayersDominoes
