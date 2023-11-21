import React from "react";
import { ChatIcon, CloseIcon } from "@/components/icons";
import { Popover, PopoverTrigger, PopoverContent, Input, Textarea, Button} from "@nextui-org/react";
import { useForm, ValidationError } from '@formspree/react';

export const Chat = () => {
	const [state, handleSubmit] = useForm("xoqoryke");
	const [isOpen, setIsOpen] = React.useState(false);

	function closePopover() {
		setIsOpen(!isOpen)
	}

	return (
<Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="top-end" showArrow radius="sm" offset={10} backdrop="blur">
<PopoverTrigger>
    <Button isIconOnly color="primary" className="bg-melkorPurple w-14 h-14 pt-[2px] fixed bottom-6 right-6" radius="full"><ChatIcon /></Button>
</PopoverTrigger>
<PopoverContent className="w-96">

    <div className="px-6 py-10 flex flex-col gap-2 w-full">
        <Button isIconOnly onPress={closePopover}><CloseIcon/></Button>
        <form className="space-y-4" onSubmit={handleSubmit} id="popover-form">
            <h2 className="text-xl">Máte dotaz? Neváhejte nám napsat. </h2>
            <label htmlFor="full-name" className="formLabel">Vaše jméno</label>
<input type="text" name="name" id="full-name" placeholder="Karel Novák" required autoComplete="true" className="form-control formInput" />

<label htmlFor="email" className='formLabel'>
Váš e-mail
</label>
<input id="email" type="email" name="email" placeholder="karel.novak@gmail.com" required autoComplete="true" className="form-control formInput" />
<ValidationError prefix="Email" field="email" errors={state.errors} />

<label htmlFor="message" className='formLabel'>S čím vám můžeme poradit?</label>
<textarea className="form-control formText" id="message" name="message" placeholder="Rád bych chtěl probrat jestli Melkor Software poskytuje správné řešení pro náš podnik." required />
<ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button className="w-full bg-melkorPurple text-white" type="submit" disabled={state.submitting}>
                Odeslat
            </Button>
        </form>
                </div>
</PopoverContent>
</Popover>
	);
}
