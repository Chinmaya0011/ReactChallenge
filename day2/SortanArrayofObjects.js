const products = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 }
  ];
  
  products.sort((a,b)=>{
if(a.price>b.price){
    return 1;
}
if(a.price<b.price){
    return -1;
}
return 0;
  })
  console.log(products)
