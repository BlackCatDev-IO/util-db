import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilDTO, UtilSchema } from './util.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://lorenaguey:93iYGZSjP1IyyOrl@util-db.q1jmmg0.mongodb.net/?retryWrites=true&w=majority',
      {
        keepAlive: true,
        connectTimeoutMS: 30000,
        useUnifiedTopology: true,
      },
    ),
    MongooseModule.forFeature([{ name: 'UtilDTO', schema: UtilSchema }]),
    // UtilDTO,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
