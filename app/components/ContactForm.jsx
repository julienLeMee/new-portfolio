"use client";

import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Définition du schéma de validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  recaptcha: z.string().nonempty({
    message: "Please complete the reCAPTCHA",
  }),
});

// Définition du composant ContactForm
export function ContactForm() {
  // État pour gérer le message de notification
  const [notification, setNotification] = useState("");

  // Initialisation du formulaire
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const recaptchaRef = useRef();

  // Fonction de gestion de soumission
  const onSubmit = async (data) => {
    const recaptchaValue = data.recaptcha; // Récupère la valeur du reCAPTCHA

    try {
      // Vérifiez le reCAPTCHA via votre API
      const recaptchaResponse = await fetch("/api/verifyRecaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recaptchaResponse: recaptchaValue }),
      });

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        console.error(
          "reCAPTCHA verification failed:",
          recaptchaData.errorCodes
        );
        return;
      }

      // Envoi de l'email si reCAPTCHA est validé
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setNotification("Your message has been sent successfully!"); // Notification d'envoi réussi
        form.reset(); // Réinitialise le formulaire
        recaptchaRef.current.reset(); // Réinitialise le reCAPTCHA
      } else {
        console.error("Failed to send email");
        setNotification("Failed to send your message. Please try again."); // Notification d'erreur
      }
    } catch (error) {
      console.error("An error occurred", error);
      setNotification("An error occurred. Please try again."); // Notification d'erreur
    }
  };

  return (
    <>
      <div
        id="#lets-get-in-touch"
        className="max-w-screen-sm p-3 md:p-6 lg:p-10 flex flex-col text-center mx-auto mt-32"
      >
        <p className="min-w-full pb-1 font-mono text-[13px] uppercase">
          [003. Let's get in touch]
        </p>
        <h1 className="mt-5 break-words text-[30px] font-bold uppercase leading-[0.8] dark:text-white text-[--color-dark-text] sm:text-[40px] md:mt-8 md:text-5xl 2xl:text-7xl">
          Contact me if you would like us to work{" "}
          <span className="text-[--color-pink]">together.</span>
        </h1>

        {/* Affichage de la notification */}
        {notification && (
          <div className="my-4 p-2 bg-green-200 text-green-800 rounded-md">
            {notification}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      placeholder="Your message here..."
                      {...field}
                      className="resize-none w-full border p-2 rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ajout du reCAPTCHA */}
            <div className="my-4 flex justify-center recaptcha__wrapper">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Utilisation de la clé d'environnement
                onChange={(value) => form.setValue("recaptcha", value)} // Enregistre la valeur du CAPTCHA
                theme="dark"
              />
              <FormMessage name="recaptcha" />
            </div>

            <Button className="w-fit" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
