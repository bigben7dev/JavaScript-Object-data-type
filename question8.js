let order = {
  customer: "Fatima",
  items: [
    { product: "Bag", unitPrice: 15000, qty: 2 },
    { product: "Shoes", unitPrice: 22000, qty: 1 },
    { product: "Belt", unitPrice: 5000, qty: 3 },
  ],
};
let total = 0;
for (let i = 0; i < order.items.length; i++) {
  total += order.items[i].unitPrice * order.items[i].qty;
}
console.log(order.customer);
console.log(`${order.customer}'s total order cost is: ${total}`);
