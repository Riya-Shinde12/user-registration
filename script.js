function addRow() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (!name || !email || !age) return;
    
    let table = document.getElementById("userTableBody");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = email;
    row.insertCell(2).innerText = age;

    document.getElementById("registrationForm").reset();
}

function sortTable(n) {
    let table = document.querySelector("table");
    let rows = Array.from(document.getElementById("userTableBody").rows);
    let sortedRows = rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[n].innerText.toLowerCase();
        let cellB = rowB.cells[n].innerText.toLowerCase();
        return isNaN(cellA) || isNaN(cellB) ? cellA.localeCompare(cellB) : Number(cellA) - Number(cellB);
    });

    document.getElementById("userTableBody").append(...sortedRows);
}

function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#userTableBody tr");

    rows.forEach(row => {
        let name = row.cells[0].innerText.toLowerCase();
        row.style.display = name.includes(input) ? "" : "none";
    });
}