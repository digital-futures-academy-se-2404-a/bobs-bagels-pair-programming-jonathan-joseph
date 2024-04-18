//* Checks whether an element is contained inside a collection
//* e.g. whether the item is in the list
export const assertElementIsContained = (collection, item) => {
  // Iterate over list of items in basket
  collection.array.forEach((element) => {
    // If item is found return true
    if (element === item) {
      return true;
    }

    // Otherwise rtn false
    return false;
  });
};

export const assertEquals = (actual, expected) => actual === expected;
