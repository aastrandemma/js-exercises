function insert_Row() {
  const table = document.getElementById("sampleTable");

  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  const newRow = table.insertRow();

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell(i);
    newCell.textContent = `Row${rowCount + 1} cell${i + 1}`;
  }
}