import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() todo: Partial<Todo>): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todo: Partial<Todo>,
  ): Promise<Todo> {
    return this.todoService.update(+id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(+id);
  }
}
