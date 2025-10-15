// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page
const form = document.getElementById("addCreatureForm");
const sanctuary = document.getElementById("creatureSanctuary");
let creatures = []; // our list of creatures

// when the form is submitted
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // grab user input
  const name = document.getElementById("creatureName").value;
  const type = document.getElementById("creatureType").value;
  const habitat = document.getElementById("creatureHabitat").value;
  const image = document.getElementById("creatureImage").value;
  const notes = document.getElementById("creatureNotes").value;
  // create creature object
  const creature = {
    name: name,
    type: type,
    habitat: habitat,
    image: image,
    notes: notes
  };

  // add to array
  creatures.push(creature);
  // show updated list
  displayCreatures();
  // clear form
  form.reset();
});
// function to show all creatures
function displayCreatures(list = creatures) {
  sanctuary.innerHTML = ""; // clear old list
  for (let i = 0; i < list.length; i++) {
    const c = list[i];

    sanctuary.innerHTML += `
      <div class="card p-3 mt-3">
        <h3>${c.name}</h3>
        <p><b>Type:</b> ${c.type}</p>
        <p><b>Habitat:</b> ${c.habitat}</p>
        ${c.image ? `<img src="${c.image}" width="200" alt="${c.name}">` : ""}
        ${c.notes ? `<p><b>Notes:</b> ${c.notes}</p>` : ""}
        <button class="btn btn-danger" onclick="removeCreature(${i})">Remove</button>
      </div>
    `;
  }
}
// remove creature by index
function removeCreature(index) {
  creatures.splice(index, 1);
  displayCreatures();
}

// create search bar dynamically
const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.className = "form-control mt-4";
searchBar.placeholder = "Search by name or type";
document.querySelector(".container").insertBefore(searchBar, sanctuary);

// filter creatures as user types
searchBar.addEventListener("input", function() {
  const search = this.value.toLowerCase();
  const filtered = creatures.filter(c =>
    c.name.toLowerCase().includes(search) || c.type.toLowerCase().includes(search)
  );
  displayCreatures(filtered);
});

