import * as apiUtils from "./apiUtils";

export function getTodos() {
  return apiUtils
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(apiUtils.handleSuccess)
    .catch(apiUtils.handleError);
}
