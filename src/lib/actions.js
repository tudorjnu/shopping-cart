// TODO: make the error handling more robust
export async function getProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product", error);
  }
}

export async function getProducts(ids) {
  let products = [];
  for (const id of ids) {
    const product = await getProduct(id);
    products.push(product);
  }
  return products;
}
