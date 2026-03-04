import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::create
* @see app/Http/Controllers/GameController.php:16
* @route '/'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\GameController::store
* @see app/Http/Controllers/GameController.php:21
* @route '/games'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/games',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GameController::store
* @see app/Http/Controllers/GameController.php:21
* @route '/games'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GameController::store
* @see app/Http/Controllers/GameController.php:21
* @route '/games'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GameController::store
* @see app/Http/Controllers/GameController.php:21
* @route '/games'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GameController::store
* @see app/Http/Controllers/GameController.php:21
* @route '/games'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
export const show = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/game/{playerToken}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
show.url = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{playerToken}', parsedArgs.playerToken.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
show.get = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
show.head = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
const showForm = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
showForm.get = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GameController::show
* @see app/Http/Controllers/GameController.php:38
* @route '/game/{playerToken}'
*/
showForm.head = (args: { playerToken: string | number } | [playerToken: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const GameController = { create, store, show }

export default GameController