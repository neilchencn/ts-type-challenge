type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number] ]: K
}

// T[number] 用于遍历array
// (string | number)[] 限定只能接受这两种类型, 应对@ts-expect-error
