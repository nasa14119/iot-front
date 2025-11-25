import { FetchError, Registres } from "@types";
import { getEspLastRegistresClient } from "@utils";
import useSWR from "swr";

type Props = {
  inicialValue?: Registres;
  props?: Parameters<typeof useSWR>;
};
const ENV_REFRESH = process.env.NEXT_PUBLIC_SECONDS_SWR_REGISTRE
  ? Number(process.env.NEXT_PUBLIC_SECONDS_SWR_REGISTRE)
  : 10;
const REFRESH_INTERVAL = ENV_REFRESH * 1000;
export const useDayRegistres = (
  inicialValue?: Props["inicialValue"],
  props?: Props["props"]
): [data: Registres | null, isLoading: boolean, error: FetchError] => {
  const { data, isLoading, isValidating, error } = useSWR(
    "api/registres",
    getEspLastRegistresClient,
    {
      refreshInterval: REFRESH_INTERVAL,
      fallbackData: inicialValue,
      ...props,
    }
  );
  return [
    !data || data.length <= 0 ? null : data,
    isLoading || isValidating,
    error as FetchError,
  ];
};
