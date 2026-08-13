import "./menu.css";
const content = document.getElementById("content");

const menuItems = [
    { name: "Margherita Pizza", price: 28 },
    { name: "Pepperoni Pizza", price: 32 },
    { name: "BBQ Chicken Pizza", price: 34 },
    { name: "Veggie Pizza", price: 30 },
    { name: "Caesar Salad", price: 22 },
    { name: "Greek Salad", price: 20 },
    { name: "Spaghetti Bolognese", price: 26 },
    { name: "Fettuccine Alfredo", price: 27 },
    { name: "Grilled Salmon", price: 45 },
    { name: "Quattro Formaggi Pizza", price: 33 },
    { name: "Diavola Pizza", price: 31 },
    { name: "Hawaiian Pizza", price: 29 },
    { name: "Prosciutto Pizza", price: 36 },
    { name: "Caprese Salad", price: 21 },
    { name: "Tuna Nicoise Salad", price: 25 },
    { name: "Penne Arrabbiata", price: 24 },
    { name: "Lasagna Bolognese", price: 29 },
    { name: "Risotto ai Funghi", price: 28 },
    { name: "Carbonara", price: 27 },
    { name: "Grilled Sea Bass", price: 48 },
    { name: "Ribeye Steak", price: 55 },
    { name: "Chicken Parmigiana", price: 34 },
    { name: "Shrimp Scampi", price: 39 },
    { name: "Mushroom Risotto", price: 26 },
    { name: "Beef Tartare", price: 38 },
    { name: "Tiramisu", price: 16 },
    { name: "Panna Cotta", price: 15 },
    { name: "Bruschetta", price: 14 },
    { name: "Garlic Bread", price: 10 },
];
export function loadMenu() {
    content.innerHTML = "";
    //create menu section with h1 and list of menu items
    const menuSection = document.createElement("section");
    menuSection.id = "menu-section";
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    menuSection.appendChild(menuHeading);

    for(let i = 0; i< menuItems.length; i++){
        const menuItem = document.createElement("p");
        menuItem.textContent = `${menuItems[i].name} - ${menuItems[i].price} zł`;
        menuSection.appendChild(menuItem);
    }

    content.appendChild(menuSection);
}