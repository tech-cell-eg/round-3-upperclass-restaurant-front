import { useEffect, useState } from "react";
import axios from "axios";

export interface ClassDetails {
  id: number;
  title: string;
  sub_title: string;
  description: string;
  price: number;
  date: string;
  image: string;
  teacher: {
    name: string;
    image: string;
    description: string;
  };
}

const useFetchClassDetails = (id: number) => {
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = `https://round-3-upper-restaurant.digital-vision-solutions.com/api/classes/${id}`;

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setClassDetails(response.data.data);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchClassDetails();
    }
  }, [url, id]);

  return { classDetails, loading, error };
};

export default useFetchClassDetails;
