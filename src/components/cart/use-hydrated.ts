import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/** `false` saat render server dan hidrasi awal, `true` sesudahnya. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
