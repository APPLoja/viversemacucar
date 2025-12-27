import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";

/**
 * Página completa (landing) em React.
 * Paleta extraída da logo (aproximação):
 *  - Verde:   #4b8d15 / #81b024
 *  - Azul:    #0b4d89 / #6aaaca
 *  - Laranja: #f6a519
 *  - Vermelho:#e13c0c
 *  - Ciano:   #c3e4e8
 *  - Areia:   #d6cb81
 *
 * Como usar:
 * 1) Coloque a logo em /public/logo-viver-sem-acucar.png
 * 2) Renderize este componente como sua página inicial.
 */

export default function ViverSemAcucarLanding() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    interesse: "Saúde (Desafio 7 dias)",
  });

  const brand = useMemo(
    () => ({
      green: "#4b8d15",
      lime: "#81b024",
      blue: "#0b4d89",
      sky: "#6aaaca",
      cyan: "#c3e4e8",
      orange: "#f6a519",
      red: "#e13c0c",
      sand: "#d6cb81",
      ink: "#0b1220",
      surface: "#ffffff",
    }),
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  function onSubmit(e) {
    e.preventDefault();
    // Aqui você pode integrar com API, WhatsApp, Google Sheets, CRM etc.
    alert(
      `Cadastro recebido!\n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nCidade: ${form.cidade}\nInteresse: ${form.interesse}`
    );
  }

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{
        ["--brand-green"]: brand.green,
        ["--brand-lime"]: brand.lime,
        ["--brand-blue"]: brand.blue,
        ["--brand-sky"]: brand.sky,
        ["--brand-cyan"]: brand.cyan,
        ["--brand-orange"]: brand.orange,
        ["--brand-red"]: brand.red,
        ["--brand-sand"]: brand.sand,
        ["--brand-ink"]: brand.ink,
      }}
    >
      {/* Background decor */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--brand-cyan), transparent 60%), radial-gradient(circle at 60% 60%, var(--brand-sky), transparent 55%), radial-gradient(circle at 40% 80%, var(--brand-lime), transparent 60%)",
          }}
        />
        <div className="absolute -bottom-48 right-[-140px] h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 35% 40%, var(--brand-orange), transparent 55%), radial-gradient(circle at 55% 70%, var(--brand-green), transparent 60%)",
          }}
        />
      </div>

      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo-viver-sem-acucar.png"
              alt="Viver sem Açúcar"
              className="h-10 w-10 rounded-xl object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                Viver sem Açúcar
              </div>
              <div className="text-xs text-slate-500">
                Saúde prática + renda com produtos naturais (sem estoque)
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#como-funciona">
              Como funciona
            </a>
            <a className="hover:text-slate-900" href="#desafio">
              Desafio 7 dias
            </a>
            <a className="hover:text-slate-900" href="#app">
              Aplicativo
            </a>
            <a className="hover:text-slate-900" href="#revenda">
              Revenda
            </a>
            <a className="hover:text-slate-900" href="#contato">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#desafio"
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 md:inline-flex"
            >
              Ver conteúdo
            </a>
            <a
              href="#inscricao"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-green), var(--brand-blue))",
              }}
            >
              Entrar na lista <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <Sparkles className="h-4 w-4" style={{ color: "var(--brand-orange)" }} />
              Conteúdo diário: hábitos, receitas e desafios
              <span
                className="ml-1 rounded-full px-2 py-0.5 text-[11px] font-semibold text-white"
                style={{ backgroundColor: "var(--brand-red)" }}
              >
                sem radicalismo
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Viva com mais energia{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--brand-green), var(--brand-blue))",
                }}
              >
                sem açúcar
              </span>{" "}
              no dia a dia.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Aprenda trocas simples, descubra receitas rápidas e participe de desafios guiados.
              E, para quem quiser gerar renda, vamos lançar um aplicativo de{" "}
              <span className="font-semibold text-slate-800">
                revenda de produtos naturais sem estoque
              </span>{" "}
              (modelo semelhante à Cacau Show, porém natural).
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#desafio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-green), var(--brand-lime))",
                }}
              >
                Quero o Desafio 7 dias <CheckCircle2 className="h-4 w-4" />
              </a>

              <a
                href="#revenda"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Quero revender sem estoque <ShoppingBag className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <MiniStat
                icon={<Leaf className="h-4 w-4" />}
                title="Hábitos"
                desc="Rotina prática, sem culpa"
              />
              <MiniStat
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Rótulos"
                desc="Açúcar escondido, na lata"
              />
              <MiniStat
                icon={<Users className="h-4 w-4" />}
                title="Comunidade"
                desc="Desafios e suporte"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div
                className="p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(195,228,232,0.55), rgba(255,255,255,0.9))",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Seu painel saudável
                  </div>
                  <span
                    className="rounded-full px-2 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: "var(--brand-blue)" }}
                  >
                    Beta
                  </span>
                </div>

                <div className="mt-4 grid gap-3">
                  <CardRow
                    title="Desafio 7 dias"
                    tag="Comece aqui"
                    tagColor="var(--brand-orange)"
                    value="Checklist + lista de compras"
                  />
                  <CardRow
                    title="Receitas sem açúcar"
                    tag="Rápidas"
                    tagColor="var(--brand-green)"
                    value="Doces e lanches em minutos"
                  />
                  <CardRow
                    title="Renda sem estoque"
                    tag="Em breve"
                    tagColor="var(--brand-red)"
                    value="Catálogo + comissão + entrega"
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-700">
                    Como a revenda funciona (resumo)
                  </div>
                  <ol className="mt-2 space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
                      Você divulga com seu link/catálogo.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-orange)" }} />
                      O cliente faz o pedido pelo app.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                      A operação entrega. Você recebe comissão.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-3xl opacity-20 blur-2xl"
              style={{ backgroundColor: "var(--brand-orange)" }}
            />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-3xl opacity-15 blur-2xl"
              style={{ backgroundColor: "var(--brand-blue)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <SectionTitle
          eyebrow="Modelo operacional"
          title="Conteúdo que transforma hábitos. App que transforma indicação em renda."
          subtitle="O canal inspira saúde; o aplicativo conecta produtos naturais a revendedores e lojistas, sem exigir estoque."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Leaf className="h-5 w-5" />}
            title="Saúde prática"
            desc="Desafios, receitas e leitura de rótulos para reduzir açúcar com consistência."
            accent="var(--brand-green)"
          />
          <FeatureCard
            icon={<ShoppingBag className="h-5 w-5" />}
            title="Revenda sem estoque"
            desc="Você vende pelo catálogo digital. O pedido é separado e entregue pela operação."
            accent="var(--brand-orange)"
          />
          <FeatureCard
            icon={<Truck className="h-5 w-5" />}
            title="Entrega e rastreio"
            desc="Status de pedido, disponibilidade e logística organizada para evitar venda sem estoque."
            accent="var(--brand-blue)"
          />
        </div>
      </section>

      {/* Desafio */}
      <section id="desafio" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: "var(--brand-green)" }}
              >
                <CheckCircle2 className="h-4 w-4" />
                Desafio 7 dias sem açúcar
              </div>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Um começo claro, simples e guiado.
              </h2>
              <p className="mt-3 text-slate-600">
                Checklist diário, lista de compras e trocas inteligentes para cortar o açúcar do básico
                sem “dietas malucas”.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <Bullet text="Lista de compras e substituições comuns" />
                <Bullet text="Receitas rápidas e lanches sem açúcar" />
                <Bullet text="Guia de rótulos: como identificar açúcar escondido" />
                <Bullet text="Rotina para controlar vontade de doce à noite" />
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#inscricao"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-green), var(--brand-blue))",
                  }}
                >
                  Quero entrar na lista <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Ver dúvidas frequentes
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
              <div className="text-sm font-semibold text-slate-900">
                Roteiro do desafio
              </div>
              <div className="mt-4 space-y-3">
                <StepLine day="Dia 1" text="Mapeie seus gatilhos (rotina e horários)" color="var(--brand-orange)" />
                <StepLine day="Dia 2" text="Trocas do café da manhã" color="var(--brand-green)" />
                <StepLine day="Dia 3" text="Lanches e beliscos" color="var(--brand-blue)" />
                <StepLine day="Dia 4" text="Rótulos e compras" color="var(--brand-orange)" />
                <StepLine day="Dia 5" text="Sobremesa sem açúcar (receita rápida)" color="var(--brand-green)" />
                <StepLine day="Dia 6" text="Estratégia para noite (compulsão)" color="var(--brand-blue)" />
                <StepLine day="Dia 7" text="Plano de continuidade e recompra inteligente" color="var(--brand-green)" />
              </div>
              <div className="mt-6 rounded-2xl bg-white p-4">
                <div className="text-xs font-semibold text-slate-700">
                  Resultado esperado
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Menos picos de fome, mais energia ao longo do dia e maior clareza sobre o que
                  comprar e evitar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App */}
      <section id="app" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <SectionTitle
          eyebrow="Aplicativo em construção"
          title="O app conecta quem quer vender com quem quer comprar, sem estoque."
          subtitle="Vitrine digital, pedido automatizado, disponibilidade real e comissionamento transparente."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<ShoppingBag className="h-5 w-5" />}
            title="Catálogo e combos"
            desc="Produtos naturais organizados por objetivo: energia, digestão, sono, rotina."
            accent="var(--brand-orange)"
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Estoque confiável"
            desc="Disponibilidade sincronizada para evitar vender item que não existe."
            accent="var(--brand-blue)"
          />
          <FeatureCard
            icon={<Truck className="h-5 w-5" />}
            title="Entrega e rastreio"
            desc="Status do pedido, separação e entrega. O revendedor só foca em vender."
            accent="var(--brand-green)"
          />
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                Para lojistas e revendedores PF
              </h3>
              <p className="mt-2 text-slate-600">
                O objetivo é replicar a força do modelo de revenda (tipo Cacau Show),
                só que com produtos naturais e uma operação orientada por dados.
              </p>

              <div className="mt-5 space-y-3">
                <BadgeLine color="var(--brand-green)" title="Lojista">
                  Reposição fácil, alertas de estoque mínimo e pedidos em segundos.
                </BadgeLine>
                <BadgeLine color="var(--brand-orange)" title="Revendedor PF">
                  Link próprio, comissão por venda e entrega pela operação.
                </BadgeLine>
                <BadgeLine color="var(--brand-blue)" title="Operação">
                  Separação, logística e controle de qualidade centralizados.
                </BadgeLine>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">
                Fluxo do pedido (sem estoque)
              </div>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                <FlowItem n="1" color="var(--brand-green)" text="Revendedor compartilha catálogo/link" />
                <FlowItem n="2" color="var(--brand-orange)" text="Cliente faz o pedido no app/portal" />
                <FlowItem n="3" color="var(--brand-blue)" text="Operação separa e expede o pedido" />
                <FlowItem n="4" color="var(--brand-green)" text="Entrega confirmada; comissão liberada" />
              </ol>

              <div className="mt-6 rounded-2xl bg-white p-4">
                <div className="text-xs font-semibold text-slate-700">
                  Observação
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  No piloto, comece com poucos SKUs (top 20/30) e aumente conforme giro e logística
                  estabilizarem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenda */}
      <section id="revenda" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <SectionTitle
          eyebrow="Revenda"
          title="Venda produtos naturais sem comprar estoque."
          subtitle="Ideal para quem já gosta do tema, indica para amigos e quer uma renda extra com comissionamento."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <SimpleCard
            title="Sem estoque"
            desc="Você não investe em mercadoria."
            icon={<ShoppingBag className="h-5 w-5" />}
            accent="var(--brand-orange)"
          />
          <SimpleCard
            title="Sem entrega"
            desc="A operação cuida da logística."
            icon={<Truck className="h-5 w-5" />}
            accent="var(--brand-blue)"
          />
          <SimpleCard
            title="Comissão clara"
            desc="Acompanhe vendas e repasses."
            icon={<ShieldCheck className="h-5 w-5" />}
            accent="var(--brand-green)"
          />
          <SimpleCard
            title="Treinamento"
            desc="Scripts, combos e conteúdo."
            icon={<Users className="h-5 w-5" />}
            accent="var(--brand-lime)"
          />
        </div>
      </section>

      {/* Inscrição */}
      <section id="inscricao" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                <Sparkles className="h-4 w-4" />
                Lista de espera
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Entre na lista para receber o Desafio e novidades do app.
              </h2>
              <p className="mt-3 text-slate-600">
                Você escolhe: participar do desafio (saúde) ou entrar no piloto de revenda sem estoque.
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  O que você recebe
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
                    Guia do Desafio 7 dias (checklist e lista de compras)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-orange)" }} />
                    Conteúdos e receitas para rotina sem açúcar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                    Convite para piloto de revenda (quando abrir)
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">
                Cadastro rápido
              </div>

              <div className="mt-4 grid gap-3">
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-600">Nome</span>
                  <input
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                    placeholder="Seu nome"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ ["--tw-ring-color"]: "var(--brand-cyan)" }}
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-600">WhatsApp</span>
                  <input
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    required
                    placeholder="(xx) 9xxxx-xxxx"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ ["--tw-ring-color"]: "var(--brand-cyan)" }}
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-600">Cidade</span>
                  <input
                    value={form.cidade}
                    onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                    placeholder="Sua cidade"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ ["--tw-ring-color"]: "var(--brand-cyan)" }}
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-600">Interesse</span>
                  <select
                    value={form.interesse}
                    onChange={(e) => setForm({ ...form, interesse: e.target.value })}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ ["--tw-ring-color"]: "var(--brand-cyan)" }}
                  >
                    <option>Saúde (Desafio 7 dias)</option>
                    <option>Revenda sem estoque (piloto)</option>
                    <option>Lojista (comprar no atacado)</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-green), var(--brand-blue))",
                  }}
                >
                  Quero participar <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-slate-500">
                  Ao enviar, você concorda em receber mensagens sobre o desafio e sobre o aplicativo.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <SectionTitle
          eyebrow="FAQ"
          title="Dúvidas frequentes"
          subtitle="Respostas diretas para começar e entender o modelo de revenda sem estoque."
        />
        <Faq />
      </section>

      {/* Footer */}
      <footer id="contato" className="mx-auto max-w-6xl px-4 pb-10 pt-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand-green), var(--brand-blue))",
                  }}
                />
                <div>
                  <div className="text-sm font-extrabold tracking-tight text-slate-900">
                    Viver sem Açúcar
                  </div>
                  <div className="text-xs text-slate-500">
                    Conteúdo saudável + app de revenda natural (sem estoque)
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Conteúdo educativo. Não substitui acompanhamento profissional de saúde.
              </p>
            </div>

            <div className="text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Contato</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> WhatsApp: (xx) 9xxxx-xxxx
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> contato@viversemazucar.com
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Redes</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                © {new Date().getFullYear()} Viver sem Açúcar. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --------------------------- Components --------------------------- */

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--brand-blue)" }}
      >
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p>
    </div>
  );
}

function MiniStat({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
        <span style={{ color: "var(--brand-green)" }}>{icon}</span>
        {title}
      </div>
      <div className="mt-1 text-xs text-slate-500">{desc}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, accent }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </div>
      <div className="mt-4 text-base font-extrabold tracking-tight text-slate-900">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</div>
    </div>
  );
}

function SimpleCard({ icon, title, desc, accent }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: accent }}
        >
          {icon}
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-tight text-slate-900">
            {title}
          </div>
          <div className="text-xs text-slate-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function CardRow({ title, value, tag, tagColor }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-500">{value}</div>
      </div>
      <span
        className="rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: tagColor }}
      >
        {tag}
      </span>
    </div>
  );
}

function Bullet({ text }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5">
        <CheckCircle2 className="h-4 w-4" style={{ color: "var(--brand-green)" }} />
      </span>
      <span>{text}</span>
    </li>
  );
}

function StepLine({ day, text, color }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3">
      <span
        className="mt-0.5 inline-flex min-w-[66px] justify-center rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {day}
      </span>
      <div className="text-sm text-slate-700">{text}</div>
    </div>
  );
}

function BadgeLine({ title, color, children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <span
        className="rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {title}
      </span>
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
}

function FlowItem({ n, text, color }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white"
        style={{ backgroundColor: color }}
      >
        {n}
      </span>
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2">
        {text}
      </div>
    </li>
  );
}

function Faq() {
  const items = [
    {
      q: "O canal é sobre saúde ou sobre vender produtos?",
      a: "O foco principal é saúde: hábitos, desafios e receitas sem açúcar. A possibilidade de revenda sem estoque é um caminho opcional para quem já indica e quer gerar renda.",
    },
    {
      q: "Como funciona a revenda sem estoque?",
      a: "Você divulga por catálogo/link. O cliente compra. A operação separa, emite nota e entrega (ou envia). Você acompanha status e recebe comissão conforme a regra do piloto.",
    },
    {
      q: "Preciso comprar kits para começar?",
      a: "A proposta é não exigir compra de estoque. No piloto, pode existir um kit opcional de demonstração, mas a revenda principal acontece sem você estocar mercadoria.",
    },
    {
      q: "E se o produto estiver sem estoque?",
      a: "O app deve mostrar disponibilidade real e impedir venda de itens indisponíveis, reduzindo rupturas e retrabalho. No piloto, isso também pode ser validado via atualização diária.",
    },
    {
      q: "Quando o app fica pronto?",
      a: "Você pode capturar lista de espera agora e abrir um piloto com poucos SKUs para validar logística, comissionamento e recorrência antes de expandir o catálogo.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <div className="mt-8 grid gap-3">
      {items.map((it, idx) => {
        const isOpen = idx === open;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => setOpen(isOpen ? -1 : idx)}
            className="w-full rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-slate-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                {it.q}
              </div>
              <span
                className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-green), var(--brand-blue))",
                }}
              >
                {isOpen ? "–" : "+"}
              </span>
            </div>
            {isOpen && (
              <div className="mt-3 text-sm leading-relaxed text-slate-600">
                {it.a}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
