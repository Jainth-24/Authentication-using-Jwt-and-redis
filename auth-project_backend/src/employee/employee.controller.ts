import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('add')
  async addEmployee(
    @Body()
    body: {
      name: string;
      status: string;
      designation: string;
      department: string;
      role: string;
    },
  ) {
    return this.employeeService.addEmployee(body);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }
}
