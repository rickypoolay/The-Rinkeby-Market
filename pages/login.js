import { useRouter } from "next/router";
import LoginCard from "../components/LoginCard";

function Login() {
  const router = useRouter();
  {
    // isAuthenticated && router.push("/");
  }
  return (
    <div className="">
      <section className="flex h-screen justify-center items-center">
        <LoginCard />
      </section>
    </div>
  );
}

export default Login;
