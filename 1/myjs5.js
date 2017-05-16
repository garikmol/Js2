/**
 * Created by Igor on 10.04.2017.
 */
//widthSize - число клеток по горизонтали, не более 26 (ограничено латинским алфавитом)
//heightSize - число клеток по вертикали
// idDiv - ID элемента в котором будет размещена доска

function GetChessboard(widthSize,heightSize,idDiv) {

/* проверка четности выражения: whatColor = 3 * row + col; дает черный фон
 для четных и белый для нечетных */
var whatColor;
/*массив названий шахматных колонок*/
var columnName = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "z"];

var table = document.createElement("table");
table.className = "chess";

for (var row = heightSize; row >= 0; row--) {
    var tr = document.createElement("tr");
    if (row == 0) {
        tr.id = ("cols");
    }
    else
        tr.id = ("line-" + row);
    table.appendChild(tr);
    for (var col = 0; col <= widthSize; col++) {
        var td = document.createElement("td");
        if (col == 0 && row == 0) {
            td.id = ("empty");
        }
        else if (col == 0) {
            td.className = "string-name";
            td.innerHTML = row;
        }
        else if (row == 0) {
            td.className = "column-name";
            td.innerHTML = columnName[col - 1];
        }
        else {
            td.id = (columnName[col - 1] + row);
            whatColor = 3 * row + col;
            if (whatColor % 2 == 0) {
                td.classList.add("black");
            } else td.classList.add("white");
        }
        tr.appendChild(td);
    }
}
    var tag = document.getElementById(idDiv);
    tag.appendChild(table);
}

 var chess= new GetChessboard(8,8,'chessBoard');
console.log (chess);

