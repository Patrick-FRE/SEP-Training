import { useLocation } from "react-router-dom";

export default function useQuery() {
  const query = new URLSearchParams(useLocation().search);

  return query.get("query");
}
