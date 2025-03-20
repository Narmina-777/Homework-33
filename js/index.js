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
class HtmlElement {
  tagName = "string";
  isSelfClose = false;
  textContent = "";
  attributeArray = [];
  stylesArray = [];
  innerTags = [];

  constructor(params) {
    this.tagName = params.tagName;
    this.isSelfClose = params.isSelfClose;
    this.textContent = params.textContent;
    this.attributeArray = params.attributeArray;
    this.stylesArray = params.stylesArray;
    this.innerTags = params.innerTags;
  }

  getHtml() {
    return `<${this.tagName} ${this.attributeArray}>${this.textContent}<${this.tagName}>`;
  }
}

const h1 = new HtmlElement({
  tagName: "a",
  attributeArray: 'href"/"',
  isSelfClose: false,
  textContent: "bla bla bla",
});

const code = h1.getHtml();

console.log("code ", code);

const object = {
  name: "test",
};
// TASK 3
class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = {};
  }

  setStyle(property, value) {
    this.styles[property] = value;
  }

  removeStyle(property) {
    delete this.styles[property];
  }

  getCss() {
    let cssString = `.${this.className} { `;
    for (let property in this.styles) {
      if (this.styles.hasOwnProperty(property)) {
        cssString += `${property}: ${this.styles[property]}; `;
      }
    }
    cssString += "}";
    return cssString;
  }
}

const myClass = new CssClass("my-class");
myClass.setStyle("color", "red");
myClass.setStyle("font-size", "16px");
console.log(myClass.getCss());

myClass.removeStyle("color");
console.log(myClass.getCss());

// TASK 4
class HtmlBlock {
  constructor() {
    this.styles = [];
    this.rootElement = null;
  }

  addCssClass(cssClass) {
    this.styles.push(cssClass);
  }

  setRootElement(element) {
    this.rootElement = element;
  }

  getCode() {
    if (!this.rootElement) {
      return "<Нет корневого элемента>";
    }
    let cssCode = this.styles.map((cssClass) => cssClass.getCss()).join("");
    let htmlCode = this.rootElement.getHtml();
    return `<style>${cssCode}</style>${htmlCode}`;
  }
}
const wrapperClass = new CssClass("wrapper");
wrapperClass.setStyle("width", "300px");
wrapperClass.setStyle("border", "1px solid black");
wrapperClass.setStyle("padding", "10px");

const headerClass = new CssClass("header");
headerClass.setStyle("color", "blue");
headerClass.setStyle("font-size", "20px");

const wrapper = new HtmlElement("div");
wrapper.setAttribute("class", "wrapper");

const block = new HtmlBlock();
block.addCssClass(wrapperClass);
block.addCssClass(headerClass);
block.setRootElement(wrapper);
console.log(block.getCode());
