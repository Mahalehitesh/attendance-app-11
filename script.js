// Load data when page opens
window.onload = function () {
    showData();
};

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

    msg.innerText = "✅ Attendance Saved!";
    msg.style.color = "green";

    document.getElementById("name").value = "";

    showData(); // refresh list
}

function showData() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("attendance")) || [];

    data.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.time;
        list.appendChild(li);
    });
}
