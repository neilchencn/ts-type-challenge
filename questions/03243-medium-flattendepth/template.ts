type MyFlatten<T extends any[], R extends any[] = []> = T extends [infer T, ...infer Rest]
  ? (T extends [...infer P] ? MyFlatten<[...Rest], [...R, ...P]> : MyFlatten<[...Rest], [...R, T]>)
  : R

type FlattenDepth<T extends any[], D = 1, R extends any[] = []> = MyFlatten<T> extends T
  ? T
  : (R['length'] extends D ? T : FlattenDepth<MyFlatten<T>, D, [...R, 0]>)
