"use client";
import { useForm, FormProvider  } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import PasswordField from "@/components/PasswordField/PasswordField"; 
import { LogInFormSchema } from "@/schema/LogInFormValues";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";
import { LoginFormValues } from "@/types/LoginFormValues";

type formValues = z.infer<typeof LogInFormSchema>;

const LoginForm = () => {

    const methods = useForm<LoginFormValues>({
        mode: "onChange",
        reValidateMode: "onBlur",
        resolver: zodResolver(LogInFormSchema),
    });

    const onSubmit = (data: formValues): void => {
        console.log(data);
    };


  return (
    <FormProvider {...methods}>
      <form className="p-10" onSubmit={methods.handleSubmit(onSubmit)}>

        <InputField fieldName="email" placeholder="Email" />
        <PasswordField fieldName="password" placeholder="Password" type="password"/>

        <Button type="submit" variant="primary" name="Login"/>
      </form>
    </FormProvider>
  )
}

export default LoginForm