import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PorjectsModule } from './porjects/porjects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [TasksModule, PorjectsModule, UsersModule, PaymentsModule,PrismaModule],
  controllers: [HelloController],
  
  
 
})
export class AppModule {}
