/**
 * Fetches JSON data from the given URL.
 *
 * Performs a fetch request and returns the parsed JSON response.
 * Throws an error if the HTTP response status is not OK (status 200-299),
 * or if the fetch itself fails.
 *
 * @async
 * @function fetchJson
 * @param {string} url - The URL to fetch JSON data from.
 * @returns {Promise<any>} A promise that resolves to the parsed JSON data.
 * @throws {Error} Throws if the HTTP status is not ok or fetch fails.
 */
export async function fetchJson(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Fetch failed for ${url}`, err);
    throw err;
  }
}
