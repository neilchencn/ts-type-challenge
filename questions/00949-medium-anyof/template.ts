type Falsy = 0 | '' | [] | false | Record<string, never>
type AnyOf<T extends readonly any[]> = T extends [infer Pre, ...infer Rest] ? Pre extends Falsy ? AnyOf<Rest> : true : false
