export async function ResponseChk(response) {

    if(response.ok) return response.json();
    if(response.status ==400){
        const error = await response.text();
        throw new Error("N/w error..");
    }

}

export function ErrorChk(error) {
    
    console.log("Connection to Api failed "+ error)

}