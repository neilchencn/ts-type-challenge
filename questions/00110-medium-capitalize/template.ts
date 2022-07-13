type MyCapitalize<S extends string> = S extends `${infer first}${infer rest}` ? `${Uppercase<first>}${rest}` : ''
