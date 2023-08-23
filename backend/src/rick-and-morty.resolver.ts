import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import axios from 'axios';
import { CharacterResult } from './character.model';

@Resolver()
export class RickAndMortyResolver {
  @Query(() => CharacterResult )
  async characters(@Args('page', { type: () => Int }) page: number){
    try {
      const response = await axios.post('https://rickandmortyapi.com/graphql', {
        query: `
            query GetCharacters($page: Int!) {
              characters(page: $page, filter: { species: "human" }) {
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
          `,
        variables: { page },
      });
      const pageInfo = response.data.data.characters.info;
      if (pageInfo.prev === null) {
        pageInfo.prev = ''; 
      }
      return response.data.data.characters;
    } catch (error) {
      console.error('Error in graphql get characters' + error);
    }
  }
}
