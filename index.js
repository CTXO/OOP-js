// An object literal is defined like a variable or constant

const circle1 =  {
    radius: 1, // property
    location: {
        x: 1,
        y: 1
    },

    //method
    draw: function () {
        console.log('draw');
    }
}


// circle1.radius = 3;
// console.log("Raadius of first circle: " + circle1.radius);



//Factory function 

function createCircle(radius) {
    return {
        radius,
        draw : function() {
            console.log('draw')
        }
    }
}

// const circle2 = createCircle(20)
// console.log("Radius of second circle: "+ circle2.radius)



// Constructor Function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}

const circle3 = new Circle(1)

circle3.otherProp = 43 
circle3['otherProp'] = 43 // Possible to create new properties after creating the object



// Deletes property
delete circle3.otherProp 



// // Access keys and values in object

// console.log("Keys and values of circle 3: ")
// for(let key in circle3){
//     console.log(key + ": " + circle3[key])
// }



// // Access ONLY keys or values in object
// console.log("Keys and properties of Circle 3:")
// for (let key in circle3){
//     if(typeof(circle3[key]) !== 'function'){
//         console.log(key, circle3[key])
//     }
// }



//Abstracion

function Person(name, age) {
    // Public property
    this.name = name 

    // Private properties
    let year = 2021
    let birthYear = year - age

    // Getters and setters
    Object.defineProperty(this, 'age', {
        get: function() {
            return age
        },
        set: function(value) {
            age = value
        }
    })

}

// let p = new Person("Romero", 18)
// console.log(p.age)