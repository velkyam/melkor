import { useForm, ValidationError } from "@formspree/react";
import { Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xoqoryke");

  if (state.succeeded) {
    return <p>Děkujeme za dotaz. Brzy se vám ozveme!</p>;
  }

  return (
    <Card isBlurred className="w-full lg:max-w-lg px-6 py-10 dark:border dark:border-slate-700 ">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Máte dotaz? Neváhejte nám napsat. </h2>
        <p className="text-lg mb-6"> Potřebujeme jen pár rychlých údajů. </p>
        <label htmlFor="full-name" className="mb-2">Vaše jméno</label>
        <input className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 px-2 rounded-md  bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none hover:border-slate-500 active:border-slate-900 focus:border-slate-900 dark:hover:border-slate-400 dark:active:border-slate-200 dark:focus:border-slate-200" type="text" name="name" id="full-name" placeholder="Karel Novák" required autoComplete="true" />
        <label htmlFor="email" className='mb-2 mt-4'>
          Váš e-mail
        </label>
        <input className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 px-2 rounded-md bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none hover:border-slate-500 active:border-slate-900 focus:border-slate-900 dark:hover:border-slate-400 dark:active:border-slate-200 dark:focus:border-slate-200" id="email" type="email" name="email" placeholder="karel.novak@gmail.com" required autoComplete="true" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className='mb-2 mt-4'>S čím vám můžeme poradit?</label>
        <textarea className="w-full border-2 border-slate-200 dark:border-slate-700 py-2 pb-12 mb-6 px-2 rounded-md bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none hover:border-slate-500 active:border-slate-900 focus:border-slate-900 dark:hover:border-slate-400 dark:active:border-slate-200 dark:focus:border-slate-200" id="message" name="message" placeholder="Rád bych se dozvěděl, co může Melkor Software udělat pro náš podnik." required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <Button className="w-full bg-melkorPurple text-white" type="submit" disabled={state.submitting}>
          Odeslat
        </Button>
      </form>
    </Card>
  );
}
