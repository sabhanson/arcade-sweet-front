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

export const getScores = async (gamevalue) => {
    try {
      const response = await fetch(
        'http://localhost:3001/api/scores/top/',
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gamevalue: gamevalue,
          }),
        }
      );
      const scoreData = await response.json();
      return scoreData;
    } catch (e) {
      console.log(e);
    }
    return null;
  };
  };

export default {isToken, getProfileData, getScoreData};