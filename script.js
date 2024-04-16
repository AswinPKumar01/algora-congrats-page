const correctKey = "hwd";

function checkKey() {
    const userKey = document.getElementById("keyInput").value.toLowerCase();
    if (userKey === correctKey) {
        document.getElementById("successMessage").style.display = "block";
    } else {
        alert("Incorrect key. Please try again.");
    }
}
