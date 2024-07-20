import { VideoCategory as TVideoCategory } from "../api/videoCategory/VideoCategory";

export const VIDEOCATEGORY_TITLE_FIELD = "id";

export const VideoCategoryTitle = (record: TVideoCategory): string => {
  return record.id?.toString() || String(record.id);
};
