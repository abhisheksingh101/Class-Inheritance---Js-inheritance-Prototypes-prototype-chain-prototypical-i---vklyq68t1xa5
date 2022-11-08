// import using require
const Shape = require("./shape");

class Circle extends Shape {
  calculateArea() {
    return 3.14;
  }
}
module.exports = Circle;
// export class using module.exports
