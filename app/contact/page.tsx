const contacts = [
  { label: "Email", value: "hello@example.com" },
  { label: "Instagram", value: "@kevin.visual.journal" },
  { label: "小红书", value: "Kevin Visual Journal" },
  { label: "微信", value: "WeChat ID placeholder" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
      <h1 className="mt-4 font-serif text-5xl leading-none text-ink sm:text-7xl">
        联系
      </h1>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="grid gap-3 py-6 sm:grid-cols-[160px_1fr]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              {contact.label}
            </p>
            <p className="font-serif text-3xl text-ink">{contact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
