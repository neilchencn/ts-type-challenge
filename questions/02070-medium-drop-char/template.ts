type DropChar<S, C> = S extends `${infer Pre}${infer Rest}` ? Pre extends C ? `${DropChar<Rest, C>}` : `${Pre}${DropChar<Rest, C>}` : ''
