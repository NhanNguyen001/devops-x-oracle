import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { DataService } from './data.service'
import { DatumDto } from './dto/datum.dto'

@Controller({
  path: 'data',
  version: '1'
})
@ApiTags('Data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async create(@Body('data') dataDto: DatumDto[]) {
    return await this.dataService.createMany(dataDto)
  }

  @Get()
  async findAll() {
    return await this.dataService.findAll({})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.dataService.findOne({ id: Number(id) })
  }
}
