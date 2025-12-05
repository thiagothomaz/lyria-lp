import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  FileCheck, 
  Package, 
  ArrowRight, 
  Check, 
  Send,
  Menu,
  X,
  ShieldCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import heroImage from "@assets/generated_images/professional_woman_using_smartphone_for_health_app.png";
import abstractBg from "@assets/generated_images/abstract_orange_and_coral_gradient_background.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
            <span className="text-2xl font-bold tracking-tight text-secondary">Lyria</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Como funciona</a>
            <a href="#seguranca" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Segurança</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Dúvidas</a>
            <button className="text-sm font-semibold text-primary hover:underline">Login</button>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:translate-y-[-1px]">
              Começar avaliação
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#como-funciona" onClick={() => setIsMenuOpen(false)}>Como funciona</a>
            <a href="#seguranca" onClick={() => setIsMenuOpen(false)}>Segurança</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
            <button className="bg-primary text-white py-3 rounded-lg font-semibold mt-4">Começar avaliação</button>
          </div>
        </div>
      )}

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block">
           <img 
            src={heroImage} 
            alt="Mulher usando aplicativo de saúde" 
            className="w-full h-full object-cover object-center"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-white/0" />
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center h-full">
            <motion.div 
              className="lg:col-span-7 space-y-10 py-12 lg:py-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-primary font-bold text-sm tracking-wide uppercase mb-6 border border-orange-100/50">
                  Telemedicina Especializada
                </span>
                <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-gray-900">
                  A forma mais simples de iniciar seu tratamento.
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-xl font-light"
                variants={fadeInUp}
              >
                Conectamos você a médicos especialistas para avaliação, prescrição e acompanhamento contínuo. <strong className="text-gray-900 font-semibold">100% online e seguro.</strong>
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-2"
                variants={fadeInUp}
              >
                <button className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 hover:translate-y-[-2px] flex items-center gap-3 group w-full sm:w-auto justify-center">
                  Iniciar avaliação
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-500 px-2">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">
                         {i === 3 ? '+' : ''}
                       </div>
                     ))}
                  </div>
                  <p>+2k pacientes atendidos</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 mt-8"
                variants={fadeInUp}
              >
                {["Consulta sem fila", "Receita digital nacional", "Suporte contínuo"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                    <Check size={14} className="text-primary" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Mobile Image */}
            <motion.div 
              className="lg:hidden rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src={heroImage} 
                alt="Mulher usando aplicativo de saúde" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Lyria */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Por que escolher a Lyria?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Acompanhamento médico contínuo",
                desc: "Converse com médicos especialistas a qualquer momento para ajustar seu tratamento e tirar dúvidas com segurança."
              },
              {
                icon: FileCheck,
                title: "Prescrição digital segura",
                desc: "Receba sua receita digital assinada com certificação ICP-Brasil e compre seus medicamentos em qualquer farmácia."
              },
              {
                icon: Package,
                title: "Conveniência total",
                desc: "Compre sua medicação em farmácias parceiras e receba em casa — rápido, seguro e sem complicação."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <card.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Lyria Answers */}
      <section className="py-32 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Tem dúvidas? A Lyria responde para você.</h2>
            
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto mb-12 transform transition-transform hover:scale-[1.01]">
              <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 border border-gray-200">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">L</div>
                </div>
                <input 
                  type="text" 
                  placeholder="Pergunte qualquer coisa sobre seu tratamento" 
                  className="bg-transparent flex-1 text-gray-800 placeholder-gray-400 outline-none font-medium"
                  disabled
                />
                <button className="text-primary hover:bg-orange-50 p-2 rounded-lg transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "A medicação indicada é a ideal para mim?",
                "Quando devo renovar minha prescrição?",
                "Como funciona o acompanhamento médico?",
                "Quais são os efeitos esperados?",
                "Como organizar minha rotina?"
              ].map((chip) => (
                <button 
                  key={chip}
                  className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Safety & Compliance */}
      <section id="seguranca" className="py-32 bg-gradient-to-b from-[#EBE8D8] to-[#F5F2E8]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Segurança e qualidade em cada etapa do seu cuidado.
            </motion.h2>

            <div className="space-y-4">
              {[
                "Telemedicina autorizada no Brasil",
                "Prescrição digital com assinatura ICP-Brasil",
                "Seus dados protegidos conforme LGPD",
                "Medicamentos adquiridos em farmácias regulamentadas pela ANVISA",
                "Pagamento 100% seguro"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100/50"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comece agora sua jornada de transformação com segurança médica.
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-lg text-white/90">
            {[
              "Avaliação médica completa",
              "Receita digital válida em todo o Brasil",
              "Acompanhamento contínuo",
              "Processo simples, rápido e sem burocracia"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={20} className="text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <motion.button 
            className="bg-primary hover:bg-primary/90 text-white text-xl px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-black/20 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar avaliação médica →
          </motion.button>
        </div>
      </section>

      {/* Section 6: How it Works */}
      <section id="como-funciona" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">Como funciona</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-orange-100 -z-10"></div>

            {[
              {
                step: "1",
                title: "Consulta",
                desc: "Converse com um médico por mensagem, de forma rápida e segura — sem necessidade de agendamento."
              },
              {
                step: "2",
                title: "Prescrição",
                desc: "Caso haja indicação médica, você receberá sua receita digital personalizada."
              },
              {
                step: "3",
                title: "Tratamento",
                desc: "Compre sua medicação na farmácia parceira ou de sua preferência. Assinando pela plataforma, você recebe renovações gratuitas."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-orange-50 flex items-center justify-center mx-auto mb-8 shadow-sm relative z-10">
                  <span className="text-4xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Perguntas frequentes</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Como funciona a renovação da receita?",
                a: "Quando estiver perto do vencimento, é só solicitar pelo chat médico — rápido e sem complicações. Nossa equipe avaliará seu progresso e emitirá a nova prescrição se adequado."
              },
              {
                q: "E se o médico entender que o tratamento não é indicado para mim?",
                a: "Você receberá orientação completa e segura sobre os próximos passos e alternativas mais adequadas para o seu perfil de saúde. Sua segurança é nossa prioridade."
              },
              {
                q: "Onde compro o medicamento?",
                a: "Com sua receita digital, é possível comprar nas farmácias parceiras com descontos exclusivos ou em qualquer estabelecimento autorizado de sua preferência."
              },
              {
                q: "É realmente seguro?",
                a: "Sim. Todo o processo segue protocolos médicos oficiais, com prescrição individualizada e proteção total dos seus dados conforme a LGPD. Todos os nossos médicos são certificados."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm data-[state=open]:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
                <span className="text-2xl font-bold tracking-tight text-secondary">Lyria</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Transformando vidas através da medicina baseada em evidências e tecnologia humanizada.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Links Úteis</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
                <li><a href="#seguranca" className="hover:text-primary transition-colors">Segurança</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Login</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Responsabilidade Médica</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Lyria Health Tech. Todos os direitos reservados.</p>
            <p>Diretor Técnico Médico: Dr. Exemplo CRM/SP 000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
