function markAttendance() {
    const name = document.getElementById("name").value;
    const msg = document.getElementById("msg");

    if (name === "") {
        msg.innerText = "⚠️ Please enter your name!";
        msg.style.color = "red";
        return;
    }

    const now = new Date();
    msg.innerHTML = `✅ ${name}, Attendance Marked <br> ⏰ ${now.toLocaleTimeString()}`;
    msg.style.color = "#28a745";
}
