/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Certificate as PrismaCertificate } from "@prisma/client";

export class CertificateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CertificateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.certificate.count(args);
  }

  async certificates(
    args: Prisma.CertificateFindManyArgs
  ): Promise<PrismaCertificate[]> {
    return this.prisma.certificate.findMany(args);
  }
  async certificate(
    args: Prisma.CertificateFindUniqueArgs
  ): Promise<PrismaCertificate | null> {
    return this.prisma.certificate.findUnique(args);
  }
  async createCertificate(
    args: Prisma.CertificateCreateArgs
  ): Promise<PrismaCertificate> {
    return this.prisma.certificate.create(args);
  }
  async updateCertificate(
    args: Prisma.CertificateUpdateArgs
  ): Promise<PrismaCertificate> {
    return this.prisma.certificate.update(args);
  }
  async deleteCertificate(
    args: Prisma.CertificateDeleteArgs
  ): Promise<PrismaCertificate> {
    return this.prisma.certificate.delete(args);
  }
}
