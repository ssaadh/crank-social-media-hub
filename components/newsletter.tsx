import { HeadingH6 } from "./typography";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const Newsletter = () => {
  const url = "TODO-NEWSLETTER";
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <div>
      <HeadingH6>buddyhead world domination newsletter</HeadingH6>
      <form
        className="flex flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <Input
          id="EMAIL"
          className="flex-auto w-auto border-e-0"
          type="email"
          placeholder="Give us your email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
        />
        <Button variant="outline" type="submit">
          Sign Up
        </Button>
      </form>
      {loading && "submitting"}
      {error && message}
      {success && message}
    </div>
  );
};

export default Newsletter;
