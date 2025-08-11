<<<<<<< HEAD
export default function (firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        isAdult: function () {
            return this.age >= 18;
        }
    };
}

=======
export default function (firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        isAdult: function () {
            return this.age >= 18;
        }
    };
}

>>>>>>> ba27f419cbc9f8e6cacee8b90bac0535392cac6c
