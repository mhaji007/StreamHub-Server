// User type entity
// prop allows to declare properties on model
// getModelForClass converts model to a class that mongoose can work with on the backend
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
// Declare object in database
// Decorators helps us write shorthand classes that
// could be used within the broader scope of the GraphQl interface
// The object type decorator allow us to mark the class as a type known
// from the GraphQl schema definition language
// For each GraphQl entitiy,  we need to declare an object type decorator
// in order for typescript to evaluate this as a GraphQL object type
// Without the object type class decorator the GraphQL schema would
// not have any knowledge of the user class
@ObjectType({description: "User"})
export class User {
  // @Field on fileds that we want to be readbale
  @Field()
  readonly _id: ObjectId;
  // @Property on fields that we want write access to
  @Field()
  @Property({ required: true })
  email: string;

  @Property({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User);
