import { Module } from "@nestjs/common";
import { ProfileModule } from "./profile/profile.module";
import { VideoModule } from "./video/video.module";
import { VideoBundleModule } from "./videoBundle/videoBundle.module";
import { UserAffiliateClickModule } from "./userAffiliateClick/userAffiliateClick.module";
import { UserVideoPurchaseModule } from "./userVideoPurchase/userVideoPurchase.module";
import { VideoCategoryModule } from "./videoCategory/videoCategory.module";
import { TransactionModule } from "./transaction/transaction.module";
import { DiscountCodeModule } from "./discountCode/discountCode.module";
import { CertificateModule } from "./certificate/certificate.module";
import { UserCertificateModule } from "./userCertificate/userCertificate.module";
import { QuizModule } from "./quiz/quiz.module";
import { QuizResultModule } from "./quizResult/quizResult.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ProfileModule,
    VideoModule,
    VideoBundleModule,
    UserAffiliateClickModule,
    UserVideoPurchaseModule,
    VideoCategoryModule,
    TransactionModule,
    DiscountCodeModule,
    CertificateModule,
    UserCertificateModule,
    QuizModule,
    QuizResultModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
