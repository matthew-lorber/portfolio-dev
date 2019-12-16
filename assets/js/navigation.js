// Navigates between sections by adding/removing noDisplay class
document.addEventListener("click", function() {
    console.log(event.target.name);
    this.querySelector("section").classList.add("noDisplay");
    document.getElementById(event.target.name).classList.remove("noDisplay");
});

// Identifies keyboard navigators
window.addEventListener("keydown", (e)=>{
    if (e.keyCode === 9) {
        document.body.classList.add("tabbing-user");
        window.removeEventListener("keydown");
    }
})