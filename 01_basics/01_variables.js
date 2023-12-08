console.log("Welcome");
let accountId;
var accountName;
const accountStatus = "Active";
accountRegion="India";

var xg = "Green";
console.table([accountId,accountName,accountStatus,accountRegion]);

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