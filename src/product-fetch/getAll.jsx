
export default async function getAll() {
const ApiUrl = process.env.API_URL;
try {
    const response = await fetch(`${ApiUrl}/api/products`,{
        cache:"no-store"
    });
    return response.json();
} catch (error) {
    console.log(error)
    
}
}
