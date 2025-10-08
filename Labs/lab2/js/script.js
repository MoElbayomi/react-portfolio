// Inventory data (Football Skills Shop)
let inventory = [
  { name: "Messi Dribbling", type: "Skill", price: 9999999, quantity: 1, description: "Gives you world-class close control and agility like Messi." },
  { name: "Salah Speed", type: "Skill", price: 8000000, quantity: 1, description: "Boosts your sprint and acceleration like Mo Salah." },
  { name: "Van Dijk Strength", type: "Skill", price: 7500000, quantity: 1, description: "Adds unbeatable defense and power like Van Dijk." },
  { name: "De Bruyne Vision", type: "Skill", price: 8500000, quantity: 1, description: "Improves passing and vision like De Bruyne." },
  { name: "Allison Reflexes", type: "Goalkeeper", price: 7000000, quantity: 1, description: "Gives lightning-fast reaction time like Alisson Becker." },
  { name: "Mbappe Acceleration", type: "Skill", price: 9500000, quantity: 1, description: "Increases top speed and explosive runs like Mbappe." },
  { name: "Modric Stamina", type: "Skill", price: 6000000, quantity: 1, description: "Improves endurance and control like Luka Modric." },
  { name: "Haaland Finishing", type: "Skill", price: 10000000, quantity: 1, description: "Grants powerful and precise finishing like Erling Haaland." }
];
// Display items in table
function listItems() {
  const tbody = document.getElementById("inventoryBody");
  tbody.innerHTML = "";
  inventory.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.description}</td>
    `;
    tbody.appendChild(row);
  });
}
// Add new item
function addItem(newItem) {
  inventory.push(newItem);
  listItems();
}
// Remove item by name
function removeItem(itemName) {
  inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
  listItems();
}
// Get item
function getItem(itemName) {
  return inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase());
}
// Search function
function searchItems() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = inventory.filter(item =>
    item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
  );
  const tbody = document.getElementById("inventoryBody");
  tbody.innerHTML = "";
  results.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.description}</td>
    `;
    tbody.appendChild(row);
  });
}
// Calculate total value
function calculateTotalValue() {
  let total = 0;
  for (let i = 0; i < inventory.length; i++) {
    total += inventory[i].price * inventory[i].quantity;
  }
  alert("Total inventory value: $" + total);
}
// Theme toggle
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("light");
});
// Load all items on start
window.onload = listItems;

