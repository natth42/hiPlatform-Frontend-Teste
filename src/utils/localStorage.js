export const loadState = (stateName) => {
  try {
    const savedState = localStorage.getItem(stateName);
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, stateName) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem(stateName.toString(), stateToSave);
  } catch (err) {
    // Ignore write errors.
  }
};