import { writable } from 'svelte/store';
import { browser } from "$app/env";

export const token = writable(
    browser && localStorage.getItem('token') || ''
);


token.subscribe(value => browser && localStorage.setItem('token', value));