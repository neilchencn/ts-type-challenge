type LengthOfString<S extends string, T extends any[] = []> = S extends '' ? T['length'] : S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [First, ...T]> : T['length']
