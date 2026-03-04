import Settings from './Settings'
import GameController from './GameController'
import MoveController from './MoveController'

const Controllers = {
    Settings: Object.assign(Settings, Settings),
    GameController: Object.assign(GameController, GameController),
    MoveController: Object.assign(MoveController, MoveController),
}

export default Controllers