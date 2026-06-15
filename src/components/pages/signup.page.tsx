import { SignUp } from "@clerk/clerk-react";

export default function SignupPage() {
  return (
    <>
      <SignUp
        fallback={"Loading..."}
        forceRedirectUrl={"/dashboard"}
        signInUrl="/signin"
      />
    </>
  );
}
