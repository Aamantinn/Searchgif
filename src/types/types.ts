export interface IGif {
    id: string;
    title: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
  }
  
  export interface IGiphyResponse {
    data: IGif[];
    pagination: {
      total_count: number;
      count: number;
      offset: number;
    };
    meta: {
      status: number;
      msg: string;
      response_id: string;
    };
  }
  