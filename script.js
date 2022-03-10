// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


// Add a row
function addR() {
    let tableRow = document.querySelector("#grid");
    let newRow = tableRow.insertRow();

    newRow.insertCell().append("");
}
function addC() {
    let table = document.querySelector("#grid");
    let row = table.getElementsByTagName('tr');
    for(i=0;i<row.length;i++){
    row[i].innerHTML = row[i].innerHTML + '<td></td>';
    }
}

// Remove a row
function removeR() {
    let table = document.querySelector("#grid");
    let row = table.getElementsByTagName('tr');
    if(row.length!='0'){
        row[row.length - 1].outerHTML='';
    }
}

// Remove a column
function removeC() {
    let allRows = document.querySelector("#grid").rows;
    for (let i=0; i<allRows.length; i++) {
        if (allRows[i].cells.length > 0) {
            allRows[i].deleteCell(-1);
        }
    }
}


// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
    let grid = document.querySelector("#grid");
    console.log(grid);
    grid.addEventListener("click", function onClick(event){
        console.log(event.target);
        event.target.style.backgroundColor = colorSelected;
    });
}

// Fill all uncolored cells
function fillU(){
    const grid = document.querySelectorAll("table > tbody > tr > td");
    for(let i=0; i < grid.length; i++)
    {
        if(!grid[i].style.backgroundColor){
            grid[i].style.backgroundColor = colorSelected;

        }
    }
}

// Fill all cells
function fillAll(){
    let rows = document.querySelectorAll("table > tbody > tr > td");
    console.log(rows);
    for(let i =0; i < rows.length; i++){
        rows[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    for(let i = document.getElementById("grid").rows.length; i > 0;i--)
    {
    document.getElementById("grid").deleteRow(i -1);
    }
}