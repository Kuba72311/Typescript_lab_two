let myTaskArray:Array<string> = [];

function addTask(task:string):number{
    myTaskArray.push(task);
    console.log("Item" +task +"has been added to the array");
    return myTaskArray.length;
}

function listAllItems():void{
    //for(let i=0; i<myTaskArray.length;i++){
   // }
   console.log("List of iteams in the array is: ");
   myTaskArray.forEach(function(item) {
       console.log(item);
   });
}


function deleteTask(task:string):number{

    let index:number;

    index=myTaskArray.indexOf(task);
    if(index > -1){
    myTaskArray.splice(index,1);
    console.log("Item " +task +" has been deleted from the array");
    } else{
        console.log("Item " +task +" is not in array");  
    }
    return myTaskArray.length;
}


addTask("Complete Part A");
let itemsInArray:number = addTask("Complete Part b");
console.log("Number of items in array is " +itemsInArray);
listAllItems();
let count:number = deleteTask("Complete Part A");
console.log("Number of iteams in array is " + count);
