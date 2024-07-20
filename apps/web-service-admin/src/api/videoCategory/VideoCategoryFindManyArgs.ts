import { VideoCategoryWhereInput } from "./VideoCategoryWhereInput";
import { VideoCategoryOrderByInput } from "./VideoCategoryOrderByInput";

export type VideoCategoryFindManyArgs = {
  where?: VideoCategoryWhereInput;
  orderBy?: Array<VideoCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
