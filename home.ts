class Foo {
    index: number;
    str: string;

    constructor(public firstName: number, public name: string) {
        this.index = firstName;
        this.str = name;
    }

    save(callback: (n: number) => any): void {
        callback(this.index)
    }

    static pi: number = 1.2;

    static log() {
        console.log(this.pi);
    }

    multipleCallbacks(firstCallback: (s: string) => void, secondCallback: (b: boolean) => boolean): void {
        firstCallback(this.name)

        let result: boolean = secondCallback(true)
        console.log("Resulting boolean: " + result)
    }
}

class Bar extends Foo {
    fuck(): number {
        return 123;
    }
}

class Abc extends Bar{

}

var foo = new Foo(123, "abc");
var bar = new Bar(822, "def");
var abc = new Abc(222, "ooo");

console.log(Foo.prototype);
console.log(abc.prototype);
console.log(Abc.prototype);

// Single callback example.
// Just like with @RyanCavanaugh's approach, ensure the parameter(s) and return
// types match the declared types above in the `save()` method definition.
abc.save((newNumber: number) => {
    console.log("Some number: " + newNumber)

    // This is optional, since "any" is the declared return type.
    return newNumber
})

// Multiple callbacks example.
// Each call is on a separate line for clarity.
// Note that `firstCallback()` has a void return type, while the second is boolean.
foo.multipleCallbacks(
    (s: string) => {
        console.log("Some string: " + s)
    },
    (b: boolean) => {
        console.log("Some boolean: " + b)
        let result = b && false

        return result
    }
)
