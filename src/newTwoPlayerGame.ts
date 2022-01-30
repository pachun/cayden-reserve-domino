import fullSetOfDominoes, { DominoType } from "fullSetOfDominoes"

export interface TwoPlayerGameType {
  playersDominoes: DominoType[]
  opponentsDominoes: DominoType[]
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

const newTwoPlayerGame = (): TwoPlayerGameType => {
  const randomlySortedDominoes = getRandomlySortedDominoes()

  const playersDominoes = randomlySortedDominoes.slice(
    0,
    dominoesPerPlayerInATwoPlayerGame,
  )

  const opponentsDominoes = randomlySortedDominoes.slice(
    dominoesPerPlayerInATwoPlayerGame,
  )

  return {
    playersDominoes,
    opponentsDominoes,
  }
}

export default newTwoPlayerGame
