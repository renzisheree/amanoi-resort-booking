import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function useTokenCookie() {
  const [tokenCookie, setTokenCookie] = useState(null);

  useEffect(() => {
    setTokenCookie(Cookies.get("token"));
  }, []);

  return tokenCookie;
}
