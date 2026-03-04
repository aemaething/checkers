<?php

namespace Tests\Feature\Game;

use App\Enums\GameStatus;
use App\Models\Game;
use App\Services\CheckersGameService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LocalGameTest extends TestCase
{
    use RefreshDatabase;

    public function test_store_with_is_local_creates_active_local_game(): void
    {
        $response = $this->post('/games', ['is_local' => true]);

        $response->assertRedirect();

        $game = Game::first();
        $this->assertNotNull($game);
        $this->assertTrue($game->is_local);
        $this->assertEquals(GameStatus::Active, $game->status);

        $response->assertRedirectContains("/game/{$game->player1_token}");
    }

    public function test_local_game_show_returns_current_turn_as_player_number(): void
    {
        $game = Game::factory()->local()->create(['current_turn' => 1]);

        $response = $this->get("/game/{$game->player1_token}");

        $response->assertInertia(fn ($page) => $page
            ->component('Game')
            ->where('game.is_local', true)
            ->where('game.player_number', 1)
            ->where('game.status', 'active')
            ->where('game.share_url', null)
        );
    }

    public function test_local_game_show_returns_player2_when_it_is_their_turn(): void
    {
        $game = Game::factory()->local()->create(['current_turn' => 2]);

        $response = $this->get("/game/{$game->player1_token}");

        $response->assertInertia(fn ($page) => $page
            ->where('game.player_number', 2)
        );
    }

    public function test_local_game_does_not_expose_share_url(): void
    {
        $game = Game::factory()->local()->create();

        $response = $this->get("/game/{$game->player1_token}");

        $response->assertInertia(fn ($page) => $page->where('game.share_url', null));
    }

    public function test_local_game_move_uses_current_turn_for_player_resolution(): void
    {
        $game = Game::factory()->local()->create(['current_turn' => 1]);
        $service = app(CheckersGameService::class);
        $validMoves = $service->getAllValidMoves($game->board_state, 1);
        $move = $validMoves[0];

        $response = $this->postJson("/game/{$game->player1_token}/moves", [
            'from_row' => $move['from_row'],
            'from_col' => $move['from_col'],
            'to_row' => $move['to_row'],
            'to_col' => $move['to_col'],
        ]);

        $response->assertOk();

        $game->refresh();
        $this->assertEquals(2, $game->current_turn);
    }

    public function test_local_game_player2_can_move_on_their_turn(): void
    {
        $game = Game::factory()->local()->create(['current_turn' => 2]);
        $service = app(CheckersGameService::class);
        $validMoves = $service->getAllValidMoves($game->board_state, 2);
        $move = $validMoves[0];

        $response = $this->postJson("/game/{$game->player1_token}/moves", [
            'from_row' => $move['from_row'],
            'from_col' => $move['from_col'],
            'to_row' => $move['to_row'],
            'to_col' => $move['to_col'],
        ]);

        $response->assertOk();

        $game->refresh();
        $this->assertEquals(1, $game->current_turn);
    }

    public function test_online_game_still_requires_correct_token(): void
    {
        $game = Game::factory()->active()->create(['current_turn' => 1]);
        $service = app(CheckersGameService::class);
        $validMoves = $service->getAllValidMoves($game->board_state, 1);
        $move = $validMoves[0];

        // Player 2's token cannot move when it's player 1's turn.
        $response = $this->postJson("/game/{$game->player2_token}/moves", [
            'from_row' => $move['from_row'],
            'from_col' => $move['from_col'],
            'to_row' => $move['to_row'],
            'to_col' => $move['to_col'],
        ]);

        $response->assertUnprocessable();
    }
}
