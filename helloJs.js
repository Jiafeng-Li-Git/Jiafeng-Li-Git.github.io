// My first JavaScript file, learning Js......

const head = {
    name: "JsObj",
    volumn: 30,
    setName: function(newName){
        this.name = newName;
    }
};

head.setName("My JavaScript journey!")

const content = ` ${head.name}`;
document.querySelector(".head").innerHTML = content;

console.log("My first Js object:", head);