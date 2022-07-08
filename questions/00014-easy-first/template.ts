type First<T extends any[]> = T extends [infer first, ...infer _others] ? first : never // infer
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] // array length === 0
// type First<T extends any[]> = T extends [] ? never : T[0] // array === []
