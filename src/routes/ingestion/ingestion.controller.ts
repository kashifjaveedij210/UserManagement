import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Controller('ingestion')
export class IngestionController {
  constructor(
      private readonly httpService: HttpService, 
    private readonly ingestionService: IngestionService,
  ) {}

  // Trigger Ingestion
  @Post('trigger')
  async triggerIngestion(@Body() payload: any) {
    const Url = 'http://localhost:3000/documents/trigger-ingestion'; 

    try {
      const response = await lastValueFrom(
        this.httpService.post(Url, payload),
      ); 
      console.log('response response', response)
      return response;
    } catch (error) {
      throw new Error(`Failed to trigger ingestion: ${error.message}`);
    }
  }

  // Get all ingestion statuses
  @Get('status')
  async getAllIngestionStatuses() {
    return this.ingestionService.getAllIngestions();
  }

  // Get specific ingestion status by ID
  @Get('status/:id')
  async getIngestionStatus(@Param('id') id: string) {
    return this.ingestionService.getIngestionById(id);
  }
}
