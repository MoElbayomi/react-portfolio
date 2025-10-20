// Magical Football Skills Inventory
let inventory = [
  { name: "Messi Dribbling", type: "Skill", price: 9999999, quantity: 1, description: "World-class close control and agility like Messi." },
  { name: "Salah Speed Boots", type: "Equipment", price: 8000000, quantity: 1, description: "Boots that boost your sprint and acceleration like Mo Salah." },
  { name: "Van Dijk Strength Potion", type: "Potion", price: 7500000, quantity: 1, description: "A magic drink that grants Van Dijk-level strength and power." },
  { name: "De Bruyne Vision Glasses", type: "Vision Gear", price: 8500000, quantity: 1, description: "Enhances your awareness and passing accuracy like De Bruyne." },
  { name: "Allison Reflex Gloves", type: "Goalkeeping", price: 7000000, quantity: 1, description: "Goalkeeper gloves that give lightning-fast reflexes like Alisson." },
  { name: "Mbappe Acceleration Socks", type: "Training", price: 9500000, quantity: 1, description: "Socks enchanted with the speed of Mbappé’s explosive runs." },
  { name: "Modric Stamina Drink", type: "Nutrition", price: 6000000, quantity: 1, description: "A recovery drink that enhances endurance like Luka Modric." },
  { name: "Haaland Finishing Boots", type: "Gear", price: 10000000, quantity: 1, description: "Boots that give you Haaland’s deadly finishing power." },
  { name: "Ramos Leadership Band", type: "Accessory", price: 5500000, quantity: 1, description: "Captain’s armband that boosts morale and defense like Ramos." },
  { name: "Ronaldinho Flair Aura", type: "Charm", price: 9000000, quantity: 1, description: "Adds creativity and joy to your play (the Ronaldinho effect)." },
  { name: "Casemiro Shield Spell", type: "Defense Spell", price: 8200000, quantity: 1, description: "Creates an invisible shield that enhances tackling and composure." },
  { name: "Neymar Trick Gloves", type: "Trick Item", price: 8800000, quantity: 1, description: "Grants fancy footwork and flair like Neymar." }
];

// Display all items
function listItems() {
  const tbody = document.getElementById("inventoryBody");
  tbody.innerHTML = "";
  inventory.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>$${item.price.toLocaleString()}</td>
      <td>${item.quantity}</td>
      <td>${item.description}</td>
      <td><button onclick="removeItem('${item.name}')">Remove</button></td>
    `;
    tbody.appendChild(row);
  });
  document.getElementById("extraInfo").textContent = "";
}
// Add new item
function addItem(newItem) {
  if (!newItem.name || !newItem.price || !newItem.type) {
    alert("Please provide valid item details.");
    return;
  }
  inventory.push(newItem);
  listItems();
}
// Add form handler
function handleAdd() {
  const name = document.getElementById("addName").value.trim();
  const type = document.getElementById("addType").value.trim();
  const price = Number(document.getElementById("addPrice").value);
  const qty = Number(document.getElementById("addQty").value);
  const desc = document.getElementById("addDesc").value.trim();
  if (!name || !type || isNaN(price) || isNaN(qty) || !desc) {
    alert("Please fill out all fields with valid values.");
    return;
  }
  addItem({ name, type, price, quantity: qty, description: desc });

  document.getElementById("addName").value = "";
  document.getElementById("addType").value = "";
  document.getElementById("addPrice").value = "";
  document.getElementById("addQty").value = "";
  document.getElementById("addDesc").value = "";

  document.getElementById("extraInfo").textContent = `${name} added to the inventory!`;
}

// Remove item
function removeItem(itemName) {
  const before = inventory.length;
  inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
  if (inventory.length < before) {
    document.getElementById("extraInfo").textContent = `${itemName} was removed successfully, lesssgoooooo.`;
  } else {
    document.getElementById("extraInfo").textContent = `No item named '${itemName}' was found.`;
  }
  listItems();
}

// Get item by name
function getItem(itemName) {
  const found = inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase());
  if (!found) alert("Item not found!");
  return found;
}

// Search items
function searchItems() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = inventory.filter(item =>
    item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
  );
  const tbody = document.getElementById("inventoryBody");
  tbody.innerHTML = "";

  if (results.length === 0) {
    document.getElementById("extraInfo").textContent = "No matching items found.";
    return;
  }

  results.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>$${item.price.toLocaleString()}</td>
      <td>${item.quantity}</td>
      <td>${item.description}</td>
      <td><button onclick="removeItem('${item.name}')">Remove</button></td>
    `;
    tbody.appendChild(row);
  });
  document.getElementById("extraInfo").textContent = `${results.length} item(s) found.`;
}

// Calculate total value
function calculateTotalValue() {
  const total = inventory.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("extraInfo").textContent = `Total inventory value: $${total.toLocaleString()}`;
}

// Group by category
function groupByCategory() {
  const grouped = {};
  for (let item of inventory) {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push(item);
  }
  let output = "Inventory grouped by type:<br>";
  for (let type in grouped) {
    output += `<strong>${type}</strong>: ${grouped[type].map(i => i.name).join(", ")}<br>`;
  }
  document.getElementById("extraInfo").innerHTML = output;
}
// Apply discount
function applyDiscount(percent) {
  for (let item of inventory) {
    item.price -= (item.price * percent) / 100;
  }
  listItems();
  document.getElementById("extraInfo").textContent = `${percent}% discount applied to all items!`;
}
// Find duplicates
function findDuplicates() {
  const seen = new Set();
  const duplicates = new Set();
  for (let item of inventory) {
    if (seen.has(item.name.toLowerCase())) duplicates.add(item.name);
    seen.add(item.name.toLowerCase());
  }
  if (duplicates.size > 0)
    alert("Duplicate items found: " + Array.from(duplicates).join(", "));
  else alert("No duplicates found!");
}
// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
// Initialize
window.onload = listItems;
