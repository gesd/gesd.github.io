const emailForm = document.getElementById('email-form');
const responseMessage = document.getElementById('response-message');

emailForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = emailForm.querySelector('input[name="email"]').value;
    const payload = { email }; // Prepare JSON payload

    try {
        const response = await fetch(emailForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), // Send data as JSON
        });

        if (response.ok) {
            responseMessage.textContent = 'Thank you for signing up!';
            emailForm.reset();
        } else {
            const errorText = `Error: ${response.status} ${response.statusText}`;
            responseMessage.textContent = `Something went wrong: ${errorText}`;
            console.error(errorText);
        }
    } catch (error) {
        responseMessage.textContent = `Oops! Something went wrong. Error: ${error.message}`;
        console.error(error);
    }
});