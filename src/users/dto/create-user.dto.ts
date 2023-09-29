import {
  IsString,
  IsBoolean,
  MinLength,
  IsPositive,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsNumber()
  @IsPositive()
  age: number;

  @IsString()
  @MinLength(10)
  password: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
