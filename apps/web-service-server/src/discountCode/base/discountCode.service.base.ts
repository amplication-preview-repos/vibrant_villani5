/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DiscountCode as PrismaDiscountCode } from "@prisma/client";

export class DiscountCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiscountCodeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.discountCode.count(args);
  }

  async discountCodes(
    args: Prisma.DiscountCodeFindManyArgs
  ): Promise<PrismaDiscountCode[]> {
    return this.prisma.discountCode.findMany(args);
  }
  async discountCode(
    args: Prisma.DiscountCodeFindUniqueArgs
  ): Promise<PrismaDiscountCode | null> {
    return this.prisma.discountCode.findUnique(args);
  }
  async createDiscountCode(
    args: Prisma.DiscountCodeCreateArgs
  ): Promise<PrismaDiscountCode> {
    return this.prisma.discountCode.create(args);
  }
  async updateDiscountCode(
    args: Prisma.DiscountCodeUpdateArgs
  ): Promise<PrismaDiscountCode> {
    return this.prisma.discountCode.update(args);
  }
  async deleteDiscountCode(
    args: Prisma.DiscountCodeDeleteArgs
  ): Promise<PrismaDiscountCode> {
    return this.prisma.discountCode.delete(args);
  }
}
