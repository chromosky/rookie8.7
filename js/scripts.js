
//Zadanie 8.7 z tablicami w tle


var femaleNames = ['Asia', 'Basia', 'Casia', 'Dasia'];
var maleNames = ['Jurek', 'Jarek', 'Jacek', 'Bolo'];
var allNames = femaleNames.concat(maleNames);
//console.log(allNames) at that point [Asia,Basia,Casia,Dasia,Jurek,Jarek,Jacek,Bolo]

var newName ='Pluto';    // it will be like allNames+newName

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push('Pluto');
}

document.getElementById("newTableWithNames").innerHTML = allNames;