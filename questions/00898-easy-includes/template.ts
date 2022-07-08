type Equal<T, U> = (<G>() => G extends T ? true : false) extends (<G>() => G extends U ? true : false) ? true : false
type Includes<T extends readonly any[], U> = T extends [infer fst, ...infer rest] ? (Equal<fst, U> extends true ? true : Includes<rest, U>) : false
