import Canopy from './Canopy'
import Plant from './Plant'
import Seed from './Seed'
import Threat from './Threat'
import Trunk from './Trunk'
import Weather from './Weather'
import Wildlife from './Wildlife'

type Card = (Trunk | Canopy | Plant | Seed | Weather | Threat | Wildlife) & { advanced?: boolean }

export default Card