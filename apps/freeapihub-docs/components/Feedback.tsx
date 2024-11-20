import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Feedback() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-[#1E1C1B] px-4 mb-10 md:w-[60%] w-[90%] py-10 border sm:px-8">
      <h2 className="mb-6 text-xl/[1.1] font-bold tracking-wide text-foreground md:text-2xl/[1.1]">
        Give us Feedback for more improvement .
      </h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex gap-2">
            <Input
              id="subscribe-form"
              className="flex-1 border-zinc-600/65 bg-zinc-700/30 text-zinc-100 placeholder:text-zinc-500 md:min-w-64 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s]"
              placeholder="Your Feedback"
              type="text"
              required
            />
            <Button type="submit" className="group relative">
              <span className="group-data-[loading=true]:text-transparent">
                Submit{" "}
                <span className="-mr-1 tracking-normal opacity-50">-&gt;</span>
              </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
