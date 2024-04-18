import { assertEquals } from "./test-frameworks/test-framework.js";
import { addItem } from "../src/index.js";
import basket from "../src/basket.js";
import item1 from "../src/item.js";

const clearTests = () => {
  actual = undefined;
  expected = undefined;
  testItem = undefined;
  testPass = undefined;
  basket.basketItems = [];
};

// TEST 1
console.log("TEST 1: addItemToBasket should insert the item");
console.log("-------------------------------------");
// Arrange
let actual; // we get this by using the function
let expected = basket.basketItems.length + 1; // price of item we're gonna put in the basket
let testItem = {};

// Act
basket.addItemToBasket(testItem);
actual = basket.basketItems.length;

// Assert
let testPass = assertEquals(actual, expected);

// Report
testPass ? console.log("TEST 1 PASSED") : console.log("TEST 1 DOESN'T PASS");

clearTests();
// TEST 1 DONE

// TEST 2
console.log("TEST 2: basketItems should have the same item that we added");
console.log("-------------------------------------");
// Arrange
testItem = {
  id: 2,
  name: "brown bagel",
  price: 20,
};

expected = item1;

// Act
basket.addItemToBasket(item1);
actual = basket.basketItems[0];
testPass = assertEquals(actual, expected);
testPass ? console.log("TEST 2 PASSED") : console.log("TEST 2 DOESN'T PASS");
clearTests();

// TEST 2 DONE
