export default function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
        {children}
      </div>
    </section>
  );
}
