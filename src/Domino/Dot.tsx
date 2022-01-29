import React from "react"
import { StyleSheet, View } from "react-native"

const defaultSize = 20

interface DotProps {
  scale?: number
}

const Dot = ({ scale = 1 }: DotProps) => {
  return (
    <View
      style={{
        ...styles.dot,
        width: defaultSize * scale,
        height: defaultSize * scale,
        borderRadius: (defaultSize * scale) / 2,
      }}
    />
  )
}

export default Dot

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#bbb",
  },
})
