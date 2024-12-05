import { Module } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { IngestionController } from './ingestion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IngestionEntity, IngestionSchema } from 'src/model/ingestion.model';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule,
    MongooseModule.forFeature([
      { name: IngestionEntity.name, schema: IngestionSchema },
    ]),
  ],
  providers: [IngestionService],
  controllers: [IngestionController],
})
export class IngestionModule {}
