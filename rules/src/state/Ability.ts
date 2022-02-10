import Animal from '../material/cards/Animal'

type Ability = {
  animal: Animal
  user?: boolean
}

export default Ability

export function shouldExecuteAbilityBeforeStarting(a:Ability):boolean{
  return a.user !== true && (a.animal === Animal.PoisonDartFrog || a.animal === Animal.Toucan)
}