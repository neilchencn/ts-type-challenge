type Reverse<T> = T extends [infer Pre, ...infer Rest] ? [...Reverse<Rest>, Pre] : T
