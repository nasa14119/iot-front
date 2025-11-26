import { FetchError, Registre } from "@types";
import { getEspLastRegistreClient } from "@utils";
import useSWR from "swr";

type Props = {
  incial_state?: Registre;
  swr_props?: Parameters<typeof useSWR>;
};
const ENV_REFRESH = process.env.NEXT_PUBLIC_SECONDS_SWR_REGISTRE
  ? Number(process.env.NEXT_PUBLIC_SECONDS_SWR_REGISTRE)
  : 10;
const REFRESH_INTERVAL = ENV_REFRESH * 1000;
export const useCurrentRegistre = (
  inicialState?: Props["incial_state"],
  props?: Props["swr_props"]
): [data: Registre | null, isLoading: boolean, error: FetchError] => {
  const { data, isLoading, isValidating, error } = useSWR(
    "api/registre",
    getEspLastRegistreClient,
    {
      refreshInterval: REFRESH_INTERVAL,
      fallbackData: inicialState,
      compare(prev, next) {
        if (!next || "status" in next) return true;
        if (!prev || "status" in prev) return false;
        return prev["date"] === next["date"];
      },
      ...props,
    }
  );
  return [!data ? null : data, isLoading || isValidating, error as FetchError];
};
