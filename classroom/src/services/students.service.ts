import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

// type CreateCustomerParams = {
//   authUserId: string;
// };

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentById(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }

  getStudentByAuthUserId(authUserId: string) {
    return this.prisma.student.findUnique({
      where: { authUserId },
    });
  }

  // async createCustomer({ authUserId }: CreateCustomerParams) {
  //   return this.prisma.customer.create({
  //     data: {
  //       authUserId,
  //     },
  //   });
  // }
}
