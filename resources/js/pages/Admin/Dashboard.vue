<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';

defineProps<{
    stats: {
        total_games: number;
        active_games: number;
        finished_games: number;
        waiting_games: number;
        total_moves: number;
    };
}>();

function logout(): void {
    router.post('/admin/logout');
}
</script>

<template>
    <Head title="Admin Dashboard" />

    <div class="min-h-screen bg-slate-100">
        <nav class="bg-amber-800 px-6 py-4 shadow">
            <div class="mx-auto flex max-w-5xl items-center justify-between">
                <span class="text-lg font-bold text-white">Dame · Admin</span>
                <button
                    class="rounded px-3 py-1 text-sm text-amber-200 hover:text-white"
                    @click="logout"
                >
                    Logout
                </button>
            </div>
        </nav>

        <main class="mx-auto max-w-5xl px-6 py-10">
            <h1 class="mb-8 text-2xl font-bold text-slate-800">Dashboard</h1>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div class="rounded-xl bg-white p-5 shadow">
                    <p class="text-sm text-slate-500">Spiele gesamt</p>
                    <p class="mt-1 text-3xl font-bold text-amber-800">{{ stats.total_games }}</p>
                </div>
                <div class="rounded-xl bg-white p-5 shadow">
                    <p class="text-sm text-slate-500">Wartend</p>
                    <p class="mt-1 text-3xl font-bold text-yellow-600">{{ stats.waiting_games }}</p>
                </div>
                <div class="rounded-xl bg-white p-5 shadow">
                    <p class="text-sm text-slate-500">Aktiv</p>
                    <p class="mt-1 text-3xl font-bold text-green-600">{{ stats.active_games }}</p>
                </div>
                <div class="rounded-xl bg-white p-5 shadow">
                    <p class="text-sm text-slate-500">Beendet</p>
                    <p class="mt-1 text-3xl font-bold text-slate-600">{{ stats.finished_games }}</p>
                </div>
                <div class="rounded-xl bg-white p-5 shadow">
                    <p class="text-sm text-slate-500">Züge gesamt</p>
                    <p class="mt-1 text-3xl font-bold text-amber-800">{{ stats.total_moves }}</p>
                </div>
            </div>
        </main>
    </div>
</template>
