type ObjectEntries<T, K= keyof T> = K extends keyof T ? [K, T[K] extends infer Rest | undefined ? Rest : T[K]] : never
