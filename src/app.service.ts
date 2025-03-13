import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';

@Injectable()
export class AppService {
  // Mock database of users
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: '2023-01-15T10:30:00.000Z'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      createdAt: '2023-02-20T08:15:00.000Z'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      createdAt: '2023-03-10T14:45:00.000Z'
    }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  signup(signupDto: SignupDto) {
    // This is a sample implementation
    // In a real app, you would add validation, hash the password, and save to a database
    
    return {
      success: true,
      message: 'User registered successfully',
      user: {
        id: Math.floor(Math.random() * 1000),
        email: signupDto.email,
        name: signupDto.name,
        createdAt: new Date().toISOString()
      }
    };
  }

  getUsers() {
    return {
      success: true,
      count: this.users.length,
      users: this.users
    };
  }
}
