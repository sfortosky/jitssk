import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/Button";

export default function ContactForm() {
    return <form>
        <Input>Your Name</Input>
        <Input>Your Email</Input>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Message</legend>
            <textarea id="contact-form" className="textarea border-base-200" rows={6} cols={40}/>
        </fieldset>
        <Button className="btn-primary">Send Message</Button>
    </form>
}