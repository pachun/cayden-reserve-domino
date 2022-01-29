type SixOnTopAndSixOnBottom = { onTop: 6; onBottom: 6 }
type SixOnTopAndFiveOnBottom = { onTop: 6; onBottom: 5 }
type SixOnTopAndFourOnBottom = { onTop: 6; onBottom: 4 }
type SixOnTopAndThreeOnBottom = { onTop: 6; onBottom: 3 }
type SixOnTopAndTwoOnBottom = { onTop: 6; onBottom: 2 }
type SixOnTopAndOneOnBottom = { onTop: 6; onBottom: 1 }
type SixOnTopAndBlankOnBottom = { onTop: 6; onBottom: 0 }

type FiveOnTopAndFiveOnBottom = { onTop: 5; onBottom: 5 }
type FiveOnTopAndFourOnBottom = { onTop: 5; onBottom: 4 }
type FiveOnTopAndThreeOnBottom = { onTop: 5; onBottom: 3 }
type FiveOnTopAndTwoOnBottom = { onTop: 5; onBottom: 2 }
type FiveOnTopAndOneOnBottom = { onTop: 5; onBottom: 1 }
type FiveOnTopAndBlankOnBottom = { onTop: 5; onBottom: 0 }

type FourOnTopAndFourOnBottom = { onTop: 4; onBottom: 4 }
type FourOnTopAndThreeOnBottom = { onTop: 4; onBottom: 3 }
type FourOnTopAndTwoOnBottom = { onTop: 4; onBottom: 2 }
type FourOnTopAndOneOnBottom = { onTop: 4; onBottom: 1 }
type FourOnTopAndBlankOnBottom = { onTop: 4; onBottom: 0 }

type ThreeOnTopAndThreeOnBottom = { onTop: 3; onBottom: 3 }
type ThreeOnTopAndTwoOnBottom = { onTop: 3; onBottom: 2 }
type ThreeOnTopAndOneOnBottom = { onTop: 3; onBottom: 1 }
type ThreeOnTopAndBlankOnBottom = { onTop: 3; onBottom: 0 }

type TwoOnTopAndTwoOnBottom = { onTop: 2; onBottom: 2 }
type TwoOnTopAndOneOnBottom = { onTop: 2; onBottom: 1 }
type TwoOnTopAndBlankOnBottom = { onTop: 2; onBottom: 0 }

type OneOnTopAndOneOnBottom = { onTop: 1; onBottom: 1 }
type OneOnTopAndBlankOnBottom = { onTop: 1; onBottom: 0 }

type BlankOnTopAndBlankOnBottom = { onTop: 0; onBottom: 0 }

export type DominoType =
  | SixOnTopAndSixOnBottom
  | SixOnTopAndFiveOnBottom
  | SixOnTopAndFourOnBottom
  | SixOnTopAndThreeOnBottom
  | SixOnTopAndTwoOnBottom
  | SixOnTopAndOneOnBottom
  | SixOnTopAndBlankOnBottom
  | FiveOnTopAndFiveOnBottom
  | FiveOnTopAndFourOnBottom
  | FiveOnTopAndThreeOnBottom
  | FiveOnTopAndTwoOnBottom
  | FiveOnTopAndOneOnBottom
  | FiveOnTopAndBlankOnBottom
  | FourOnTopAndFourOnBottom
  | FourOnTopAndThreeOnBottom
  | FourOnTopAndTwoOnBottom
  | FourOnTopAndOneOnBottom
  | FourOnTopAndBlankOnBottom
  | ThreeOnTopAndThreeOnBottom
  | ThreeOnTopAndTwoOnBottom
  | ThreeOnTopAndOneOnBottom
  | ThreeOnTopAndBlankOnBottom
  | TwoOnTopAndTwoOnBottom
  | TwoOnTopAndOneOnBottom
  | TwoOnTopAndBlankOnBottom
  | OneOnTopAndOneOnBottom
  | OneOnTopAndBlankOnBottom
  | BlankOnTopAndBlankOnBottom

export type FullSetOfDominoes = {
  sixOnTopAndSixOnBottom: SixOnTopAndSixOnBottom
  sixOnTopAndFiveOnBottom: SixOnTopAndFiveOnBottom
  sixOnTopAndFourOnBottom: SixOnTopAndFourOnBottom
  sixOnTopAndThreeOnBottom: SixOnTopAndThreeOnBottom
  sixOnTopAndTwoOnBottom: SixOnTopAndTwoOnBottom
  sixOnTopAndOneOnBottom: SixOnTopAndOneOnBottom
  sixOnTopAndBlankOnBottom: SixOnTopAndBlankOnBottom

  fiveOnTopAndFiveOnBottom: FiveOnTopAndFiveOnBottom
  fiveOnTopAndFourOnBottom: FiveOnTopAndFourOnBottom
  fiveOnTopAndThreeOnBottom: FiveOnTopAndThreeOnBottom
  fiveOnTopAndTwoOnBottom: FiveOnTopAndTwoOnBottom
  fiveOnTopAndOneOnBottom: FiveOnTopAndOneOnBottom
  fiveOnTopAndBlankOnBottom: FiveOnTopAndBlankOnBottom

  fourOnTopAndFourOnBottom: FourOnTopAndFourOnBottom
  fourOnTopAndThreeOnBottom: FourOnTopAndThreeOnBottom
  fourOnTopAndTwoOnBottom: FourOnTopAndTwoOnBottom
  fourOnTopAndOneOnBottom: FourOnTopAndOneOnBottom
  fourOnTopAndBlankOnBottom: FourOnTopAndBlankOnBottom

  threeOnTopAndThreeOnBottom: ThreeOnTopAndThreeOnBottom
  threeOnTopAndTwoOnBottom: ThreeOnTopAndTwoOnBottom
  threeOnTopAndOneOnBottom: ThreeOnTopAndOneOnBottom
  threeOnTopAndBlankOnBottom: ThreeOnTopAndBlankOnBottom

  twoOnTopAndTwoOnBottom: TwoOnTopAndTwoOnBottom
  twoOnTopAndOneOnBottom: TwoOnTopAndOneOnBottom
  twoOnTopAndBlankOnBottom: TwoOnTopAndBlankOnBottom

  oneOnTopAndOneOnBottom: OneOnTopAndOneOnBottom
  oneOnTopAndBlankOnBottom: OneOnTopAndBlankOnBottom

  blankOnTopAndBlankOnBottom: BlankOnTopAndBlankOnBottom
}

const setOfAllDominoes: FullSetOfDominoes = {
  sixOnTopAndSixOnBottom: { onTop: 6, onBottom: 6 },
  sixOnTopAndFiveOnBottom: { onTop: 6, onBottom: 5 },
  sixOnTopAndFourOnBottom: { onTop: 6, onBottom: 4 },
  sixOnTopAndThreeOnBottom: { onTop: 6, onBottom: 3 },
  sixOnTopAndTwoOnBottom: { onTop: 6, onBottom: 2 },
  sixOnTopAndOneOnBottom: { onTop: 6, onBottom: 1 },
  sixOnTopAndBlankOnBottom: { onTop: 6, onBottom: 0 },

  fiveOnTopAndFiveOnBottom: { onTop: 5, onBottom: 5 },
  fiveOnTopAndFourOnBottom: { onTop: 5, onBottom: 4 },
  fiveOnTopAndThreeOnBottom: { onTop: 5, onBottom: 3 },
  fiveOnTopAndTwoOnBottom: { onTop: 5, onBottom: 2 },
  fiveOnTopAndOneOnBottom: { onTop: 5, onBottom: 1 },
  fiveOnTopAndBlankOnBottom: { onTop: 5, onBottom: 0 },

  fourOnTopAndFourOnBottom: { onTop: 4, onBottom: 4 },
  fourOnTopAndThreeOnBottom: { onTop: 4, onBottom: 3 },
  fourOnTopAndTwoOnBottom: { onTop: 4, onBottom: 2 },
  fourOnTopAndOneOnBottom: { onTop: 4, onBottom: 1 },
  fourOnTopAndBlankOnBottom: { onTop: 4, onBottom: 0 },

  threeOnTopAndThreeOnBottom: { onTop: 3, onBottom: 3 },
  threeOnTopAndTwoOnBottom: { onTop: 3, onBottom: 2 },
  threeOnTopAndOneOnBottom: { onTop: 3, onBottom: 1 },
  threeOnTopAndBlankOnBottom: { onTop: 3, onBottom: 0 },

  twoOnTopAndTwoOnBottom: { onTop: 2, onBottom: 2 },
  twoOnTopAndOneOnBottom: { onTop: 2, onBottom: 1 },
  twoOnTopAndBlankOnBottom: { onTop: 2, onBottom: 0 },

  oneOnTopAndOneOnBottom: { onTop: 1, onBottom: 1 },
  oneOnTopAndBlankOnBottom: { onTop: 1, onBottom: 0 },

  blankOnTopAndBlankOnBottom: { onTop: 0, onBottom: 0 },
}

const fullSetOfDominoes: DominoType[] = Object.values(setOfAllDominoes)

export default fullSetOfDominoes
