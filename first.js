//type button event
let btn1 = document.querySelector("#btn1");


btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handeler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handeler 2");
});

const handeler3 = () => {
    console.log("button1 was clicked - handeler 3");
};

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handeler 4");
});

btn1.removeEventListener("click", () => {
    console.log("button1 was clicked - handeler 3");
})