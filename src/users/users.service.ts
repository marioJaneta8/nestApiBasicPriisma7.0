import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
 

  constructor(private prismaService: PrismaService) {}


 

  getUsers() {
    return this.prismaService.user.findMany();
  }



 async createUser(dto: CreateUserDto) {
    console.log('DTO recibido:', dto);
    
    const userData = {
      email: dto.email,
      password: dto.password,
      name: dto.name,
      age: dto.age,
    };
    
    console.log('userData:', userData);
    
    return await this.prismaService.user.create({
      data: userData,
    });
  }
}
