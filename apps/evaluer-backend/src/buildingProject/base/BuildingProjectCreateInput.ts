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
import { ConstructionCreateNestedManyWithoutBuildingProjectsInput } from "./ConstructionCreateNestedManyWithoutBuildingProjectsInput";

@InputType()
class BuildingProjectCreateInput {
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
  adress?: AdressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ConstructionCreateNestedManyWithoutBuildingProjectsInput,
  })
  @ValidateNested()
  @Type(() => ConstructionCreateNestedManyWithoutBuildingProjectsInput)
  @IsOptional()
  @Field(() => ConstructionCreateNestedManyWithoutBuildingProjectsInput, {
    nullable: true,
  })
  construction?: ConstructionCreateNestedManyWithoutBuildingProjectsInput;
}

export { BuildingProjectCreateInput as BuildingProjectCreateInput };
