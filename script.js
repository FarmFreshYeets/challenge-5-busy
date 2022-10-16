var nineAM = {
    row: $('#row-1'),
    hour: 9
}
var tenAM = {
    row: $('#row-2'),
    hour: 10
}
var elevenAM = {
    row: $('#row-3'),
    hour: 11
}
var twelveAM = {
    row: $('#row-4'),
    hour: 12
}
var onePM = {
    row: $('#row-5'),
    hour: 13
}
var twoPM = {
    row: $('#row-6'),
    hour: 14
}
var threePM = {
    row: $('#row-7'),
    hour: 15
}
var fourPM = {
    row: $('#row-8'),
    hour: 16
}
var fivePM = {
    row: $('#row-9'),
    hour: 17
}

var rowsArray = [nineAM, tenAM, elevenAM, twelveAM, onePM, twoPM, threePM, fourPM, fivePM]


// uses moment.js to set the 'currentDay' p element to whatever the date at the time
var today = moment()
$('#currentDay').text(today.format('dddd, MMMM Do'))

var currentHour = parseInt(moment().format('HH'), 10)
console.log(currentHour)

for (var i = 0; i < rowsArray.length; i++) {
    console.log(rowsArray[i].hour)
    if (rowsArray[i].hour < currentHour) {
        rowsArray[i].row.children().eq(1).css('background-color', 'lightgray')
    } else if (rowsArray[i].hour == currentHour) {
        rowsArray[i].row.children().eq(1).css('background-color', '#e96b6b')
    } else {
        rowsArray[i].row.children().eq(1).css('background-color', '#89e286')
    }
}