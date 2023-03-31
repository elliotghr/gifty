import Access from "../components/Access";
import AccessDenied from "../components/AccessDenied";
import useGlobalFavs from "../hook/useGlobalFavs";
import { useGlobalUser } from "../hook/useGlobalUser";

const Favs = () => {
  const { favs } = useGlobalFavs();
  const { isLoggedIn } = useGlobalUser();

  if (!favs) return;

  const content = isLoggedIn ? Access({ favs }) : AccessDenied();

  return content;
};

export default Favs;
