import SectionTitle from "@/components/SectionTitle";

const contacts = [
  { label: "Email", value: "hello@example.com" },
  { label: "Instagram", value: "@kevin.visual.journal" },
  { label: "小红书", value: "Kevin 影像日志" },
  { label: "微信", value: "WeChat ID placeholder" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <SectionTitle
        eyebrow="Contact"
        title="Keep a quiet line open."
        description="这里先放占位联系方式，后续可以替换成真实邮箱、社交媒体或合作入口。"
      />

      <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div
          className="min-h-[420px] bg-fog bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/placeholder-4.jpg')" }}
          aria-label="Contact placeholder"
        />

        <div className="divide-y divide-line">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="grid gap-3 py-6 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                {contact.label}
              </p>
              <p className="font-serif text-3xl text-ink">{contact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
