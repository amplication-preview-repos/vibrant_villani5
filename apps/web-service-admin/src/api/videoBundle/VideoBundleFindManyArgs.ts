import { VideoBundleWhereInput } from "./VideoBundleWhereInput";
import { VideoBundleOrderByInput } from "./VideoBundleOrderByInput";

export type VideoBundleFindManyArgs = {
  where?: VideoBundleWhereInput;
  orderBy?: Array<VideoBundleOrderByInput>;
  skip?: number;
  take?: number;
};
