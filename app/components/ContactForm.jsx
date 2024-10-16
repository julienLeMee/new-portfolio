"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
});

// Définition du composant ContactForm
export function ContactForm() {
  // Initialisation du formulaire
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Fonction de gestion de soumission
  const onSubmit = (data) => {
    console.log(data); // Gérer la soumission ici
    // Envoi du courriel ou traitement des données
  };

  return (
    <>
      <div className="max-w-[850px] p-3 md:p-6 lg:p-10 flex flex-col">
        <p className="min-w-full pb-1 font-mono text-[13px] uppercase">
          [003. Let's get in touch]
        </p>
        <h1 className="mt-5 break-words text-[30px] font-bold uppercase leading-[0.8] text-white sm:text-[40px] md:mt-8 md:text-5xl 2xl:text-7xl">
          Contact me if you would like us to work{" "}
          <span className="text-[--color-pink]">together.</span>
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="block mt-4 mb-2">Your name</FormLabel> */}
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
                  {/* <FormLabel className=" block mt-4 mb-2">Your email</FormLabel> */}
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
                  {/* <FormLabel className="block mt-4 mb-2">Message</FormLabel> */}
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

            <Button className="w-fit" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
