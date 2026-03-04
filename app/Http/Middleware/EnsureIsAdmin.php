<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureIsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! auth('admin')->check()) {
            return $request->expectsJson()
                ? response()->json(['message' => 'Unauthenticated.'], 401)
                : redirect('/admin/login');
        }

        return $next($request);
    }
}
