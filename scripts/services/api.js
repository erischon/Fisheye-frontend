const REST_ENDPOINT = "data/photographers.json";

/**
 * Fetch the data from a virtual API REST Endpoint
 * @return { Promise }
 */
export async function getPhotographersData() {
  const response = await fetch(REST_ENDPOINT);

  if (!response.ok) {
    console.log("Error");
  }

  const photographers = response.json();

  return photographers;
}
