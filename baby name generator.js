function generateName () {
  var randomNumberFirstName = Math.floor((Math.random() * 3) + 0);
  var randomNumberMiddleName = Math.floor((Math.random() * 3) + 0);
  var boyNameChecked = document.getElementById('boy-name').checked;
  var girlNameChecked = document.getElementById('girl-name').checked;
  var firstName;
  var middleName;
  var lastName = document.getElementById('last-name').value;
  if (!lastName) {
    alert('You forgot to enter your last name, idiot.');
    return;
  }
  if (boyNameChecked) {
    firstName = boyNames[randomNumberFirstName];
    middleName = boyNames[randomNumberMiddleName];
  } else if (girlNameChecked) {
    firstName = girlNames[randomNumberFirstName];
    middleName = girlNames[randomNumberMiddleName];
  } else {
    alert('We totally respect your preference to refrain from deploying gender binaries, but we recommend that you select male or female to view names that statistically fall under a specific gender — at least for the purposes of this assignment.');
    return;
  }
  var display = document.getElementById('baby-name');
  display.innerText = firstName + ' ' + middleName + ' ' + lastName;
}

function changeBackground (hexcode) {
  document.body.style.backgroundColor = hexcode;
  var display = document.getElementById('baby-name');
  display.innerText = '';
}

var girlNames = [
  'Phoebe',
  'Rachel',
  'Monica'];
var boyNames = ['Chandler',
  'Ross',
  'Joey'];
