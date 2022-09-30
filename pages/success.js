import Link from "next/link";

export default function PublicSpeaking() {
  return (
    <div className="flex justify-center w-full py-[20%]">
      <div>
        <h3 className="text-center">Form Submitted Successfully.</h3>
        <p className="py-2 text-center">I'll get back to you shortly!</p>
        <div className="flex justify-center py-4">
          <Link href="/">
            <a>
              <button className="p-4">Back to Homepage</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}