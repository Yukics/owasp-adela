interface Login {
    username: string,
    password: string
}

export default async function fetchHandle(method: string, payload: Login, route: string){
    
    const data = await fetch(`${getHostname()}${route}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    const parsedData = await data.json();
        
    return parsedData
}

function getHostname(): string {
    return window.location.protocol + "//" + window.location.host;
}