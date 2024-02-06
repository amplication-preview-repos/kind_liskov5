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
import { ConstructionListRelationFilter } from "../../construction/base/ConstructionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class BuildingProjectWhereInput {
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
    type: () => ConstructionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ConstructionListRelationFilter)
  @IsOptional()
  @Field(() => ConstructionListRelationFilter, {
    nullable: true,
  })
  construction?: ConstructionListRelationFilter;

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

export { BuildingProjectWhereInput as BuildingProjectWhereInput };
