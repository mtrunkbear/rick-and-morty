import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(() => Number)
  count: number;

  @Field(() => Number)
  pages: number;

  @Field(() => String)
  next: string;

  @Field(() => String)
  prev: string;
}

@ObjectType()
export class CharacterResult {
  @Field(() => [Character])
  results: Character[];

  @Field(() => PageInfo)
  info: PageInfo;
}
@ObjectType()
export class Origin {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class Location {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class Character {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String )
  status: string;

  @Field(() => String)
  species: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  gender: string;

  @Field(() => Origin) // Usa el tipo Origin aquí
  origin: Origin;

  @Field(() => Location) // Usa el tipo Location aquí
  location: Location;

  @Field(() => String)
  image: string;

  @Field(() => [String])
  episode: string[];

  @Field(() => String)
  url: string;

  @Field(() => String)
  created: string;
}

