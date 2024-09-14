import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import { Redis } from 'ioredis';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {
  }

  async addEmployee(employeeData: any): Promise<Employee> {
    const newEmployee = new this.employeeModel(employeeData);
    return newEmployee.save();
  }

  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }
}
