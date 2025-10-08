import axios from "axios";
import { useEffect, useState } from "react";

const useHeroData = () => {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../heroData.json")
      .then((data) => setHeroData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { heroData, loading, error };
};
export default useHeroData;
