export async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (response.status >= 400) {
    throw new Error("Server error");
  }
  const product = await response.json();
  return product;
}

export async function getProducts(ids) {
  let products = [];
  for (const id of ids) {
    const product = await getProduct(id);
    products.push(product);
  }
  return products;
}
