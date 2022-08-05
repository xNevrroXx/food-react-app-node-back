interface IObjParams {
  [param: string]: (string|number)
}
interface IObjParamsCuisine extends IObjParams {
  cuisine: string
}
interface IObjParamsByName extends IObjParams {
  name: string
}

export type {IObjParams, IObjParamsCuisine, IObjParamsByName};