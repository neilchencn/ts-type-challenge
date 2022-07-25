type merge<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = merge<{
  [P in keyof T as P extends K ? P : never]?: T[P]

} & { [P in keyof T as P extends MyExclude<keyof T, K> ? P : never]: T[P] }>
