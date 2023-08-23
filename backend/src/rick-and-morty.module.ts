import { Module } from '@nestjs/common';
import { RickAndMortyResolver } from './rick-and-morty.resolver';

import { GraphQLModule } from '@nestjs/graphql'; 

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    } as ApolloDriverConfig), 
  ],
  providers: [RickAndMortyResolver],
})
export class RickAndMortyModule {}
