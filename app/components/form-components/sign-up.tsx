import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/button";


export default function SignUp () {
    return <form>
        <h1>Sign your school up today</h1>
        <div className="flex gap-2">
            <Input>First Name</Input>
            <Input>Last Name</Input>
        </div>
        <div className="flex gap-2">
            <Input>School Name</Input>
            <Input>City/Town</Input>
        </div>
        <div className="flex gap-2">
            <Input>Email</Input>
            <Input>Phone</Input>
        </div>
        <div className="flex gap-2">
            <Input>Number of Participants Expected</Input>
            <Input>Type of Program</Input>
        </div>
        <div className="flex gap-2">
            <Input type="date">Preferred Dates</Input>
            <div>
                <Input type="time">Preferred Times</Input>
                <Input type="time"/>
                <Input type="time"/>
            </div>
        </div>
        <fieldset className="flex">
            <label htmlFor="textarea" className="label">Additional Information</label>
            <textarea id="textarea" className="border border-neutral rounded-box"/>
        </fieldset>
        <Button className="btn-primary">Sign me up!</Button>
    </form>
}
