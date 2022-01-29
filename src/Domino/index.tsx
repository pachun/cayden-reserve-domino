import React from "react"
import { StyleSheet, View } from "react-native"
import ThreeDotSide from "./ThreeDotSide"
import TwoDotSide from "./TwoDotSide"
import FiveDotSide from "./FiveDotSide"
import FourDotSide from "./FourDotSide"
import SixDotSide from "./SixDotSide"
import BlankSide from "./BlankSide"

type FullSetOfDominoes = {
  sixOnTopAndSixOnBottom: { onTop: 6; onBottom: 6 }
  sixOnTopAndFiveOnBottom: { onTop: 6; onBottom: 5 }
  sixOnTopAndFourOnBottom: { onTop: 6; onBottom: 4 }
  sixOnTopAndThreeOnBottom: { onTop: 6; onBottom: 3 }
  sixOnTopAndTwoOnBottom: { onTop: 6; onBottom: 2 }
  sixOnTopAndOneOnBottom: { onTop: 6; onBottom: 1 }
  sixOnTopAndBlankOnBottom: { onTop: 6; onBottom: 0 }

  FiveOnTopAndFiveOnBottom: { onTop: 5; onBottom: 5 }
  FiveOnTopAndFourOnBottom: { onTop: 5; onBottom: 4 }
  FiveOnTopAndThreeOnBottom: { onTop: 5; onBottom: 3 }
  FiveOnTopAndTwoOnBottom: { onTop: 5; onBottom: 2 }
  FiveOnTopAndOneOnBottom: { onTop: 5; onBottom: 1 }
  FiveOnTopAndBlankOnBottom: { onTop: 5; onBottom: 0 }

  FourOnTopAndFourOnBottom: { onTop: 4; onBottom: 4 }
  FourOnTopAndThreeOnBottom: { onTop: 4; onBottom: 3 }
  FourOnTopAndTwoOnBottom: { onTop: 4; onBottom: 2 }
  FourOnTopAndOneOnBottom: { onTop: 4; onBottom: 1 }
  FourOnTopAndBlankOnBottom: { onTop: 4; onBottom: 0 }

  ThreeOnTopAndThreeOnBottom: { onTop: 3; onBottom: 3 }
  ThreeOnTopAndTwoOnBottom: { onTop: 3; onBottom: 2 }
  ThreeOnTopAndOneOnBottom: { onTop: 3; onBottom: 1 }
  ThreeOnTopAndBlankOnBottom: { onTop: 3; onBottom: 0 }

  TwoOnTopAndTwoOnBottom: { onTop: 2; onBottom: 2 }
  TwoOnTopAndOneOnBottom: { onTop: 2; onBottom: 1 }
  TwoOnTopAndBlankOnBottom: { onTop: 2; onBottom: 0 }

  OneOnTopAndOneOnBottom: { onTop: 1; onBottom: 1 }
  OneOnTopAndBlankOnBottom: { onTop: 1; onBottom: 0 }

  BlankOnTopAndBlankOnBottom: { onTop: 0; onBottom: 0 }
}

const fullSetOfDominoes: FullSetOfDominoes = {
  sixOnTopAndSixOnBottom: { onTop: 6, onBottom: 6 },
  sixOnTopAndFiveOnBottom: { onTop: 6, onBottom: 5 },
  sixOnTopAndFourOnBottom: { onTop: 6, onBottom: 4 },
  sixOnTopAndThreeOnBottom: { onTop: 6, onBottom: 3 },
  sixOnTopAndTwoOnBottom: { onTop: 6, onBottom: 2 },
  sixOnTopAndOneOnBottom: { onTop: 6, onBottom: 1 },
  sixOnTopAndBlankOnBottom: { onTop: 6, onBottom: 0 },
}

console.log(JSON.stringify(fullSetOfDominoes, null, 2))

const Domino = () => (
  <View
    style={{
      ...styles.container,
    }}
  >
    <BlankSide />
    <View style={styles.centerDivider} />
    <SixDotSide />
  </View>
)

export default Domino

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#bbb",
    justifyContent: "space-between",
  },
  centerDivider: {
    height: 2,
    width: "100%",
    backgroundColor: "#bbb",
  },
})
