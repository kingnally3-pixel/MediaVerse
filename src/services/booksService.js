import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export async function getBooks(search = "programming") {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: search,
        maxResults: 12,
      },
    });

    return response.data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}