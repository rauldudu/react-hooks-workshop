import { apiUrl } from "../constants/constants";

export default async function fetchProduct(id) {
  const data = await fetch(`${apiUrl}/products/${id}`);
  return data.json();
}
