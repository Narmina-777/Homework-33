// TASK 1
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    this.#radius = value;
  }

  get diameter() {
    return this.#radius * 2;
  }

  area() {
    return Math.PI * this.#radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this.#radius;
  }
}
const circle = new Circle(5);
console.log(`Радиус: ${circle.radius}`);
console.log(`Диаметр: ${circle.diameter}`);
console.log(`Площадь: ${circle.area()}`);
console.log(`Длина окружности: ${circle.circumference()}`);
// TASK 2
// TASK 3
// TASK 4
