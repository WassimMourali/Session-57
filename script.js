//Session 57 : appliqué les méthode de tableau (array)

//ajouter un élément au dernier de tableau
var tab1 = ["wassim", "nourhen", "ghada", "oumayma"];
tab1.push("baha");
console.log(tab1);

//suppression dernier élément de tableau
var tab1 = ["wassim", "nourhen", "ghada", "oumayma"];
tab1.pop();
console.log(tab1);

//supression 1 ére élément de tableau
var tab1 = ["wassim", "nourhen", "ghada", "oumayma"];
tab1.shift();
console.log(tab1);

//ajout un ou plusieurs éléments au début de tableau
var tab1 = ["wassim", "nourhen", "ghada", "oumayma"];
tab1.unshift("wissal","rafi");
console.log(tab1);

//renvoie la valeur de element par index
var tab1 = ["wassim", "nourhen", "ghada", "oumayma"];
console.log(tab1.indexOf("nourhen"));

//appliqué méthode map()
var numb1 = [1, 2, 3, 4, 5, 6];
var multiple = numb1.map((nombre) => nombre *2) ;
console.log(multiple);

//appliqué méthode forEach() : parcours par chaque élément de tableau
var numb1 = [1, 2, 3, 4, 5, 6];
numb1.forEach((nombre, index) => {
    numb1[index] = nombre * 2;
});
console.log(numb1);


//appliqué methode reduce
var numb1 = [1, 2, 3, 4, 5, 6];
var somme = numb1.reduce((accumul, value) => {
    return accumul + value 
},0 );
console.log(somme);


//inverser les élément de tableau
var numb1 = [1, 2, 3, 4, 5, 6];
numb1.reverse();
console.log(numb1);


//tratiement les méthode dans un objet
var machine = {série : 123456,
    marque : "dini argeo",
    modele : "et8 tactile",
    compteur : 456 ,
};

//ajouter élément dans un objet
machine.statut = "en marche";
console.log(machine);

//convertir objet dans un tableau et prendre propréite
var keys = Object.keys(machine);
console.log(keys);

//convertir objet en tableau et prendre la valeur de propriéte
var keys = Object.values(machine);
console.log(keys);

//convertir objet en tableau avec composant d'élément
var keys = Object.entries(machine);
console.log(keys);

//accés à une propriété spécifique avec notation d'élément
console.log(machine.marque);

//loops
//boucle for
//affichage valeur de compteur de boucle[i]
for (let i = 0; i <= 12; i++) {
    console.log("compteur i boucle for",i);
}

//boucle while
var j = 0 ;
while (j <= 12) {
    console.log("compteur j boucle while",j);
    j++;
}

//boucle do_while
var l = 0;
do {
    console.log("compteur l boucle do..while",l);
    l++;
}while (l <=12);

//affichage valeur de compteur de i par rapport de tableau
var tab3 = ["marque", "modele", "compteur", ];
for (let i = 0; i < tab3.length; i++) {
    console.log(tab3[i]);
}


//condition if
var tempurature = 15 ;
if (tempurature > 40){
    console.log("its summer time");
}else {console.log("mahoch summer time");}

//switch
switch(true){
    case (tempurature >= 40) : 
    console.log("its summer time");
    break;
    
    case (tempurature <10) : 
    console.log("mahoch summer time wallah");
    break;

    default :
    console.log("mafama chay");
}


