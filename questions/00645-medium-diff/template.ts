type Diff<O, O1> = {
  [key in MyExclude<keyof (O & O1), keyof(O | O1)>]: (O & O1)[key]
}
