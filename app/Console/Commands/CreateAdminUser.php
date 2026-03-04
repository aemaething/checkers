<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Illuminate\Console\Command;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create';

    protected $description = 'Erstellt einen neuen Admin-Benutzer';

    public function handle(): int
    {
        $name = $this->ask('Name');
        $email = $this->ask('E-Mail');
        $password = $this->secret('Passwort');
        $confirmation = $this->secret('Passwort bestätigen');

        if ($password !== $confirmation) {
            $this->error('Passwörter stimmen nicht überein.');

            return self::FAILURE;
        }

        if (Admin::query()->where('email', $email)->exists()) {
            $this->error("Ein Admin mit der E-Mail '{$email}' existiert bereits.");

            return self::FAILURE;
        }

        Admin::create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ]);

        $this->info("Admin '{$name}' ({$email}) wurde erfolgreich erstellt.");

        return self::SUCCESS;
    }
}
