<?php

namespace Tests\Feature\Admin;

use App\Models\Admin;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminAccessTest extends TestCase
{
    use RefreshDatabase;

    public function test_unauthenticated_user_is_redirected_from_admin_dashboard(): void
    {
        $response = $this->get('/admin');

        $response->assertRedirect('/admin/login');
    }

    public function test_admin_login_page_renders(): void
    {
        $response = $this->get('/admin/login');

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page->component('Admin/Login'));
    }

    public function test_authenticated_admin_can_access_dashboard(): void
    {
        $admin = Admin::factory()->create();

        $response = $this->actingAs($admin, 'admin')->get('/admin');

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page->component('Admin/Dashboard'));
    }

    public function test_admin_dashboard_shows_stats(): void
    {
        $admin = Admin::factory()->create();

        $response = $this->actingAs($admin, 'admin')->get('/admin');

        $response->assertInertia(fn ($page) => $page
            ->component('Admin/Dashboard')
            ->has('stats.total_games')
            ->has('stats.active_games')
            ->has('stats.finished_games')
            ->has('stats.waiting_games')
            ->has('stats.total_moves')
        );
    }

    public function test_admin_login_with_valid_credentials_redirects_to_admin_dashboard(): void
    {
        $admin = Admin::factory()->create([
            'email' => 'admin@example.com',
            'password' => bcrypt('secret123'),
        ]);

        $response = $this->post('/admin/login', [
            'email' => 'admin@example.com',
            'password' => 'secret123',
        ]);

        $response->assertRedirect('/admin');
        $this->assertAuthenticatedAs($admin, 'admin');
    }

    public function test_admin_login_with_invalid_credentials_fails(): void
    {
        Admin::factory()->create(['email' => 'admin@example.com']);

        $response = $this->post('/admin/login', [
            'email' => 'admin@example.com',
            'password' => 'wrong-password',
        ]);

        $response->assertSessionHasErrors('email');
        $this->assertGuest('admin');
    }

    public function test_admin_logout_redirects_to_login(): void
    {
        $admin = Admin::factory()->create();

        $response = $this->actingAs($admin, 'admin')->post('/admin/logout');

        $response->assertRedirect();
        $this->assertGuest('admin');
    }
}
