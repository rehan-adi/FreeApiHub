import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Feedback() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-[#1E1C1B] mb-10 md:w-[96%] w-[92%] py-10 border md:px-8 px-4">
      <h2 className="mb-6 text-lg/[1.1] font-medium text-foreground md:text-xl/[1.1]">
        Give us Feedback for more improvement
      </h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex gap-2">
            <Input
              id="subscribe-form"
              className="flex-1 border-zinc-600/65 text-zinc-100 placeholder:text-zinc-500 md:min-w-64"
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
