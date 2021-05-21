import { useState, useEffect } from "react";
import Youtube from "../api/Youtube";

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  // for default search
  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);
  const search = async (term) => {
    const response = await Youtube.get(`/search`, {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
