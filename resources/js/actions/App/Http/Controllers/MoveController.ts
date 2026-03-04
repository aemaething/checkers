import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MoveController::store
* @see app/Http/Controllers/MoveController.php:15
* @route '/game/{playerToken}/moves'
*/
export const store = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/game/{playerToken}/moves',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MoveController::store
* @see app/Http/Controllers/MoveController.php:15
* @route '/game/{playerToken}/moves'
*/
store.url = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { playerToken: args }
    }

    if (Array.isArray(args)) {
        args = {
            playerToken: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        playerToken: args.playerToken,
    }

    return store.definition.url
            .replace('{playerToken}', parsedArgs.playerToken.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MoveController::store
* @see app/Http/Controllers/MoveController.php:15
* @route '/game/{playerToken}/moves'
*/
store.post = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MoveController::store
* @see app/Http/Controllers/MoveController.php:15
* @route '/game/{playerToken}/moves'
*/
const storeForm = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MoveController::store
* @see app/Http/Controllers/MoveController.php:15
* @route '/game/{playerToken}/moves'
*/
storeForm.post = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const MoveController = { store }

export default MoveController