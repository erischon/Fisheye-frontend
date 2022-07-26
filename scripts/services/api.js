const ENDPOINT = "data/photographers.json";

/**
 * Fetch the data
 * @return { Promise }
 */
export async function getPhotographersData() {
  const response = await fetch(ENDPOINT);

  if (!response.ok) {
    console.log("Error");
  }

  const photographers = response.json();

  return photographers;
}
