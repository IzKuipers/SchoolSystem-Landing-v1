import { writable, type Writable } from "svelte/store";

export const showDetails: Writable<boolean> = writable<boolean>(false);
export const downloading: Writable<boolean> = writable<boolean>(false);
