import { PumpRegistre } from "@types";
import { format, parse } from "@formkit/tempo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shad/components/ui/table";

type Props = { data: PumpRegistre };
const Success = ({ success }: { success: PumpRegistre["success"] }) => {
  const className =
    "font-medium rounded-4xl text-sm w-12 my-1 text-center mx-auto text-white";
  return (
    <TableCell>
      {success === "success" && (
        <div className={`${className} bg-green-500`}>bien</div>
      )}
      {success === "error" && (
        <div className={`${className} bg-red-400`}>error</div>
      )}
      {success === "check" && (
        <div className={`${className} bg-blue-400 `}>check</div>
      )}
    </TableCell>
  );
};
export function PumpRow({ data }: Props) {
  if (!data) return null;
  const date = parse(data.stamp);
  return (
    <>
      <Table>
        <TableHeader className="max-w-100%">
          <TableRow className="text-xs sm:text-sm border-blue-200 *:text-center *:px-2">
            <TableHead className="md:w-20">Fecha</TableHead>
            <TableHead className="">
              <span className="flex gap-x-1 flex-wrap items-center justify-center">
                <span>Nivel</span>
                <span>Bomba</span>
              </span>
            </TableHead>
            <TableHead className="">
              <span className="flex gap-x-1 flex-wrap items-center justify-center">
                <span>Humedad</span>
                <span>Tierra</span>
              </span>
            </TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-xs px-1">
              <span className="flex justify-center">
                {format(date, "h:mm:ss a", "en")}
              </span>
            </TableCell>
            <TableCell className="text-center ">{data.new_level}</TableCell>
            <TableCell className="text-center ">{data.soil}</TableCell>
            <Success success={data.success} />
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
