import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | undefined;

  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  age?: number | undefined;

  balance?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | undefined;

  posts?: PostUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostUpdateManyWithoutAuthorInput | undefined) {
    this.posts = posts;
  }
}