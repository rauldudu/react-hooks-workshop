import { apiUrl } from "../constants/constants";

export default async function fetchProducts() {
  const data = await fetch(`${apiUrl}/products`);
  return data.json();
}
