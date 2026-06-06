import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/Button";

export default function ContactForm() {
    return (
        <form className="w-full flex flex-col">
            <Input>Your Name</Input>
            <Input>Your Email</Input>

            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend pr-2 pb-1 text-left">Your Message</legend>
                <textarea
                    id="contact-form"
                    className="textarea border-base-200 w-full"
                    rows={6}
                />
            </fieldset>

            <Button className="btn-primary w-full mt-2">Send Message</Button>
        </form>
    );
}