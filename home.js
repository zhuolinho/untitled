var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(firstName, name) {
        this.firstName = firstName;
        this.name = name;
        this.index = firstName;
        this.str = name;
    }
    Foo.prototype.save = function (callback) {
        callback(this.index);
    };
    Foo.log = function () {
        console.log(this.pi);
    };
    Foo.prototype.multipleCallbacks = function (firstCallback, secondCallback) {
        firstCallback(this.name);
        var result = secondCallback(true);
        console.log("Resulting boolean: " + result);
    };
    Foo.pi = 1.2;
    return Foo;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.fuck = function () {
        return 123;
    };
    return Bar;
}(Foo));
var Abc = /** @class */ (function (_super) {
    __extends(Abc, _super);
    function Abc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Abc;
}(Bar));
var foo = new Foo(123, "abc");
var bar = new Bar(822, "def");
var abc = new Abc(222, "ooo");
console.log(Foo.prototype);
console.log(Bar.prototype);
console.log(abc.__proto__.__proto__.__proto__);
// Single callback example.
// Just like with @RyanCavanaugh's approach, ensure the parameter(s) and return
// types match the declared types above in the `save()` method definition.
abc.save(function (newNumber) {
    console.log("Some number: " + newNumber);
    // This is optional, since "any" is the declared return type.
    return newNumber;
});
// Multiple callbacks example.
// Each call is on a separate line for clarity.
// Note that `firstCallback()` has a void return type, while the second is boolean.
foo.multipleCallbacks(function (s) {
    console.log("Some string: " + s);
}, function (b) {
    console.log("Some boolean: " + b);
    var result = b && false;
    return result;
});
