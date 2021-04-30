import {GameOptions, OptionsDescription, OptionType} from '@gamepark/rules-api'
import {TFunction} from 'i18next'
import GameState from './state/GameState'

/**
 * This is the options for each players in the game.
 */
type CanopyPlayerOptions = { id: number }

/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type CanopyOptions = GameOptions<{}, CanopyPlayerOptions>

/**
 * Typeguard to help Typescript distinguish between a GameState and new game's options, for you main class constructor.
 * @param arg GameState or Game options
 * @return true if arg is a Game options
 */
export function isGameOptions(arg: GameState | CanopyOptions): arg is CanopyOptions {
  return typeof (arg as GameState).season === 'undefined'
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const CanopyOptionsDescription: OptionsDescription<{}, CanopyPlayerOptions> = {
  players: {
    id: {
      type: OptionType.LIST,
      getLabel: (t: TFunction) => t('Number'),
      values: [0, 1],
      getValueLabel: (number: number, t: TFunction) => {
        return t('Player {number}', {number})
      }
    }
  }
}
