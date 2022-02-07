import cards from '.'
import PlayerState from '../../state/PlayerState'
import PlayerView from '../../state/PlayerView'
import Tree from '../../state/Tree'
import Canopy from './Canopy'
import CardType from './CardType'
import Plant from './Plant'
import Seed from './Seed'
import Threat from './Threat'
import Trunk from './Trunk'
import Weather from './Weather'
import Wildlife from './Wildlife'

type Card = (Trunk | Canopy | Plant | Seed | Weather | Threat | Wildlife) & { advanced?: boolean }

export default Card

export function discardCard(player:PlayerState | PlayerView, cardId:number){
    const card = cards[cardId]
    switch (card.type) {
        case CardType.Canopy:
            if(player.trees.some(tree => tree.canopy === cardId && tree.score !== undefined)){
                return console.error("Unexpected Move : try to discard a completed and scored tree canopy !")
            } else {
                const targetTree:Tree = player.trees.find(tree => tree.trunk.find(trunk => trunk === cardId)!)!
                delete targetTree.canopy
            }
            break
        case CardType.Trunk:
            if(player.trees.some(tree => tree.trunk.some(trunk => trunk === cardId) && tree.score !== undefined)){
                return console.error("Unexpected Move : try to discard a completed and scored tree trunk !")
            } else {
                const targetTree:Tree = player.trees.find(tree => tree.trunk.find(trunk => trunk === cardId)!)!
                targetTree.trunk.splice(targetTree.trunk.findIndex(t => t === cardId),1)
            }
            break
        case CardType.Plant:
            player.plants.splice(player.plants.findIndex(p => p === cardId),1)
            break
        case CardType.Seed:
            player.seeds.splice(player.plants.findIndex(p => p === cardId),1)
            break
        case CardType.Weather:
            player.weather.splice(player.plants.findIndex(p => p === cardId),1)
            break
        case CardType.Threat:
            player.threats.splice(player.plants.findIndex(p => p === cardId),1)
            break
        case CardType.Wildlife:
            player.wildlife.splice(player.plants.findIndex(p => p === cardId),1)
            break
      }
}