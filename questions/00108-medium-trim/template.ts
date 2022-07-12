type escapeTrim = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${escapeTrim}${infer Rest}` | `${infer Rest}${escapeTrim}` ? Trim<Rest> : S
