export enum RequestStatus {
  SUCCESS = 0,
  API_ERROR = -1, // api error
  SERVER_ERROR = -2, // server error (e.g., exception thrown)
  NETWORK_ERROR = -3, // network error (not connected to internet)
  REQUEST_ERROR = -4, // request error something gone wrong locally within app
}
