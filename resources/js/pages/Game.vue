<script setup lang="ts">
import { usePoll } from '@inertiajs/vue3';
import { useEchoPublic } from '@laravel/echo-vue';
import { ref, watch } from 'vue';
import CheckersBoard from '@/components/CheckersBoard.vue';
import GameStatus from '@/components/GameStatus.vue';
import { useCheckers } from '@/composables/useCheckers';
import type { Game, MoveMadeEvent } from '@/types/game';

const props = defineProps<{
    game: Game;
}>();

// Local reactive copy so optimistic updates work without Inertia clobbering.
const localGame = ref<Game>({ ...props.game, board_state: { cells: [...props.game.board_state.cells] } });

// Keep local copy in sync when Inertia reloads the page.
watch(
    () => props.game,
    (newGame) => {
        localGame.value = { ...newGame, board_state: { cells: [...newGame.board_state.cells] } };
    },
    { deep: true },
);

const { selectedCell, highlightedCells, isMyTurn, moveError, selectPiece, applyBroadcastedMove } = useCheckers(localGame);

// WebSocket: only for online games.
if (!props.game.is_local) {
    useEchoPublic<MoveMadeEvent>(`game.${localGame.value.uuid}`, 'MoveMade', (event) => {
        applyBroadcastedMove(event);
    });
}

// Polling as async fallback (only for online games, stops when game is finished).
const { stop: stopPolling } = usePoll(
    5000,
    { only: ['game'] },
    { autoStart: !props.game.is_local && localGame.value.status !== 'finished' },
);

watch(
    () => localGame.value.status,
    (status) => {
        if (status === 'finished') {
            stopPolling();
        }
    },
);
</script>

<template>
    <div class="flex min-h-dvh flex-col items-center gap-6 bg-zinc-300 px-4 py-8">
        <h1 class="text-2xl font-bold tracking-wide text-zinc-800">Dame</h1>

        <div class="flex w-full max-w-2xl flex-col items-center gap-6">
            <!-- Game status / share link -->
            <div class="w-full max-w-lg rounded-xl border border-zinc-400 bg-zinc-100 p-4 shadow">
                <GameStatus :game="localGame" />
            </div>

            <!-- Error banner -->
            <div
                v-if="moveError"
                class="w-full max-w-lg rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700"
            >
                {{ moveError }}
            </div>

            <!-- Waiting skeleton (online only) -->
            <div
                v-if="localGame.status === 'waiting' && localGame.player_number === 1"
                class="w-full max-w-lg aspect-square animate-pulse rounded-lg bg-zinc-400"
            />

            <!-- Board (always shown in local mode; shown once active/finished in online mode) -->
            <CheckersBoard
                v-else
                :board-state="localGame.board_state"
                :selected-cell="selectedCell"
                :highlighted-cells="highlightedCells"
                :is-my-turn="isMyTurn"
                :player-number="localGame.is_local ? 1 : localGame.player_number"
                @cell-click="selectPiece"
            />
        </div>
    </div>
</template>
