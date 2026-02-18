import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/button";

export default function Home() {
  return (
    <div>
      <form>
          <Input id="first">First Attempt</Input>
          <Input
              id="second"
              type="email"
              required={true}
              placeholder="Sample"
          >
              Email
          </Input>
          <Button className="btn-primary">Click Me</Button>
          <Button className="btn-secondary">Click Me Too!</Button>
      </form>
    </div>
  );
}
