// My first JavaScript file, learning Js......

const firstObj = {
    name: "JsObj",
    volumn: 30,
    setName: function(newName){
        this.name = newName;
    }
};

firstObj.setName("My JavaScript journey!")

const content = ` <h1>${firstObj.name}<h1>`;
document.body.innerHTML = content;

console.log("My first Js object:", firstObj);