export type Video = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  keywords: string | null;
  fileUrl: string | null;
  price: number | null;
  maxViews: number | null;
  isFree: boolean | null;
  category: string | null;
};
