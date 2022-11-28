import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilDTO } from './util.entity';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      keepAlive: true,
      connectTimeoutMS: 30000,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: UtilSchema }]),
    // UtilDTO,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
