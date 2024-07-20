import { VideoBundle as TVideoBundle } from "../api/videoBundle/VideoBundle";

export const VIDEOBUNDLE_TITLE_FIELD = "title";

export const VideoBundleTitle = (record: TVideoBundle): string => {
  return record.title?.toString() || String(record.id);
};
