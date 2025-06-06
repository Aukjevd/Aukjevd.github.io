// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyMenu()};

// Get the header
var header = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
    //Create date object
    let d = new Date();
    //Increment the current time by 1 minute (cookie will expire after 1 minute)
    d.setMinutes(2 + d.getMinutes());
    //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
    //Read the cookie and split on "="
    let input = document.cookie.split("=");
    //Check for our cookie
    if (input[0] == "myCookieName") {
        //Hide the popup
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    } else {
        //Show the popup
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
};
//Check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};