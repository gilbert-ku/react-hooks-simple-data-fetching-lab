// create your App component here
import  { useEffect, useState } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Fetch the random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received dog image URL
        setDogImageUrl(data.message);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
      });
  }, []);

  return (
    <div>
      {/* Display the loading message while waiting for the response */}
      {!dogImageUrl ? (
        <p>Loading...</p>
      ) : (
        // Display the dog image once the response is received
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
