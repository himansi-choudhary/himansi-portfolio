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