type mergeAgain<T> = {
  [P in keyof T]: T[P]
}

type RequiredByKeys<T, K=keyof T> = mergeAgain<{
  [P in keyof T as P extends K ? P : never]-?: T[P]

} & { [P in keyof T as P extends MyExclude<keyof T, K> ? P : never]: T[P] }>
