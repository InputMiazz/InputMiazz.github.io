
function coordsGen(){
  coordinates()
  coordinatestwo()

  document.getElementById('b-coordinates').innerHTML = `${
twoDigitsPartsA} ${twoDigitsPartsB} `;

  document.getElementById('c-coordinates').style.display = 'none';
  document.getElementById('b-coordinates').style.display = 'block';
}



function coordinates(){

  firstCords =  Math.ceil(Math.random() * (999999 - 62222 + 1) + 20)

  twoDigitsPartsA = firstCords.toString().split(".");
  twoDigitsPartsA[0] = twoDigitsPartsA[0].replace(/\B(?=(\d{2})+(?!(\d)))/, ".");
  twoDigitsPartsA.join(".");
}



function coordinatestwo(){

    secondCords = Math.ceil(Math.random() * (999999 - 62222 + 1) + 20)

  twoDigitsPartsB = secondCords.toString().split(".");
  twoDigitsPartsB[0] = twoDigitsPartsB[0].replace(/\B(?=(\d{2})+(?!(\d)))/, ".");
  twoDigitsPartsB.join(".");
}
