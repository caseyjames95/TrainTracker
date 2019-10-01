let trains = {}
let newTrain = {}
let name = ''
let dest = ''
let first = 0
let freq = 0
e = ''

// Get stored information from Firebase


// Create train info row
const createRow = function () {
    newTrain = document.createElement('td')
    document.getElementById('newTrain').innerHTML(`
        <td>${name}</td>
        <td>${dest}</td>
        <td>${first}</td>
        <td>${freq}</td>
        `)
    document.getElementById('trainRow').append('tr')
}

// Give variables a value
const addTrain = function (e) {
    e.preventDefault()
    name = document.getElementById('tName').value
    dest = document.getElementById('tDest').value
    first = document.getElementById('tFirst').value
    freq = document.getElementById('tFreq').value
    createRow()
}






// Click event to start
document.getElementById('tSubmit').addEventListener('click', addTrain)

