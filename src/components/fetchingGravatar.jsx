
const fetchingGravatar = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/gravatar/${email}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Gravatar Data:", data);
  
      if (data && data.entry && data.entry.length > 0) {
        const profileDetails = data.entry[0];
        const hashData = profileDetails.requestHash; //Use requestHash from the returned data.
  
        return {
          gravatarImage: `https://www.gravatar.com/avatar/${hashData}?s=200`,
          gravatarName: profileDetails.displayName || "",
          gravatarBio: profileDetails.aboutMe || "",
          gravatarLocation: profileDetails.currentLocation || "",
          gravatarProfileUrl: profileDetails.profileUrl || "",
        };
      } 
      else {
        console.log("No Gravatar entry found.");
        return null; // Return null if no entry is found
      }
    } catch (error) {
      console.log("Error fetching Gravatar:", error);
      return null;
    }
  };
  
  export default fetchingGravatar;