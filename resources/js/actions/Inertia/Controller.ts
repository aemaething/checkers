import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
const Controller5c31eb6022b56d785c02d29e4a3d3115 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5c31eb6022b56d785c02d29e4a3d3115.url(options),
    method: 'get',
})

Controller5c31eb6022b56d785c02d29e4a3d3115.definition = {
    methods: ["get","head"],
    url: '/welcome',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
Controller5c31eb6022b56d785c02d29e4a3d3115.url = (options?: RouteQueryOptions) => {
    return Controller5c31eb6022b56d785c02d29e4a3d3115.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
Controller5c31eb6022b56d785c02d29e4a3d3115.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5c31eb6022b56d785c02d29e4a3d3115.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
Controller5c31eb6022b56d785c02d29e4a3d3115.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller5c31eb6022b56d785c02d29e4a3d3115.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
const Controller5c31eb6022b56d785c02d29e4a3d3115Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller5c31eb6022b56d785c02d29e4a3d3115.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
Controller5c31eb6022b56d785c02d29e4a3d3115Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller5c31eb6022b56d785c02d29e4a3d3115.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/welcome'
*/
Controller5c31eb6022b56d785c02d29e4a3d3115Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller5c31eb6022b56d785c02d29e4a3d3115.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller5c31eb6022b56d785c02d29e4a3d3115.form = Controller5c31eb6022b56d785c02d29e4a3d3115Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const Controller42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return Controller42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const Controller42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.form = Controller42a740574ecbfbac32f8cc353fc32db9Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/welcome': Controller5c31eb6022b56d785c02d29e4a3d3115,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller