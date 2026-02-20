import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/Button";

export default function ContactForm() {
    return <form>
        <Input>Your Name</Input>
        <Input>Your Email</Input>
        <fieldset className="flex flex-wrap pt-1 pb-2">
            <label htmlFor="contact-form" className="label">Your Message</label>
            <textarea id="contact-form" className="textarea border-neutral"/>
        </fieldset>
        <Button className="btn-primary">Send Message</Button>
    </form>
}