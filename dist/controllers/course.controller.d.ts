import { Count, Filter, Where } from '@loopback/repository';
import { Course } from '../models';
import { CourseRepository } from '../repositories';
export declare class CourseController {
    courseRepository: CourseRepository;
    constructor(courseRepository: CourseRepository);
    create(course: Course): Promise<Course>;
    count(where?: Where<Course>): Promise<Count>;
    find(filter?: Filter<Course>): Promise<Course[]>;
    updateAll(course: Course, where?: Where<Course>): Promise<Count>;
    findById(id: string): Promise<Course>;
    updateById(id: string, course: Course): Promise<void>;
    replaceById(id: string, course: Course): Promise<void>;
    deleteById(id: string): Promise<void>;
}
