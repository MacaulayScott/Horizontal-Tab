const buttons = document.querySelectorAll(".btn");

buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        buttons.classList.add("active");
    });  
});
function testClick() {
    buttons.addEventListener('click')
};

console.log(testClick);