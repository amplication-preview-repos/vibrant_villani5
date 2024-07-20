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
import { UserAffiliateClickWhereInput } from "./UserAffiliateClickWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserAffiliateClickOrderByInput } from "./UserAffiliateClickOrderByInput";

@ArgsType()
class UserAffiliateClickFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserAffiliateClickWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserAffiliateClickWhereInput, { nullable: true })
  @Type(() => UserAffiliateClickWhereInput)
  where?: UserAffiliateClickWhereInput;

  @ApiProperty({
    required: false,
    type: [UserAffiliateClickOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserAffiliateClickOrderByInput], { nullable: true })
  @Type(() => UserAffiliateClickOrderByInput)
  orderBy?: Array<UserAffiliateClickOrderByInput>;

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

export { UserAffiliateClickFindManyArgs as UserAffiliateClickFindManyArgs };
