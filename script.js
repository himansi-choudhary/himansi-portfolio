/* */
// Tab switching functionality
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Close side menu when any nav link is clicked
const sidemenu = document.getElementById("sidemenu");
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        sidemenu.style.right = "-200px";
    });
});


// Functions to open and close the side menu
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}



/* */
// Horizontal scroll with arrow buttons for a tools container
const scrollWrapper = document.querySelector('.tools-scroll-wrapper');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Update visibility of left/right scroll arrows based on scroll position
const updateArrowVisibility = () => {
    const maxScrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;
    scrollLeftBtn.style.display = scrollWrapper.scrollLeft > 0 ? 'block' : 'none';
    scrollRightBtn.style.display = scrollWrapper.scrollLeft < maxScrollLeft ? 'block' : 'none';
};

// Scroll left by 250px smoothly on left button click
scrollLeftBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: -250, behavior: 'smooth' });
});

// Scroll right by 250px smoothly on right button click
scrollRightBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: 250, behavior: 'smooth' });
});

// Update arrow visibility on scroll and window resize
scrollWrapper.addEventListener('scroll', updateArrowVisibility);
window.addEventListener('resize', updateArrowVisibility);

// Initial arrow visibility check
updateArrowVisibility();


/* */
// Form submission to Google Sheets via Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbz2TBL8l8PJO6rl5bSKC40zBnSBFhojR9Nb-ZgiM0Jq40Bmh3LdkqWl_4PwRWF1SBzZpA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission

     // Honeypot spam protection
    const honeypot = document.getElementById("hidden_field");
    if (honeypot && honeypot.value.trim() !== "") {
        console.log("Spam detected. Form not submitted.");
        return; // Stop execution — no request is sent
    }
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Show success message and clear it after 5 seconds
            msg.innerHTML = "✅ Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);

            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "❌ Error sending message. Please try again.";
        });
})