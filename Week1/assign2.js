const Transactions = [
    {
        id: 1,
        name: "Shri",
        item: "Pizza",
        category: "Food",
        price: 40
    },
    {
        id: 2,
        name: "Alex",
        item: "Laptop",
        category: "Electronics",
        price: 1200
    },
    {
        id: 3,
        name: "Maya",
        item: "Novel",
        category: "Books",
        price: 15
    },
    {
        id: 4,
        name: "John",
        item: "Jeans",
        category: "Clothing",
        price: 60
    },
    {
        id: 5,
        name: "Sara",
        item: "Smartphone",
        category: "Electronics",
        price: 800
    },
    {
        id: 6,
        name: "Emma",
        item: "Coffee",
        category: "Food",
        price: 5
    },
    {
        id: 7,
        name: "Ryan",
        item: "Jacket",
        category: "Clothing",
        price: 100
    },
    {
        id: 8,
        name: "Olivia",
        item: "Headphones",
        category: "Electronics",
        price: 150
    },
    {
        id: 9,
        name: "Sophia",
        item: "Shoes",
        category: "Clothing",
        price: 80
    },
    {
        id: 10,
        name: "David",
        item: "Textbook",
        category: "Books",
        price: 50
    }
];

let res = {}

for(let i=0; i<Transactions.length ; i++){
  let category = Transactions[i].category
  let price = Transactions[i].price

  if(res[category]){
    res[category] += price
  } else{
    res[category] = price
  }
}

let final = []

for(let category in res){
   console.log(category+": "+res[category])
  let total = res[category]
  final.push({category, total})
}

console.log(final)
