interface IObjParams {
  [param: string]: (string|number)
}
interface IObjParamsCuisine extends IObjParams {
  cuisine: string
}
interface IObjParamsByName extends IObjParams {
  query: string
}
interface IObjParamsById extends IObjParams {
  id: string
}

export type {IObjParams, IObjParamsCuisine, IObjParamsByName, IObjParamsById};