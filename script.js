//Lecture: 'This' Keyword.

/*
calculateAge(1994);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

*/

var seba = {
    name: 'Sebastian',
    lastName: 'Tong',
    yearOfBirth: 1994,
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }

}

seba.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1993,
};

mike.calculateAge = seba.calculateAge;
mike.calculateAge();
