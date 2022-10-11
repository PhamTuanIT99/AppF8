import {createSelector} from 'reselect';

const getPersistentStorage = state => state.persistentStorage;

export function createUserSelector() {
  return createSelector(
    [getPersistentStorage],
    persistentStorage => persistentStorage.userName,
  );
}

export function createPasswordSelector() {
  return createSelector(
    [getPersistentStorage],
    persistentStorage => persistentStorage.passWord,
  );
}
