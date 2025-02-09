export interface AllMemesInterface {
  success: boolean;
  data: DataInterface;
}

export interface DataInterface {
  memes: MemeInterface[];
}

export interface MemeInterface {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  captions: number;
}
