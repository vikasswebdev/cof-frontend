// import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getURL(path = "") {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    // const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getURL(`/api${path}`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      // console.error(response.statusText);
      throw new Error(`An error occured please try again`);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}
