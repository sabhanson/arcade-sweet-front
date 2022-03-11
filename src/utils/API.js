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
        const response = await fetch('https://powerful-badlands-74006.herokuapp.com/api/userProfile/Profile/'+token, {
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
        'https://powerful-badlands-74006.herokuapp.com/api/scores/top/',
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
export const getWordleScores = async (gamevalue) => {
    try {
      const response = await fetch(
        'https://powerful-badlands-74006.herokuapp.com/api/scores/wordle',
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

  export const getReviews = async (gamevalue) => {
    try {
      const response = await fetch(
        'https://powerful-badlands-74006.herokuapp.com/api/reviews/latest/',
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
      const reviewsData = await response.json();
      return reviewsData;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  export const postReviews = async (review, gamevalue) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        'https://powerful-badlands-74006.herokuapp.com/api/reviews/',
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            review: review,
            gamevalue: gamevalue,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      const reviewData = await response.json();
      return reviewData;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

export default {isToken, getProfileData, getScores, postReviews, getReviews, getWordleScores};