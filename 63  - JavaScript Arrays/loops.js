let a = [1,2,44,66,89,3,7]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}

a.forEach((value, index , arr) => {
    console.log(value, index, arr);
    
});

let object = {
    a: 28,
    b: 5,
    c: 2005
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
        
    }
}

for (const value of a) {
    console.log(value);
    
}