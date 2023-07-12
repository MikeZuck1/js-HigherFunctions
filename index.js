// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// les fonctions d'ordre supérieur sont des fonctions qui prennent d'autres fonctions comme arguments ou renvoient des fonctions comme résultats

const announceThatIamDoingImportantWork = () => {
  console.log('I\'m doing an important work!');
}; 

const busy = announceThatIamDoingImportantWork; 
busy(); // call the function 


let animals = [
  {name : 'Fluffykins', species : 'rabbit'}, 
  {name : 'Hamilton', species : 'dog'}, 
  {name : 'Caro', species : 'dog'}, 
  {name : 'Ursula', species : 'cat'}, 
  {name : 'Jimmy', species : 'fish'}, 
  {name : 'Harold', species : 'fish'}
]

// utilisation de la boucle for pour filtrer les chiens uniquement
var dog = []; 
for(let n = 0; n < animals.length; n++) {
  if(animals[n].species === 'dog')
  dog.push(animals[n]);
}
console.log(dog); // expected output [ { name: 'Hamilton', species: 'dog' }, { name: 'Caro', species: 'dog' } ]

const artists = ['Beyonce', 'Rihanna', 'Chris Brown', 'Jay-Z', 'Kanye-West'];

artists.forEach(artists => {
  console.log(artists + ' is one of the best!'); 
}); 
