import axios from "axios";

import apiServices from "../config/apiServices";

const mainInstance = axios.create({
  baseURL: apiServices.GATEWAY_CIS,
  timeout: 10000,
});

const broadcastInstance = axios.create({
  baseURL: apiServices.GATEWAY_BROADCAST,
  timeout: 10000,
});

export { mainInstance, broadcastInstance };
