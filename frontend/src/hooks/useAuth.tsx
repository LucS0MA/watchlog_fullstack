import { useCallback } from "react";
import { useAccountStore } from "../store/store";
import axios from "axios";

export function useAuth() {
  const { account, initialized, setAccount, setInitialized } = useAccountStore();

  const authenticate = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/me", {
        withCredentials: true,
      });

      setAccount(response.data);
      console.log(account)
    } catch {
      setAccount(null);
    } finally {
      setInitialized(true);
    }
  }, [setAccount, setInitialized, account]);

  let status;

  if (!initialized) {
    status = "unknown";
  } else if (account) {
    status = "authenticated";
  } else {
    status = "unauthenticated";
  }

  return { account, status, authenticate };
}