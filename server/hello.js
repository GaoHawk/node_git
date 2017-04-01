
var s = 'Hello';

function greet(name){
     console.log(s + ',' +name + "!")
};


function where(place){
    console.log('where is' + place);
}
module.exports = {
    greet:greet,
    where:where
}