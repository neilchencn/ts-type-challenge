type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer pre}${From}${infer rest}` ? `${pre}${To}${ReplaceAll<rest, From, To>}` : S
