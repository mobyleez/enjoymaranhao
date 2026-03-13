import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Send, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSiteContent } from '@/contexts/SiteContentContext';
import { supabase } from '@/integrations/supabase/client';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().trim().email('E-mail inválido').max(255, 'E-mail muito longo'),
  phone: z.string().trim().min(10, 'Telefone deve ter pelo menos 10 dígitos').max(20, 'Telefone muito longo').regex(/^[\d\s()+-]+$/, 'Formato de telefone inválido'),
  travelDate: z.date({ required_error: 'Selecione uma data de viagem' }),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000, 'Mensagem muito longa'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CTASection = () => {
  const { content } = useSiteContent();
  const { cta } = content;
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const whatsappUrl = cta.whatsappNumber
    ? `https://wa.me/${cta.whatsappNumber.replace(/\D/g, '')}`
    : '#';

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase.from('contact_leads').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        travel_date: format(data.travelDate, 'yyyy-MM-dd'),
        message: data.message,
      });

      if (error) throw error;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
      }, 4000);
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Não foi possível enviar sua mensagem. Tente novamente.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="bg-background py-20 lg:py-[160px] px-5 lg:px-16 relative overflow-hidden" id="contato">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(26,120,117,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(27,123,180,0.1) 0%, transparent 50%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />

      <div className="relative z-[1] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: CTA text */}
        <div className="text-center lg:text-left">
          <div className="mx-auto lg:mx-0 mb-8 lg:mb-10 w-[200px] lg:w-[240px]">
            <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ctaLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1B7BB4" />
                  <stop offset="20%" stopColor="#7AC4E2" />
                  <stop offset="40%" stopColor="#F5A623" />
                  <stop offset="60%" stopColor="#E85C4A" />
                  <stop offset="80%" stopColor="#6B1E4E" />
                  <stop offset="100%" stopColor="#1A7875" />
                </linearGradient>
              </defs>
              <text x="120" y="38" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="28" fontWeight="700" fill="url(#ctaLogoGrad)">
                ENJOY MARANHÃO
              </text>
              <line x1="0" y1="55" x2="240" y2="55" stroke="url(#ctaLogoGrad)" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>

          <h2 className="font-playfair font-black leading-none tracking-[-1px] lg:tracking-[-2px] mb-5 lg:mb-6 reveal" style={{ fontSize: 'clamp(28px, 6vw, 80px)' }}>
            Sua próxima<br /><em className="italic grad-text-diag">aventura</em> começa aqui.
          </h2>

          <p className="text-sm lg:text-base text-[rgba(255,255,255,0.4)] max-w-[480px] mx-auto lg:mx-0 mb-8 lg:mb-12 leading-[1.7] lg:leading-[1.8] font-light">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[52px] py-4 lg:py-[18px] px-8 lg:px-10 rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] text-xs lg:text-[13px] tracking-[2px] uppercase font-medium no-underline font-dm transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:text-white"
            >
              {cta.secondaryBtn}
            </a>
          </div>

          {/* Partner Logos */}
          {cta.partnerLogos?.some(l => l) && (
            <div className="mt-10 lg:mt-14">
              <p className="text-[10px] tracking-[3px] uppercase text-[rgba(255,255,255,0.25)] mb-4 font-medium">Parceiros</p>
              <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
                {cta.partnerLogos.filter(l => l).map((logo, i) => (
                  <img key={i} src={logo} alt={`Parceiro ${i + 1}`} className="h-8 lg:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-2xl lg:rounded-3xl p-6 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full grad-bg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">Mensagem enviada!</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[300px]">
                Obrigado pelo contato. Retornaremos em breve com o roteiro perfeito para você.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-playfair text-xl lg:text-2xl font-bold text-foreground mb-1">
                Planeje sua viagem
              </h3>
              <p className="text-sm text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Preencha o formulário e receba um roteiro personalizado.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold">Nome</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            placeholder="Seu nome completo"
                            className="w-full h-12 rounded-xl border border-border bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold">E-mail</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              placeholder="seu@email.com"
                              className="w-full h-12 rounded-xl border border-border bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold">Telefone</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="tel"
                              placeholder="(99) 9 9999-9999"
                              className="w-full h-12 rounded-xl border border-border bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="travelDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold">Data da viagem</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <button
                                type="button"
                                className={cn(
                                  "w-full h-12 rounded-xl border border-border bg-background/50 px-4 text-sm text-left flex items-center justify-between transition-colors focus:outline-none focus:border-primary",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? format(field.value, "dd/MM/yyyy") : "Selecione uma data"}
                                <CalendarIcon className="w-4 h-4 opacity-50" />
                              </button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold">Mensagem</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={4}
                            placeholder="Conte-nos sobre a viagem dos seus sonhos..."
                            className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full flex items-center justify-center gap-3 min-h-[52px] py-4 rounded-full grad-bg text-white text-xs lg:text-[13px] tracking-[2px] uppercase font-semibold font-dm transition-all duration-300 hover:-translate-y-[2px] shadow-[0_8px_40px_rgba(27,123,180,0.25)] hover:shadow-[0_16px_60px_rgba(27,123,180,0.4)] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {cta.primaryBtn}
                  </button>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
