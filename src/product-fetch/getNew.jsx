
export default async function getNew() {
    const ApiUrl = process.env.API_URL;
    try {
        const response = await fetch(`${ApiUrl}/api/newproduct`,{
            cache:"no-store"
        });
        return response.json();
    } catch (error) {
        console.log(error)
        
    }
    }
    