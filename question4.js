let products = [
  { name: "Rice", price: 3000, quantity: 50 },
  { name: "Beans", price: 1800, quantity: 30 },
  { name: "Oil", price: 2500, quantity: 20 },
];

let totalSumOfProducts = 0;
for (let i = 0; i < products.length; i++) {
  console.log(`Name: ${products[i].name}, Price:${products[i].price}`);

  totalSumOfProducts =
    totalSumOfProducts + products[i].price * products[i].quantity;
}

console.log(`The Total value of all products: ${totalSumOfProducts}`);
