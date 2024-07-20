import { UserVideoPurchaseWhereInput } from "./UserVideoPurchaseWhereInput";
import { UserVideoPurchaseOrderByInput } from "./UserVideoPurchaseOrderByInput";

export type UserVideoPurchaseFindManyArgs = {
  where?: UserVideoPurchaseWhereInput;
  orderBy?: Array<UserVideoPurchaseOrderByInput>;
  skip?: number;
  take?: number;
};
