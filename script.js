// create an object for each hour in the time table
var nineAM = {
    name: "nineAM",
    row: $('#row-1'),
    hour: 9
}
var tenAM = {
    name: "tenAM",
    row: $('#row-2'),
    hour: 10
}
var elevenAM = {
    name: "elevenAM",
    row: $('#row-3'),
    hour: 11
}
var twelveAM = {
    name: "twelveAM",
    row: $('#row-4'),
    hour: 12
}
var onePM = {
    name: "onePM",
    row: $('#row-5'),
    hour: 13
}
var twoPM = {
    name: "twoPM",
    row: $('#row-6'),
    hour: 14
}
var threePM = {
    name: "threePM",
    row: $('#row-7'),
    hour: 15
}
var fourPM = {
    name: "fourPM",
    row: $('#row-8'),
    hour: 16
}
var fivePM = {
    name: "fivePM",
    row: $('#row-9'),
    hour: 17
}

// place the object names into an array so they can easily be called in a for loop
var rowsArray = [nineAM, tenAM, elevenAM, twelveAM, onePM, twoPM, threePM, fourPM, fivePM]

// if there is not a 'saved events' object in localStorage, make one. otherwise parse it
if (localStorage.getItem('saved events') == null) {
    var savedEvents = {}
} else {
    var savedEvents = JSON.parse(localStorage.getItem('saved events'))
}

// take savedEvents object and put the values into their corresponding input boxes
function displayEvents() {
    for (item in savedEvents) {
        if (item == nineAM.name) {
            nineAM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == tenAM.name) {
            tenAM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == elevenAM.name) {
            elevenAM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == twelveAM.name) {
            twelveAM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == onePM.name) {
            onePM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == twoPM.name) {
            twoPM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == threePM.name) {
            threePM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == fourPM.name) {
            fourPM.row.children().eq(1).children('input').val(savedEvents[item])
        }
        if (item == fivePM.name) {
            fivePM.row.children().eq(1).children('input').val(savedEvents[item])
        }
    }
}

// uses moment.js to set the 'currentDay' p element to whatever the date at the time
var today = moment()
$('#currentDay').text(today.format('dddd, MMMM Do'))

var currentHour = parseInt(moment().format('HH'), 10)

// uses current hour from moment.js to determine what the background color of the timeblock should be
for (var i = 0; i < rowsArray.length; i++) {
    if (rowsArray[i].hour < currentHour) {
        rowsArray[i].row.children().eq(1).css('background-color', 'lightgray')
    } else if (rowsArray[i].hour == currentHour) {
        rowsArray[i].row.children().eq(1).css('background-color', '#e96b6b')
    } else {
        rowsArray[i].row.children().eq(1).css('background-color', '#89e286')
    }
}

// checks for a click on the save buttons, then adds the input value to the savedEvents object
rowsArray[0].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[0].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[1].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[1].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[2].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[2].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[3].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[3].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[4].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[4].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[5].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[5].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[6].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[6].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[7].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[7].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

rowsArray[8].row.children().eq(2).children('button').on('click', function (event) {
    var btnClicked = $(event.target)
    var newEvent = btnClicked.parent('td').parent('tr').children().eq(1).children('input').val()
    savedEvents[rowsArray[8].name] = newEvent
    localStorage.setItem('saved events', JSON.stringify(savedEvents))
})

displayEvents()