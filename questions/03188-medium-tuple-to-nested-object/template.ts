type TupleToNestedObject<T extends any[], U> =
    T extends [infer Pre extends PropertyKey, ...infer Rest ] ? {
      [P in Pre]: TupleToNestedObject<Rest, U>
    } : U
