var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(g) {
    console.log('Welcome to TypeScript ${g}');
}
var n = 'Sue Peters';
greeter(n);
//implicit numerial data
var y = -10;
y = 6;
//explict boolean data type
var isCorrect;
isCorrect = true;
//explicit data type in an array
var colors = ['red', 'yellow', 'blue'];
var nums = [1, 5, -3, 4, 10];
//combine data type
var dtype = [3, 'Martha', false];
//never data type
//let x:never = 23
//DATA TYPE FOR CLASSES
var m = 'Peter';
var mLen = m.length;
console.log("".concat(m, " has ").concat(mLen, " letters."));
//casting in an implicit data type
var firstName = 'Martha';
var lenFirstName = firstName.length;
console.log("".concat(firstName, " had ").concat(lenFirstName, " letters."));
//FUNCTION IN TYPESCRIPT
//return value type
function getHour() {
    return new Date().getHours();
}
console.log('It is' + getHour());
function greeting() {
    console.log('Welcome to Angula data type');
}
function getSum(num1, num2, name) {
    name = name + '! The sum is ' + (num1 + num2);
    return name;
}
console.log(getSum(6, 10, 'Martha'));
//three dots notation
function getAverage() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    var avg = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
        count++;
    }
    avg = total / count;
    return avg;
}
//CLASSES IN TS
var Car = /** @class */ (function () {
    function Car(brand, model, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.yearManufacture = yearManufacture;
    }
    Car.prototype.year = function () {
        console.log(this.yearManufacture);
    };
    return Car;
}());
//assing values to each class properties
var car1 = new Car('Telsa', 'S', 2022);
//INHERITANCE TS
//defind classes
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Peter Pan';
    }
    Person.prototype.save = function () {
        console.log('Registration Succcessful');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items sold' + this.name);
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid!');
    };
    return Employee;
}(Customer));
var person1 = new Person;
var customer1 = new Customer;
person1.save();
customer1.sale();
// inherentance
var employee1 = new Employee;
employee1.sale();
employee1.save();
