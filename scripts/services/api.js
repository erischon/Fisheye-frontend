const API_URL = "data/photographers.json";

// return photographers;
export async function getPhotographersData() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    console.log("Error");
  }

  const photographers = response.json();

  return photographers;
}
