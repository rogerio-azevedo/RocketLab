import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';

import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [CoursesService, EnrollmentsService, StudentsService],
})
export class MessagingModule {}
