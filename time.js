function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    const formattedDateTime = now.toLocaleDateString("id-ID", options);
    dateTimeElement.textContent = formattedDateTime;
}

updateDateTime(); // Call the function immediately

// Update the date and time every second
setInterval(updateDateTime, 1000);
