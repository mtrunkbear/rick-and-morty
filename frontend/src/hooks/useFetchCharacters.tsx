import { useState, useEffect } from 'react';

type Character = {
  id: number;
  name: string;
  image: string;
  species:string;
};

type PageInfo = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

type CharactersData = {
  info: PageInfo;
  results: Character[];
};

const useFetchCharacters = (page: number) => {
  const [charactersData, setCharactersData] = useState<CharactersData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);

      const query = `
        query GetCharacters($page: Int!) {
          characters(page: $page) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              image
              species
            }
          }
        }
      `;

      const variables = { page };

      try {
        const response = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, variables }),
        });

        const data = await response.json();
        setCharactersData(data.data.characters);
      } catch (error) {
        setError("Error fetching characters");
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { charactersData, isLoading, error };
};

export default useFetchCharacters;