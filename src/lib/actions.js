export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await response.json();
  console.log(products);
  return products;
}
