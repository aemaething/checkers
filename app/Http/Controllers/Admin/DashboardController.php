<?php

namespace App\Http\Controllers\Admin;

use App\Enums\GameStatus;
use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Move;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_games' => Game::query()->count(),
                'active_games' => Game::query()->where('status', GameStatus::Active)->count(),
                'finished_games' => Game::query()->where('status', GameStatus::Finished)->count(),
                'waiting_games' => Game::query()->where('status', GameStatus::Waiting)->count(),
                'total_moves' => Move::query()->count(),
            ],
        ]);
    }
}
