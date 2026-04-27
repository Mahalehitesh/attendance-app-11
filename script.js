function markAttendance() {
    const name = document.getElementById("name").value;
    const msg = document.getElementById("msg");

    if (name === "") {
        msg.innerText = "⚠️ Enter your name!";
        msg.style.color = "red";
        return;
    }

    const now = new Date();
    const record = {
        name: name,
        time: now.toLocaleString()
    };

    let data = JSON.parse(localStorage.getItem("attendance")) || [];
    data.push(record);
    localStorage.setItem("attendance", JSON.stringify(data));

    msg.innerHTML = `✅ ${name}, Attendance Saved!`;
    msg.style.color = "green";
}
