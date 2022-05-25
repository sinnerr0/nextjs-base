import { QueryClient, QueryFunction } from "react-query";
import { CLIENT } from "../constants";

export function setClientData(key: CLIENT, updater: QueryFunction, queryClient: QueryClient) {
  queryClient.fetchQuery(key, updater, { cacheTime: Infinity, staleTime: Infinity });
}

export function getClientData<T>(key: CLIENT, queryClient: QueryClient) {
  return queryClient.getQueryData<T>(key);
}

export function removeClientData(key: CLIENT, queryClient: QueryClient) {
  queryClient.removeQueries(key);
}

export function clearClientData(queryClient: QueryClient) {
  queryClient.clear();
}
