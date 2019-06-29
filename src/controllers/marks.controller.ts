import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Marks} from '../models';
import {MarksRepository} from '../repositories';

export class MarksController {
  constructor(
    @repository(MarksRepository)
    public marksRepository : MarksRepository,
  ) {}

  @post('/marks', {
    responses: {
      '200': {
        description: 'Marks model instance',
        content: {'application/json': {schema: {'x-ts-type': Marks}}},
      },
    },
  })
  async create(@requestBody() marks: Marks): Promise<Marks> {
    return await this.marksRepository.create(marks);
  }

  @get('/marks/count', {
    responses: {
      '200': {
        description: 'Marks model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Marks)) where?: Where<Marks>,
  ): Promise<Count> {
    return await this.marksRepository.count(where);
  }

  @get('/marks', {
    responses: {
      '200': {
        description: 'Array of Marks model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Marks}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Marks)) filter?: Filter<Marks>,
  ): Promise<Marks[]> {
    return await this.marksRepository.find(filter);
  }

  @patch('/marks', {
    responses: {
      '200': {
        description: 'Marks PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() marks: Marks,
    @param.query.object('where', getWhereSchemaFor(Marks)) where?: Where<Marks>,
  ): Promise<Count> {
    return await this.marksRepository.updateAll(marks, where);
  }

  @get('/marks/{id}', {
    responses: {
      '200': {
        description: 'Marks model instance',
        content: {'application/json': {schema: {'x-ts-type': Marks}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Marks> {
    return await this.marksRepository.findById(id);
  }

  @patch('/marks/{id}', {
    responses: {
      '204': {
        description: 'Marks PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() marks: Marks,
  ): Promise<void> {
    await this.marksRepository.updateById(id, marks);
  }

  @put('/marks/{id}', {
    responses: {
      '204': {
        description: 'Marks PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() marks: Marks,
  ): Promise<void> {
    await this.marksRepository.replaceById(id, marks);
  }

  @del('/marks/{id}', {
    responses: {
      '204': {
        description: 'Marks DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.marksRepository.deleteById(id);
  }
}
