console.log("Welcome");
let accountId; //Default - Undefined
var accountName; //Default - Undefined
const accountStatus = "Active"; //Must have assigned value
accountRegion="India"; // Must have assigned value


var xg = "Green"; // Global scope
console.table([accountId,accountName,accountStatus,accountRegion]); // To display in console as table.

function varExapmle(){ //Function Scoped
    if(true)
    {
        var x="yellow";
    }
    console.log(x);
}

function letExapmle(){
    if(true)
    {
        let x1 ="yellow"; //Block Scoped
        console.log(x1);
    }    
}

varExapmle();
letExapmle();
console.log(xg);