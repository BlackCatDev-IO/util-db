import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilSchema } from './util.entity';
import { ConfigModule } from '@nestjs/config';
import { DebugLogSchema } from './debug.log.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      keepAlive: true,
      connectTimeoutMS: 30000,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: 'UtilDTO', schema: UtilSchema },
      {
        name: 'DebugLogDTO',
        schema: DebugLogSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
