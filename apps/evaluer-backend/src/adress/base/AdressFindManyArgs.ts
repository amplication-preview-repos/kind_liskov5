/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdressWhereInput } from "./AdressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdressOrderByInput } from "./AdressOrderByInput";

@ArgsType()
class AdressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdressWhereInput, { nullable: true })
  @Type(() => AdressWhereInput)
  where?: AdressWhereInput;

  @ApiProperty({
    required: false,
    type: [AdressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdressOrderByInput], { nullable: true })
  @Type(() => AdressOrderByInput)
  orderBy?: Array<AdressOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdressFindManyArgs as AdressFindManyArgs };
