import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentEntity, DocumentSchema } from 'src/model/document.model';
import { DocumentController } from './document.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DocumentEntity.name, schema: DocumentSchema }]),
    HttpModule
  ],
  providers: [DocumentService],
  controllers:[DocumentController]
})
export class DocumentModule {}
