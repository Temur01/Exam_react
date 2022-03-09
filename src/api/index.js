import axios from "axios";

export const getNewsByCategory = async () => {
  try {
    const res = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du"
    );
    console.log(res.data.results);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
