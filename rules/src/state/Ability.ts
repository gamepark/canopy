import Animal from '../material/cards/Animal'

type Ability = {
  animal: Animal
  user?: boolean
}

export default Ability

export type PDFAbility = Omit<Ability, 'animal'> & {
  animal:Animal.PoisonDartFrog
  isTurnUsed?:boolean
}

export function isPDFAbility(ability:Ability):ability is PDFAbility{
  return ability.animal === Animal.PoisonDartFrog
}

export type ToucanAbility = Omit<Ability, 'animal'> & {
  animal:Animal.Toucan
  isTurnUsed?:boolean
  pileTaken?:0|1|2
}

export function isToucanAbility(ability:Ability):ability is ToucanAbility{
  return ability.animal === Animal.Toucan
}

export function shouldExecuteAbilityBeforeStarting(a:Ability):boolean{
  return a.user !== true && (a.animal === Animal.PoisonDartFrog || a.animal === Animal.Toucan)
}