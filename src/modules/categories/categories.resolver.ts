import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category])
  categories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  category(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.findOne(id);
  }
}
