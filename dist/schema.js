"use strict";
const classifications = [
    "Electronics",
    "Clothing",
    "Books",
    "Beauty",
    "Toys",
    "Sports",
    "Other",
];
// create me a firebase rest api to add items to the database url using the shopItem interface
// https://firebase.google.com/docs/reference/rest/database#section-post
// the object needs to have the keys as strings, example "itemId" not itemId:
const item = {
    itemId: crypto.randomUUID(),
    itemName: "Bike",
    itemPrice: 100,
    itemClassification: "Sports",
    itemDescription: "A bike",
    itemImage: "https://www.bikeimage.com",
    itemStock: 5,
};
let itemName = document.getElementById("item-name");
let itemPrice = document.getElementById("item-price");
let itemClassification = document.getElementById("item-classification");
let itemDescription = document.getElementById("item-description");
let itemImage = document.getElementById("item-image");
let itemStock = document.getElementById("item-stock");
// make a function that will take the input values and create a new item object:
const createItem = () => {
    const newItem = {
        itemId: crypto.randomUUID(),
        itemName: itemName.value,
        itemPrice: Number(itemPrice.value),
        itemClassification: itemClassification.value,
        itemDescription: itemDescription.value,
        itemImage: `https://drive.google.com/uc?id=${itemImage.value}`,
        itemStock: Number(itemStock.value),
    };
    return newItem;
};
const addBtn = document.getElementById("add-to-db");
// event listener
addBtn.addEventListener("click", () => {
    // fetch request
    fetch("https://shopping-inventory-1f558-default-rtdb.firebaseio.com/ShopItems.json", {
        method: "POST",
        body: JSON.stringify(createItem()),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
    itemName.value = "";
    itemPrice.value = "";
    itemClassification.value = "";
    itemDescription.value = "";
    itemImage.value = "";
    itemStock.value = "";
});
