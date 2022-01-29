import React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"
import { DotSideProps } from "./dotSideProps"

const OneDotSide = ({ scale = 1 }: DotSideProps) => {
  return (
    <View style={styles.container}>
      <Dot scale={scale} />
    </View>
  )
}

export default OneDotSide

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
