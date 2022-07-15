type KebabCase<S extends string> = S extends `${infer pre}${infer Rest}` ? Rest extends `${Uncapitalize<Rest>}` ? `${Lowercase<pre>}${KebabCase<Rest>}` : `${Lowercase<pre>}-${KebabCase<Rest>}` : S
