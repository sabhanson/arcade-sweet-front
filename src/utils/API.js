import { keyboard } from "@testing-library/user-event/dist/keyboard";


export const isToken = () => {
    const token = localStorage.getItem("token");
    if(token)
        return true;
    else
        return false;
}

export const getProfileData = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch('http://localhost:3001/api/userProfile/Profile/'+token, {
            mode: "cors",
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        });
        const j = await response.json();
        return j;
    } catch (e) {
        console.log(e);
    }
    return null;
   
}

export default {isToken, getProfileData};