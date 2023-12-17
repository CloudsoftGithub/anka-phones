
export default async function getSingle(id) {
  const ApiUrl = process.env.API_URL;
  try {
    const response = await fetch(`${ApiUrl}/api/products/${id}`, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
