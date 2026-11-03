import {objGenerator} from  "./object-export.mjs"


const  object = objGenerator("John", 25, "male", {childName : "Jame", childAge: 5});
// object?.name = "John Due"
console.log (object.childrenData?.childName)