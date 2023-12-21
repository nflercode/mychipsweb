import Error from "./error";

type Action = {
  type: string;
  payload?: any;
  authToken?: string;
  refreshToken?: string;
  chips?: Array<any>;
  error?: Error;
  message?: string;
  errorType?: string;
  table?: any;
  player?: any;
  name?: string;
  playerId?: number;
  id?: string;
  players?: Array<any>;
  game?: any;
  
};

export default Action;