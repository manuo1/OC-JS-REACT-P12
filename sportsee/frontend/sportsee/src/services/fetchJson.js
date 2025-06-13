/**
 * Fetches JSON data from the given URL and handles both HTTP and network errors.
 *
 * - Throws an error with a `status` property:
 *   - `res.status` for HTTP errors (like 404 or 500)
 *   - `0` for network errors or CORS failures
 *
 * - Logs detailed error messages in the console for debugging.
 *
 * @async
 * @function fetchJson
 * @param {string} url - The URL to fetch JSON data from.
 * @returns {Promise<Object>} The parsed JSON response.
 * @throws {Error} If the request fails or the server responds with a non-2xx status.
 */

export async function fetchJson(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const err = new Error(`HTTP error! Status: ${res.status}`);
      err.status = res.status;
      console.error(
        `HTTP error while fetching ${url}: ${res.status} ${res.statusText}`
      );
      throw err;
    }

    return await res.json();
  } catch (err) {
    if (err.status === undefined) {
      err.status = 0;
      console.error(`Network error or no response from ${url}`);
    }
    throw err;
  }
}
