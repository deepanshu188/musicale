import { writable } from 'svelte/store';

export const duration = writable(0);
export const currentTime = writable(0);
export const paused = writable(true);
export const musicTitle = writable('');
export const volume = writable(0.75);

export const poster = writable('');
export const artist = writable('');

export function secondsToTime(e) {
    const h = Math.floor(e / 3600).toString().padStart(2, '0'),
    m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
    s = Math.floor(e % 60).toString().padStart(2, '0');
    if (h === '00')
        return m + ':' + s;
    return h + ':' + m + ':' + s;
};