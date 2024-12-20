import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import i18next from "i18next";
import { useSearchParams } from "react-router-dom";

export default function useGetProjects() {
  const lang = i18next.language;
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["projects", lang, category],

    queryFn: async () => {
      const res = await axiosInstance.get(`/get_projects?category_id=${category}`);
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
