import { format, parseJSON } from "date-fns";
import locale from "date-fns/locale/pt-BR";

export function formatDate(date: string | number) {
  return format(parseJSON(date), "iii-dd-MM-yyyy", { locale });
}
