function togglePopup(){
    document.getElementById("review-popup").classList.toggle("active");
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE

}
// When the user clicks on <span> (x), close the modal
function closePopup() {
    document.getElementById("review-popup").classList.toggle("active");
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
}
