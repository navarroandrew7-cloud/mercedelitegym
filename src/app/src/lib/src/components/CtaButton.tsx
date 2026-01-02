import { BOOKING_URL } from "@/lib/site";

export default function CtaButton() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      className="inline-block rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-soft hover:bg-gray-800"
    >
      Book Your Free 1-on-1 Consultation
    </a>
  );
}
