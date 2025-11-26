import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy  {
  private readonly logger = new Logger('PrismaSeriveProject')
  constructor() {
    const connectionString = `${process.env.DATABASE_URL}`;
    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }

   async onModuleInit() {
    
    try{

      await this.$connect();
      this.logger.log('📌 Conectado a la base de datos');
    }catch(err){
      this.logger.error('Error al conectar a la base de datos', err)
      throw Error
    }
    
  }

  async onModuleDestroy() {
    console.log('📌 Desconectando Prisma...');
    await this.$disconnect();
    this.logger.log('📌 Desconectado de la base de datos');
  }
}
