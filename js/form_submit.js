const scriptURL = 'https://script.google.com/macros/s/AKfycbz2TBL8l8PJO6rl5bSKC40zBnSBFhojR9Nb-ZgiM0Jq40Bmh3LdkqWl_4PwRWF1SBzZpA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const submitButton = form?.querySelector('button[type="submit"]');

const setSubmittingState = (isSubmitting) => {
    if (!submitButton) return;

    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? 'Sending...' : 'Submit';
    submitButton.style.opacity = isSubmitting ? '0.7' : '1';
};

form?.addEventListener('submit', e => {
    e.preventDefault();

    if (submitButton?.disabled) return;

    const honeypot = document.getElementById("hidden_field");
    if (honeypot && honeypot.value.trim() !== "") {
        console.log("Spam detected. Form not submitted.");
        return;
    }

    setSubmittingState(true);
    msg.innerHTML = "Sending your message...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            msg.innerHTML = "✅ Message sent successfully";
            form.reset();
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "❌ Error sending message. Please try again.";
        })
        .finally(() => {
            setSubmittingState(false);
        });
});