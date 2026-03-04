import Settings from './Settings'
import GameController from './GameController'
import MoveController from './MoveController'
import Admin from './Admin'

const Controllers = {
    Settings: Object.assign(Settings, Settings),
    GameController: Object.assign(GameController, GameController),
    MoveController: Object.assign(MoveController, MoveController),
    Admin: Object.assign(Admin, Admin),
}

export default Controllers