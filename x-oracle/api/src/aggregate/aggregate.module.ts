import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { RedisService } from '../redis.service'
import { AggregateController } from './aggregate.controller'
import { AggregateService } from './aggregate.service'

@Module({
  controllers: [AggregateController],
  providers: [AggregateService, PrismaService, RedisService],
  exports: [AggregateService]
})
export class AggregateModule {}
