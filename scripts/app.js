//console.log("Hello from script");

const myButton = document.querySelector("button");
const myImage = document.querySelector("img1");

myButton.addEventListener("click", () => {
    console.log("click");
    myImage.src = "images/img1.jpeg";
});