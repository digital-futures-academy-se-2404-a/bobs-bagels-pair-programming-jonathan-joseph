import { assertEquals } from "./test-framework.js";
import { addItem } from "./index.js";

// Arrange
let actual; // we get this by using the function
let expected = 3.5; // price of item we're gonna put in the basket

// Act
actual = addItem(expected);

// Assert
let testPass = assertEquals(actual, expected);

// Report
console.log(testPass);
