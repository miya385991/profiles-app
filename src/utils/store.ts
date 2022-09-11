import { writable } from "svelte/store";
import { onMount } from "svelte";

const operationToken = () => {
  const { subscribe, set, update } = writable('')

  return {
    subscribe,
    set: (getToken) => update(token => token = getToken),
    remove:()=>set('')
  }
}

export const token = operationToken()