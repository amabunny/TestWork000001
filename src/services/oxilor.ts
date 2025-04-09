import { oxilorApi } from "@/api/oxilor";
import { LocationResponse } from "@/types/oxilor";

export const searchRegions = async (searchTerm: string) => {
  const response = await oxilorApi.get<LocationResponse>(
    "/rest/search-regions",
    {
      params: { searchTerm },
    },
  );

  return response.data;
};
