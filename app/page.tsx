import Input from "@/app/components/form-components/Input";

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
      </form>
    </div>
  );
}
