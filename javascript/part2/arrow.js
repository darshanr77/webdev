const person = {
    name: "Darshan",

    // Normal function
    normalFunc: function () {
        console.log("Normal function:", this.name);
    },

    // Arrow function
    arrowFunc: () => {
        console.log("Arrow function:", this.name);
    }
};

person.normalFunc();
person.arrowFunc();  // no args ,cannot be a constructor , not own this keeyword