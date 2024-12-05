import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from 'src/model/document.model';

@Injectable()
export class DocumentService {
  constructor(@InjectModel(DocumentEntity.name) private documentModel: Model<DocumentEntity>) {}

  async createDocument(data: any) {
    const document = new this.documentModel(data);
    return document.save();
  }

  async findAllDocuments() {
    return this.documentModel.find();
  }

  async findDocumentById(id: string) {
    const document = await this.documentModel.findById(id);
    if (!document) throw new NotFoundException('Document not found');
    return document;
  }

  async updateDocument(id: string, updateData: any) {
    return this.documentModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteDocument(id: string) {
    return this.documentModel.findByIdAndDelete(id);
  }
}
