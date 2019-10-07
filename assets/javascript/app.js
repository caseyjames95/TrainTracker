let trains = {}
let newTrain = {}
let name = ''
let dest = ''
let first = 0
let freq = 0
e = ''

// Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAyc2T0-w22W-JxkTOi3S88K0g3oF7-DH4",
    authDomain: "traintracker-e26a8.firebaseapp.com",
    databaseURL: "https://traintracker-e26a8.firebaseio.com",
    projectId: "traintracker-e26a8",
    storageBucket: "traintracker-e26a8.appspot.com",
    messagingSenderId: "147059723886",
    appId: "1:147059723886:web:d9efb82bd00db6b448607f"
};

firebase.initializeApp(firebaseConfig);

// Get stored information from Firebase


// Create train info row
const createRow = function () {
    document.createElement('td')
    newTrain =
        document.getElementById('trainRow').innerHTML(`
        <td>${name}</td>
        <td>${dest}</td>
        <td>${first}</td>
        <td>${freq}</td>
        `)
    newTrain.
        document.getElementById('newTrain').append('tr')
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


// Timer
const getNext = (original, rate) => {

    const rateInSeconds = rate * 60

    const now = moment().unix()

    let lapse = original

    while (lapse < now) {
        lapse += rateInSeconds
    }

    return moment((lapse + rate), 'X').format('MMMM, Do YYYY hh:mm a')
}