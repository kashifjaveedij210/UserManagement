import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IngestionEntity } from "src/model/ingestion.model";

@Injectable()
export class IngestionService {
  constructor(@InjectModel(IngestionEntity.name) private ingestionModel: Model<IngestionEntity>) {}

  async getAllIngestions() {
    return this.ingestionModel.find();
  }

  async getIngestionById(id: string) {
    return this.ingestionModel.findById(id);
  }
}
