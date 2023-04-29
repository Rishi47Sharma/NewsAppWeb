import axios from "axios";
const fetchData = async (category) => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines", {
    headers: {
      Authorization: "3074b6e223ee419c8326077a6ab0c0ed",
    },
    params: {
      country: "in",
      category: category,
    },
  });
  console.log(category);

  return response.data.articles;
};
export default fetchData;
