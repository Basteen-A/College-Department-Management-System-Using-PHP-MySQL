// Function to update the date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-GB');
    dateTimeElement.innerHTML = `${formattedDate} | ${formattedTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();