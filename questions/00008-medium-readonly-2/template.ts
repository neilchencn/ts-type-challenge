type MyReadonly2<T, K extends keyof T = keyof T > = {
  readonly[ P in K]: T[P]
} & {
  -readonly[U in MyExclude<keyof T, K>]: T[U]
}
