"use client";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import PasswordField from "@/components/PasswordField/PasswordField";
import { LogInFormSchema } from "@/schema/LogInFormValues";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import { LoginFormValues } from "@/types/LoginFormValues";
import { redirect } from "next/navigation";
import useLogin from "@/utils/useLogin";

type formValues = z.infer<typeof LogInFormSchema>;

const LoginForm = () => {
  const methods = useForm<LoginFormValues>({
    mode: "onChange",
    reValidateMode: "onBlur",
    resolver: zodResolver(LogInFormSchema),
  });

  const { mutate, isSuccess, isPending } = useLogin();

  const onSubmit = (data: formValues): void => {
    mutate(data);
    if (isSuccess) {
      redirect("/dashboard");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="px-20 py-18" onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className="mb-3 text-center text-3xl font-extrabold text-blue-500">
          Login
        </h2>

        <InputField fieldName="email" placeholder="Email" />
        <PasswordField
          fieldName="password"
          placeholder="Password"
          type="password"
        />

        <h5 className="text-md mt-4">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-lg text-blue-500"
            onClick={() => redirect("/signup")}
          >
            SignUp
          </span>{" "}
        </h5>

        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          name={isPending ? "Loading..." : "Login"}
        />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
