import {
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Param,
    Body,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { DocumentService } from './document.service';
  import { diskStorage } from 'multer';
  
  @Controller('documents')
  export class DocumentController {
    constructor(private documentService: DocumentService) {}
    
  
    @Post()
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
          },
        }),
      }),
    )
    async uploadDocument(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
      const documentData = {
        name: file.originalname,
        path: file.path,
        description: body.description || '',
      };
      return this.documentService.createDocument(documentData);
    }
  
    @Get()
    async getDocuments() {
      return this.documentService.findAllDocuments();
    }
  
    @Get(':id')
    async getDocument(@Param('id') id: string) {
      return this.documentService.findDocumentById(id);
    }
  
    @Put(':id')
    async updateDocument(@Param('id') id: string, @Body() updateData: any) {
      return this.documentService.updateDocument(id, updateData);
    }
  
    @Delete(':id')
    async deleteDocument(@Param('id') id: string) {
      return this.documentService.deleteDocument(id);
    }
  }
  