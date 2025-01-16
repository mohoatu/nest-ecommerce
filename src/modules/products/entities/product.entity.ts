import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Category } from '../../categories/entities/category.entity';

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float)
  price: number;

  @Field()
  stock: number;

  @Field()
  categoryId: string;

  @Field(() => Category)
  category: Category;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
