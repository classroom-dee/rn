import useSignOut from "../hooks/useSignOut"
import { useNavigate } from "react-router-native"
import { useRef, useEffect } from "react"

const SignOut = () => {
  const signout = useSignOut();
  const nav = useNavigate();
  const runRef = useRef(false);
  
  useEffect(() => {
    if (runRef.current) return;
    runRef.current = true;

    (async () => {
      await signout();
      nav('/', { replace: true })
    })();

  }, [signout, nav])

  return null
}

export default SignOut