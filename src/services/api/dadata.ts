import { selfApi } from "@/api/self";
import { IAddressResponseItem } from "@/types/dadata";

export const fetchAddresses = async (query: string) => {
  const response = await selfApi.post<IAddressResponseItem[]>("/api/dadata", {
    query,
  });

  return response.data;
};
