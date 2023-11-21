import { useForm, ValidationError } from "@formspree/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { title } from "@/components/primitives"
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xoqoryke");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Card isBlurred className="py-10 px-10 dark:border dark:border-slate-700">
      <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-3xl">Máte dotaz? Neváhejte nám napsat. </h2>
        <label htmlFor="full-name" className="">Vaše jméno</label>
        <input className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 px-2 rounded-md font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none" type="text" name="name" id="full-name" placeholder="Karel Novák" required autoComplete="true" />
        <label htmlFor="email" className=''>
          Váš e-mail
        </label>
        <input className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 px-2 rounded-md font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none" id="email" type="email" name="email" placeholder="karel.novak@gmail.com" required autoComplete="true" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className=''>S čím vám můžeme poradit?</label>
        <textarea className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 px-2 rounded-md font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none" id="message" name="message" placeholder="Rád bych se dozvěděl, co může Melkor Software udělat pro náš podnik." required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <Button className="w-full" type="submit" disabled={state.submitting}>
          Odeslat
        </Button>
      </form>
    </Card>
  );
}
