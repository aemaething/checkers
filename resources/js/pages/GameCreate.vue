<script setup lang="ts">
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import { store as storeGame } from '@/actions/App/Http/Controllers/GameController';

type Mode = 'online' | 'local';

const mode = ref<Mode>('online');
const form = useForm({ is_local: false });

function createGame(): void {
    form.is_local = mode.value === 'local';
    form.post(storeGame().url);
}
</script>

<template>
    <Head>
        <title>Dame — Deutsches Damespiel online</title>
        <meta name="description" content="Spiele Deutsches Dame (Draughts) online gegen Freunde per Link oder lokal im Browser. Kostenlos, ohne Anmeldung.">
    </Head>
    <div class="flex min-h-screen items-center justify-center bg-zinc-300">
        <div class="w-full max-w-md rounded-2xl bg-zinc-100 p-10 shadow-xl text-center space-y-8">
            <!-- Board decoration -->
            <div class="mx-auto grid w-24 grid-cols-4 grid-rows-4 gap-0.5 overflow-hidden rounded">
                <div
                    v-for="i in 16"
                    :key="i"
                    class="aspect-square"
                    :class="(Math.floor((i - 1) / 4) + (i - 1)) % 2 === 0 ? 'bg-zinc-600' : 'bg-zinc-400'"
                />
            </div>

            <div>
                <h1 class="text-3xl font-bold text-zinc-900">Dame</h1>
                <p class="mt-2 text-zinc-500">Deutsches Damespiel · 8×8</p>
            </div>

            <!-- Mode selector -->
            <div class="grid grid-cols-2 gap-3">
                <button
                    class="rounded-xl border-2 px-4 py-3 text-sm font-semibold transition"
                    :class="mode === 'online'
                        ? 'border-zinc-800 bg-zinc-800 text-white'
                        : 'border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400'"
                    @click="mode = 'online'"
                >
                    🌐 Online
                    <p class="mt-1 text-xs font-normal opacity-70">Link teilen</p>
                </button>
                <button
                    class="rounded-xl border-2 px-4 py-3 text-sm font-semibold transition"
                    :class="mode === 'local'
                        ? 'border-zinc-800 bg-zinc-800 text-white'
                        : 'border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400'"
                    @click="mode = 'local'"
                >
                    🖥️ Lokal
                    <p class="mt-1 text-xs font-normal opacity-70">Gleicher Browser</p>
                </button>
            </div>

            <button
                :disabled="form.processing"
                class="w-full rounded-xl bg-zinc-800 px-6 py-3 text-lg font-semibold text-white shadow transition hover:bg-zinc-700 disabled:opacity-50"
                @click="createGame"
            >
                {{ form.processing ? 'Spiel wird erstellt…' : 'Neues Spiel starten' }}
            </button>

            <p class="text-xs text-zinc-400">
                <template v-if="mode === 'online'">
                    Nach dem Erstellen bekommst du einen Link, den du mit deinem Mitspieler teilen kannst.
                </template>
                <template v-else>
                    Beide Spieler spielen abwechselnd im gleichen Browser-Fenster.
                </template>
            </p>
        </div>
    </div>
</template>
