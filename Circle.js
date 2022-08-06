// {
//   "Circle": [
//     {
//       "radius": 5,
//       "diameter": 10,
//       "area": 78.54,
//       "circumference": 31.42,
//       "color": "red"
//     }
//   ]
// }

class Circle {
  constructor(radius, color, diameter, area, circumference) {
    this.radius = radius;
    this.color = color;
    this.diameter = diameter;
    this.area = area;
    this.circumference = circumference;
  }

  GetDetails() {
    return `
    Radius: ${this.radius}
    Color: ${this.color}
    Diameter: ${2 * this.radius}
    Area: ${3.14 * Math.pow(this.radius, 2)}
    Circumference: ${3.14 * 2 * this.radius}`;
  }
}

let cir = new Circle(5, "red");
console.log(cir.GetDetails());
