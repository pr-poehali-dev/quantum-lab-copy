import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/44e6e2a1-a94b-4514-916e-e403e8014c0b/files/fbbd1826-d31f-4cf2-a285-c91cb274645b.jpg";

const services = [
  {
    icon: "Cpu",
    tag: "01",
    title: "Системная разработка",
    desc: "Проектируем и создаём надёжные программные системы — от архитектуры до финального деплоя. Работаем с высоконагруженными сервисами и распределёнными вычислениями.",
    techs: ["C++", "Rust", "Go", "Linux"],
  },
  {
    icon: "Brain",
    tag: "02",
    title: "Машинное обучение",
    desc: "Разрабатываем ML-модели и нейросети под конкретные бизнес-задачи: классификация, прогнозирование, компьютерное зрение, NLP.",
    techs: ["PyTorch", "TensorFlow", "CUDA", "Python"],
  },
  {
    icon: "Globe",
    tag: "03",
    title: "Веб-платформы",
    desc: "Создаём современные веб-приложения и API с фокусом на скорость и масштабируемость. От одностраничных SPA до сложных enterprise-систем.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    icon: "Shield",
    tag: "04",
    title: "Кибербезопасность",
    desc: "Анализируем и устраняем уязвимости, проводим аудит кода, строим защищённые инфраструктуры. Пентест, SOC, DevSecOps.",
    techs: ["Red Team", "SIEM", "Zero Trust", "PKI"],
  },
  {
    icon: "Layers",
    tag: "05",
    title: "Облачная инфраструктура",
    desc: "Проектируем облачные решения и контейнерные среды. Автоматизируем CI/CD, настраиваем мониторинг и управляем инфраструктурой как кодом.",
    techs: ["Kubernetes", "Docker", "Terraform", "AWS"],
  },
  {
    icon: "Zap",
    tag: "06",
    title: "Embedded & IoT",
    desc: "Разрабатываем прошивки и системы для встроенных устройств. Протоколы связи, RTOS, сенсорные сети и промышленная автоматизация.",
    techs: ["ARM", "RTOS", "MQTT", "C"],
  },
];

const stats = [
  { value: "12+", label: "лет опыта" },
  { value: "200+", label: "проектов" },
  { value: "40+", label: "специалистов" },
  { value: "98%", label: "клиентов возвращаются" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white font-ibm overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080c14]/95 backdrop-blur-md border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#00d4ff]/15 border border-[#00d4ff]/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-[#00d4ff]" />
            </div>
            <span className="font-golos font-700 text-lg tracking-tight">Quantum Lab</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["hero", "Главная"], ["services", "Услуги"], ["about", "О нас"], ["contact", "Контакт"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm transition-colors ${activeNav === id ? "text-[#00d4ff]" : "text-white/50 hover:text-white"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded border border-[#00d4ff]/40 text-[#00d4ff] text-sm hover:bg-[#00d4ff]/10 transition-colors"
          >
            Написать нам
          </button>

          <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0d1420] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {[["hero", "Главная"], ["services", "Услуги"], ["about", "О нас"], ["contact", "Контакт"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-white/70 hover:text-white text-sm py-1">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/60 via-transparent to-[#080c14]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              Инновационная лаборатория · Основана в 2012
            </div>

            <h1 className="font-golos text-5xl md:text-7xl font-900 leading-[1.05] tracking-tight mb-6">
              Технологии,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0066ff]">
                меняющие
              </span>{" "}
              реальность
            </h1>

            <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Разрабатываем сложные программные системы, ИИ-решения и облачные платформы для компаний, которые хотят быть впереди.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 px-6 py-3 rounded bg-[#00d4ff] text-[#080c14] font-600 text-sm hover:bg-[#00b8e6] transition-colors"
              >
                Наши услуги
                <Icon name="ArrowRight" size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded border border-white/20 text-white/80 text-sm hover:border-white/40 hover:text-white transition-colors"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* STATS */}
      <section id="about" className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-golos text-4xl md:text-5xl font-900 text-[#00d4ff] mb-2">{s.value}</div>
              <div className="text-white/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-[#00d4ff] font-mono text-xs tracking-widest uppercase mb-4">/ Направления</div>
            <h2 className="font-golos text-4xl md:text-5xl font-900 tracking-tight max-w-lg">
              Что мы делаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s) => (
              <div
                key={s.tag}
                className="group bg-[#080c14] p-8 hover:bg-[#0d1420] transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/0 to-transparent group-hover:via-[#00d4ff]/40 transition-all duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center group-hover:border-[#00d4ff]/30 transition-colors">
                    <Icon name={s.icon} size={18} className="text-white/50 group-hover:text-[#00d4ff] transition-colors" />
                  </div>
                  <span className="font-mono text-white/20 text-xs">{s.tag}</span>
                </div>

                <h3 className="font-golos font-700 text-lg mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.techs.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-white/40 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#0066ff]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/4 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#00d4ff] font-mono text-xs tracking-widest uppercase mb-6">/ Контакт</div>
          <h2 className="font-golos text-4xl md:text-6xl font-900 tracking-tight mb-6">
            Готовы начать<br />новый проект?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Расскажите нам о своей задаче — мы ответим в течение одного рабочего дня.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@quantumlab.ru"
              className="flex items-center gap-2 px-8 py-4 rounded bg-[#00d4ff] text-[#080c14] font-600 hover:bg-[#00b8e6] transition-colors"
            >
              <Icon name="Mail" size={18} />
              hello@quantumlab.ru
            </a>
            <a
              href="tel:+74951234567"
              className="flex items-center gap-2 px-8 py-4 rounded border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <Icon name="Phone" size={18} />
              +7 495 123-45-67
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#00d4ff]/15 border border-[#00d4ff]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-[#00d4ff]" />
            </div>
            <span className="font-golos font-700 text-sm">Quantum Lab</span>
          </div>
          <p className="text-white/25 text-xs font-mono">© 2024 Quantum Innovation Laboratory. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/70 text-xs transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
