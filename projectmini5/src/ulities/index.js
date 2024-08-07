const path ="http://localhost:3001/";

export const get =async (domain) =>{
    const response = await fetch(path+domain);
    const result =await response.json();
    return result;
}
export const post = async(domain,options) =>{
    const response = await fetch(path+domain,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type": "application.json",
        },
        body: JSON.stringify(options)
    })
    const result = response.json();
    return result;
}
