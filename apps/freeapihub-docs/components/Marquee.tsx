import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah J",
    username: "@Sarah",
    body: "FreeAPI Hub makes API integration a breeze",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Daniel K",
    username: "@Daniel",
    body: "10,000+ developers can’t be wrong. Love it!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Chris P",
    username: "@chris",
    body: "Highly recommended for any project!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Emily R",
    username: "@Emily",
    body: "Reliable and easy to use. Great service!",
    img: "https://avatar.vercel.sh/james",
  },
];

const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          width={32}
          height={32}
          alt="Logo"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 text-black">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white text-black">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] mb-6 dark:bg-[#141312] bg-white md:w-[58vw] w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
