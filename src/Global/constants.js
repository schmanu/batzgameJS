export const DEVELOPMENT = process.env.NODE_ENV === 'development'
export const LS_KEY_VERSION = '010000'
export const LS_KEY_SUFFIX = DEVELOPMENT ? 'dev' : ''
export const LS_KEY_GAME = `batzgame_save_game_${LS_KEY_VERSION}${LS_KEY_SUFFIX}`
export const LS_KEY_SETTINGS = `batzgame_save_settings${LS_KEY_VERSION}${LS_KEY_SUFFIX}`

export const CHANGE_ACTIVATE = 'CHANGE_TO_ACTIVE'
export const CHANGE_DEACTIVATE = 'CHANGE_TO_DISABLED'
export const CHANGE_DESTROY = 'CHANGE_TO_DESTROYED'
export const CHANGE_INVENOTRY_REMOVE = 'CHANGE_INVENTORY_REMOVE'
export const CHANGE_INVENTORY_ADD = 'CHANGE_INVENTORY_ADD'

export const CHECK_ACTIVE = 'CHECK_IF_ACTIVE'
export const CHECK_DESTROYED = 'CHECK_IF_DESTROYED'
export const CHECK_DISABLED = 'CHECK_IF_DISABLED'
export const CHECK_INVENTORY = 'CHECK_IF_IN_INVENTORY'
export const CHECK_NOT_DESTROYED = 'CHECK_IF_NOT_DESTROYED'
export const CHECK_NOT_IN_INVENTORY = 'CHECK_IF_NOT_IN_INVENTORY'

export const STATUS_ACTIVE = 'STATUS_ACTIVE'
export const STATUS_DESTROYED = 'STATUS_DESTROYED'
export const STATUS_DISABLED = 'STATUS_DISABLED'