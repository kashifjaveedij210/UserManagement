import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './routes/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './routes/user/user.module';
import { LoggingMiddleware } from 'logging.middleware';
import { DocumentModule } from './routes/document/document.module';
import { IngestionModule } from './routes/ingestion/ingestion.module';

@Module({
  imports: [AuthModule, UserModule,DocumentModule,IngestionModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONDODB_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoggingMiddleware).forRoutes('*');
}}
