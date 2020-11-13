function flip(fn) {
    return function flipped(arg1, arg2, ...args) {
        return fn(arg2, arg1, ...args);
    }
}

function reverseArgs(fn) {
    return function reversedArgs(...args) {
        return fn(...args.reverse());
    }
}

function spreadArgs(fn) {
    return function called(args) {
        return fn(...args);
    }
}

function outspreadArgs(fn) {
    return function called(...args) {
        return fn(args);
    }
}

function f (...args) {
    return args;
}

const g = flip(f);
const h = reverseArgs(f);
const a = outspreadArgs(f);
const b = spreadArgs(f);

console.log(JSON.stringify(g(1,2,3,4)) === '[2,1,3,4]');
console.log(JSON.stringify(h(1,2,3,4)) === '[4,3,2,1]');
console.log(JSON.stringify(a(1,2,3,4)) === '[[1,2,3,4]]');
console.log(JSON.stringify(b([1,2,3,4])) === '[1,2,3,4]');