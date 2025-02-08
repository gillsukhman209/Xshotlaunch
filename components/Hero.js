import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import ButtonSignin from "./ButtonSignin";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Hero = () => {
  const { data: session } = useSession();
  return (
    <section className="max-w-5xl lg:mt-[-150px] mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center   px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start ">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 mt-20">
          Turn Posts into
          <span className="block">Stunning Screenshots.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Easily capture and customize high-quality screenshots of Instagram and
          Twitter posts. Add themes, remove watermarks, and make your content
          stand out.
        </p>

        {session && session.user ? (
          <Link href="/#pricing" className="btn btn-primary w-full">
            Get Started
          </Link>
        ) : (
          <ButtonSignin extraStyle={"btn-primary"} text="Get Started" />
        )}

        <TestimonialsAvatars priority={true} />
      </div>
      <div
        style={{
          position: "relative",
          paddingBottom: "100%",

          height: 0,
          width: "100%",
        }}
      >
        <iframe
          src="https://demo.arcade.software/J9XcAbMcqiAWTu8a5sms?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
          title="XShot"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          allow="clipboard-write"
          style={{
            position: "absolute",

            width: "100%",
            height: "100%",
            colorScheme: "light",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
