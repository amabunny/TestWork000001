import { dadataApi } from "@/api/dadata";
import { IAddressResponseItem } from "@/types/dadata";

export const fetchAddresses = async (query: string) => {
  const result = await dadataApi.post<IAddressResponseItem[]>(
    "/v1/clean/address",
    [query],
  );

  return result.data;
};
