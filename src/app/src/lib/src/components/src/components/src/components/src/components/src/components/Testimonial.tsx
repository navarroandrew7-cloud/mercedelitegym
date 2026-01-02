export default function Testimonial({ quote }: { quote: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-soft">
      “{quote}”
    </div>
  );
}
