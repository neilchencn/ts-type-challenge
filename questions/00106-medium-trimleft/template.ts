type escape = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${escape}${infer Rest}` ? TrimLeft<Rest> : S
