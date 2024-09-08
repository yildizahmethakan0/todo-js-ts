import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: Partial<Todo>): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(id: number, todo: Partial<Todo>): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return await this.todoRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
