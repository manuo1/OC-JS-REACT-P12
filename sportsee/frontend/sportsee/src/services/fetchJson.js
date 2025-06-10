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
