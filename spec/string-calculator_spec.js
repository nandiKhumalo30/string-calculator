const { add } = require("../src/string_calculator.js");

describe("add", function () {
  it("should return an empty string as zero", function () {
    expect(add("")).toEqual(0);
  });
  it("should return a single digit string as that digit", function () {
    expect(add("1")).toEqual(1);
  });
  it("should add two digits in a string", function () {
    expect(add("1,1")).toEqual(2);
  });
  it("should add multiple digits in a string", function () {
    expect(add("1,2,3,4")).toEqual(10);
  });
  it("should add integers in new line ", function () {
    expect(add("1\n2,3")).toEqual(6);
  });
  it("should add integers in new line and exclude delimiters", function () {
    expect(add("//;\n1;2")).toEqual(3);
  });
  it("should add integers in new line and exclude delimiters", function () {
    expect(add("//4\n142")).toEqual(3);
  });
  it("should only have positive integers", function () {
    expect(function() {add("-1,-2,3,4")}).toThrow(
      new Error(`ERROR: negatives not allowed -1,-2`));
  });
  it("should add multiple integers but ignore integers greater than or equal to 1000.", function () {
    expect(add("//;\n1000;1;2")).toEqual(3);
  });
  it("should add multiple integers in new line and exclude lengthy delimiters", function () {
    expect(add("//***\n1***2***3")).toEqual(6);
  });
  it("should add multiple integers in new line and exclude lengthy, different delimiters", function () {
    expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
  });
  it("should add multiple integers in new line and exclude lengthy, different delimiters", function () {
    expect(add("//[***][%%%]\n1***2%%%3")).toEqual(6);
  });
  it("should add multiple integers in new line and exclude lengthy, different delimiters", function () {
    expect(add("//[abc][777][:(]\n1abc27773:(1")).toEqual(7);
  });
  it("should add multiple integers in new line and exclude lengthy, different delimiters", function () {
    expect(add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6);
  });
  it("should throw in an error for invalid strings", function () {
    expect(function() {add("//;\n1000;1;2;")}).toThrow(new Error("ERROR: invalid input"));
  });
  it("should throw in an error for invalid strings", function () {
    expect(function() {add("   //;\n1000,1;2")}).toThrow(new Error("ERROR: invalid input"));
  });

  it("should throw in an error for invalid strings", function () {
    expect(function() {add("1,2,3//;\n1000,1;2")}).toThrow(new Error("ERROR: invalid input"));
  });
});
