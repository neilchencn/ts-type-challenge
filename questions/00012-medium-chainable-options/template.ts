type Chainable<O extends {}= {}> = {
  option<key extends string, value>(key: key extends keyof O ? never : key, value: value): Chainable<O & { [k in key]: value }>
  get(): O
}
