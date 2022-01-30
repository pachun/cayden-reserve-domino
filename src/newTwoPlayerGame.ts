import fullSetOfDominoes, { DominoType } from "fullSetOfDominoes"

export interface TwoPlayerGame {
  firstPlayer: {
    dominoes: DominoType[]
  }
  secondPlayer: {
    dominoes: DominoType[]
  }
}

const dominoesPerPlayerInATwoPlayerGame = 7

const numberOfRandomDominoesNeededForAGame =
  2 * dominoesPerPlayerInATwoPlayerGame

const getRandomlySortedDominoes = (): DominoType[] =>
  fullSetOfDominoes
    .map(domino => ({ domino, randomNumber: Math.random() }))
    .sort((dominoWithRandomNumber1, dominoWithRandomNumber2) =>
      dominoWithRandomNumber1.randomNumber <
      dominoWithRandomNumber2.randomNumber
        ? 1
        : -1,
    )
    .map(dominoWithRandomNumber => dominoWithRandomNumber.domino)
    .slice(numberOfRandomDominoesNeededForAGame)

const newTwoPlayerGame = (): TwoPlayerGame => {
  const randomlySortedDominoes = getRandomlySortedDominoes()

  const firstPlayersDominoes = randomlySortedDominoes.slice(
    0,
    dominoesPerPlayerInATwoPlayerGame,
  )

  const secondPlayersDominoes = randomlySortedDominoes.slice(
    dominoesPerPlayerInATwoPlayerGame,
  )

  return {
    firstPlayer: {
      dominoes: firstPlayersDominoes,
    },
    secondPlayer: {
      dominoes: secondPlayersDominoes,
    },
  }
}

export default newTwoPlayerGame
