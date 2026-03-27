"use client";
import { useForm, FormProvider  } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import PasswordField from "@/components/PasswordField/PasswordField"; 
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

import { SignUpFormSchema } from "@/schema/SignUpFormValues";
import { SignupFormValues } from "@/types/SignUpFormValues";

type formValues = z.infer<typeof SignUpFormSchema>;

const SignUpForm = () => {

    const methods = useForm<SignupFormValues>({
        mode: "onChange",
        reValidateMode: "onBlur",
        resolver: zodResolver(SignUpFormSchema),
    });

    const onSubmit = (data: formValues): void => {
        console.log(data);
    };


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <InputField fieldName="name" placeholder="Name" type="input"/>
        <InputField fieldName="email" placeholder="Email" />
        <PasswordField fieldName="password" placeholder="Password" type="password"/>

        <Button type="submit" variant="primary" name="Sign Up"/>
      </form>
    </FormProvider>
  )
}

export default SignUpForm