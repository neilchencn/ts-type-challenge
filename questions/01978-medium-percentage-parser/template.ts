type Pre<A extends string> = A extends `${infer pre extends '+' | '-'}${infer _}` ? pre : ''
type Suf<A extends string> = A extends `${infer _}%` ? '%' : ''
type Mid<A extends string> = A extends `${Pre<A>}${infer rest}${Suf<A>}` ? rest : ''
type PercentageParser<A extends string> = [Pre<A>, Mid<A>, Suf<A>]
