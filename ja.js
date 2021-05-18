

function coordinates(){


  firstDigits = Math.floor(Math.random() * 100)
  lastDigits = Math.floor(Math.random() * 19999)


  afirstDigits = Math.floor(Math.random() * 100)
  blastDigits = Math.floor(Math.random() * 19999)

  document.getElementById('b-coordinates').innerHTML = `${firstDigits}.${lastDigits}, ${afirstDigits}.${blastDigits}`;

  document.getElementById('c-coordinates').style.display = 'none';
  document.getElementById('b-coordinates').style.display = 'block';
}
