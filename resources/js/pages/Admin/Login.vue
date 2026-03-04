<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

function submit(): void {
    form.post('/admin/login', {
        onFinish: () => form.reset('password'),
    });
}
</script>

<template>
    <Head title="Admin Login" />

    <div class="flex min-h-screen items-center justify-center bg-amber-50">
        <div class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
            <div class="mb-6 text-center">
                <h1 class="text-2xl font-bold text-amber-900">Admin Login</h1>
                <p class="mt-1 text-sm text-slate-500">Dame · Verwaltung</p>
            </div>

            <div v-if="status" class="mb-4 rounded bg-green-50 px-4 py-2 text-sm text-green-700">
                {{ status }}
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div>
                    <label class="mb-1 block text-sm font-medium text-slate-700" for="email">
                        E-Mail
                    </label>
                    <input
                        id="email"
                        v-model="form.email"
                        autocomplete="username"
                        class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                        required
                        type="email"
                    />
                    <p v-if="form.errors.email" class="mt-1 text-xs text-red-600">{{ form.errors.email }}</p>
                </div>

                <div>
                    <label class="mb-1 block text-sm font-medium text-slate-700" for="password">
                        Passwort
                    </label>
                    <input
                        id="password"
                        v-model="form.password"
                        autocomplete="current-password"
                        class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                        required
                        type="password"
                    />
                    <p v-if="form.errors.password" class="mt-1 text-xs text-red-600">{{ form.errors.password }}</p>
                </div>

                <button
                    :disabled="form.processing"
                    class="w-full rounded-lg bg-amber-700 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-amber-800 disabled:opacity-50"
                    type="submit"
                >
                    {{ form.processing ? 'Einloggen…' : 'Einloggen' }}
                </button>
            </form>
        </div>
    </div>
</template>
