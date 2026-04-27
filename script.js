<script>
function markAttendance() {
    const msg = document.getElementById("msg");

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    msg.innerHTML = `✅ Attendance Marked <br> 📅 ${date} ⏰ ${time}`;
    msg.style.color = "#28a745";
}
</script>
