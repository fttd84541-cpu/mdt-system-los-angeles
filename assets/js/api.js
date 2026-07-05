const API_URL = "http://localhost:3000"; 
// ⚠️ POZDĚJI ZMĚNÍŠ NA RAILWAY URL (např. https://tvoje-api.up.railway.app)

export async function getCitizens() {
    const res = await fetch(`${API_URL}/citizens`);
    return await res.json();
}

export async function getVehicles() {
    const res = await fetch(`${API_URL}/vehicles`);
    return await res.json();
}
