import Link from "next/link";

export default function PublicSpeaking() {
  return (
    <div className="flex justify-center w-full py-[20%]">
      <div>
        <h3 className="text-center">Form Submitted Successfully.</h3>
        <p className="py-2 text-center">I&apos;ll get back to you shortly!</p>
        <div className="flex justify-center py-8">
          <Link href="/">
            <a>
              <button className="px-3 py-2">Back to Homepage</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
