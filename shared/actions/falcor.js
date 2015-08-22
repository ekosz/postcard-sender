import falcor from '../falcor';

export const RETRIEVE_PATH = 'RETRIEVE_PATH';
export const RETRIEVE_VALUE = 'RETRIEVE_VALUE';

export function retrievePath(path) {
  return {
    type: RETRIEVE_PATH,
    path: path,
    promise: falcor.get(path)
  }
}

export function retrieveValue(path) {
  return {
    type: RETRIEVE_VALUE,
    path: path,
    promise: falcor.getValue(path)
  }
}
