type FlipArguments<T extends Function> = T extends (...args: infer Params) => infer R ? (...args: Reverse<Params>) => R : T
