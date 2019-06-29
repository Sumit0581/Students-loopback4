import { Count, Filter, Where } from '@loopback/repository';
import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';
export declare class TeacherController {
    teacherRepository: TeacherRepository;
    constructor(teacherRepository: TeacherRepository);
    create(teacher: Teacher): Promise<Teacher>;
    count(where?: Where<Teacher>): Promise<Count>;
    find(filter?: Filter<Teacher>): Promise<Teacher[]>;
    updateAll(teacher: Teacher, where?: Where<Teacher>): Promise<Count>;
    findById(id: string): Promise<Teacher>;
    updateById(id: string, teacher: Teacher): Promise<void>;
    replaceById(id: string, teacher: Teacher): Promise<void>;
    deleteById(id: string): Promise<void>;
}
