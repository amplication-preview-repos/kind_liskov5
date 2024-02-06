/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdressWhereUniqueInput } from "../../adress/base/AdressWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BuildingProjectWhereUniqueInput } from "../../buildingProject/base/BuildingProjectWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ConstructionWhereInput {
  @ApiProperty({
    required: false,
    type: () => AdressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdressWhereUniqueInput)
  @IsOptional()
  @Field(() => AdressWhereUniqueInput, {
    nullable: true,
  })
  adress?: AdressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BuildingProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => BuildingProjectWhereUniqueInput, {
    nullable: true,
  })
  buildingProjects?: BuildingProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { ConstructionWhereInput as ConstructionWhereInput };
