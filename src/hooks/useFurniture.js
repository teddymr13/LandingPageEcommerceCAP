import {useState, useEffect} from 'react'
import axios from 'axios'

export const useFurniture = () => {
  
  const [loading, setLoading] = useState(false);
  const [APIData, setAPIData] = useState([]);
  useEffect(() =>{
    const fetchFurniture = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://63034bbd9eb72a839d7d1593.mockapi.io/api/v1/furnitures`
            );
            setAPIData(response.data);
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    }
    fetchFurniture();
  }, []);
  
  return { APIData, loading };
}


export const useFurnitureById = (id) => {
    const [loading, setLoading] = useState(false);
    const [APIData, setAPIData] = useState([]);
    useEffect(() =>{
      const fetchFurnitureById = async () => {
          try {
              const response = await axios.get(
                  `https://63034bbd9eb72a839d7d1593.mockapi.io/api/v1/furnitures/${id}`
              );
              setAPIData(response.data);
              setLoading(true);
          } catch (error) {
              console.log("error", error);
          } finally {
              setLoading(false);
          }
      }
      fetchFurnitureById();
    }, [id]);
    
    return { APIData, loading };
  }
  
