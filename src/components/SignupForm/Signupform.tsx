"use client";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import PasswordField from "@/components/PasswordField/PasswordField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

import { SignUpFormSchema } from "@/schema/SignUpFormValues";
import { SignupFormValues } from "@/types/SignUpFormValues";
import { redirect } from "next/navigation";
import useSignUp from "@/utils/useSignUp";

type formValues = z.infer<typeof SignUpFormSchema>;

const SignUpForm = () => {
  const methods = useForm<SignupFormValues>({
    mode: "onChange",
    reValidateMode: "onBlur",
    resolver: zodResolver(SignUpFormSchema),
  });

  const { mutate, isSuccess, isPending } = useSignUp();

  const onSubmit = (data: formValues): void => {
    mutate(data);
    if (isSuccess) {
      redirect("/dashboard");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="overflow-hidden p-6 px-24"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2 className="mb-3 text-center text-3xl font-extrabold text-blue-500">
          SignUp
        </h2>

        <InputField fieldName="fullName" placeholder="Name" type="input" />
        <InputField fieldName="email" placeholder="Email" />
        <PasswordField
          fieldName="password"
          placeholder="Password"
          type="password"
        />
        <PasswordField
          fieldName="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />

        <h5 className="text-md mt-4">
          Already have a account?{" "}
          <span
            className="cursor-pointer text-lg text-blue-500"
            onClick={() => redirect("/login")}
          >
            Login
          </span>{" "}
        </h5>

        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          name={isPending ? "Loading..." : "SignUp"}
        />
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
