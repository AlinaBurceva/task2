
function horseMove(str) {
    const defaultVertical = ["a", "b", "c", "d", "e", "f", "g", "h"];
    //Перевод буквеных значений шахмотной доски в число
    const posV = defaultVertical.indexOf(str[0]) + 1;
    //Цифровые значения шахмотной доски
    const posH = +str[1];

    //Все возможные позиции хода коня
    const moves = [
        [posV + 2, posH + 1], [posV + 2, posH - 1], [posV - 2, posH + 1], [posV - 2, posH - 1],
        [posV + 1, posH + 2], [posV + 1, posH - 2], [posV - 1, posH + 2], [posV - 1, posH - 2]
    ];

    //Фильтруем по размеру шахмотной доски
    const availableMoves = moves.filter(move => {
        if (move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9)
            return move;
    });

    //Замена цифровых значений на буквенные
    return availableMoves.map(item => {
        item[0] = defaultVertical[item[0] - 1];
        return item.join(""); //соединяем букву с числом
    }).join(); //Выводим полученный массив ввиде строки через запятую
}