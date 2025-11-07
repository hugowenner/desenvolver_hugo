'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Smartphone, Database, Rocket, CheckCircle2, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('pacotes');
  const phoneNumber = '5531971836063';
  
  const handleWhatsAppClick = (packageName?: string) => {
    const message = packageName 
      ? `Olá! Tenho interesse no ${packageName}. Gostaria de mais informações.`
      : `Olá! Gostaria de saber mais sobre seus serviços de desenvolvimento web.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tecnologias = [
    { nome: 'React & Next.js', icon: <Code className="w-6 h-6" /> },
    { nome: 'TypeScript', icon: <Code className="w-6 h-6" /> },
    { nome: 'Tailwind CSS', icon: <Smartphone className="w-6 h-6" /> },
    { nome: 'Node.js & APIs', icon: <Database className="w-6 h-6" /> },
  ];

  const pacotes = [
    {
      id: 'bronze',
      nome: 'Pacote Bronze',
      cor: 'from-amber-600 to-amber-700',
      borderColor: 'border-amber-500',
      descricao: 'Landing Page Simples',
      detalhes: 'Ideal para igrejas, autônomos e pequenos negócios que querem presença online rápida.',
      itens: [
        '1 página responsiva (HTML/React)',
        'Integração WhatsApp e redes sociais',
        'Design padrão com personalização de cores e logo',
        'Hospedagem básica incluída',
        'Otimização para velocidade'
      ],
      preco: 'R$ 500',
      popular: false
    },
    {
      id: 'prata',
      nome: 'Pacote Prata',
      cor: 'from-gray-400 to-gray-500',
      borderColor: 'border-gray-400',
      descricao: 'Landing Page Profissional',
      detalhes: 'Página moderna e otimizada para conversões, ideal para campanhas ou empresas locais.',
      itens: [
        'Design original e moderno (Tailwind/React)',
        'Formulário de contato funcional',
        'SEO básico + Google Analytics',
        'Totalmente responsivo (mobile e desktop)',
        'Configuração de domínio personalizado',
        '30 dias de suporte gratuito'
      ],
      preco: 'R$ 1.000',
      popular: false
    },
    {
      id: 'ouro',
      nome: 'Pacote Ouro',
      cor: 'from-yellow-400 to-yellow-500',
      borderColor: 'border-yellow-400',
      descricao: 'Site Completo com Sistema',
      detalhes: 'Site profissional com painel e banco de dados para gestão de informações.',
      itens: [
        '3 a 5 páginas profissionais',
        'Sistema CRUD com SQLite',
        'Login e autenticação de usuários',
        'Painel administrativo intuitivo',
        'Layout moderno e rápido',
        'SEO avançado',
        '60 dias de suporte gratuito'
      ],
      preco: 'R$ 2.500',
      popular: true
    },
    {
      id: 'platina',
      nome: 'Pacote Platina',
      cor: 'from-emerald-500 to-emerald-600',
      borderColor: 'border-emerald-500',
      descricao: 'Sistema Web Avançado',
      detalhes: 'Sistema completo com dashboard, relatórios e banco de dados robusto.',
      itens: [
        'SQLite ou PostgreSQL',
        'Dashboard com relatórios e gráficos',
        'Sistema multiusuário (admin + clientes)',
        'API REST integrada',
        'Integrações personalizadas',
        'Hospedagem premium e backup',
        '90 dias de suporte técnico'
      ],
      preco: 'Sob consulta',
      popular: false
    }
  ];

  const servicosExtras = [
    {
      nome: 'Hospedagem Premium',
      descricao: 'Configuração profissional com domínio personalizado',
      preco: 'R$ 150/ano',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      nome: 'Manutenção Mensal',
      descricao: 'Atualizações, backup automático e suporte contínuo',
      preco: 'R$ 100/mês',
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      nome: 'SEO & Google Business',
      descricao: 'Otimização de busca e presença local no Google',
      preco: 'R$ 250',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      nome: 'Copywriting',
      descricao: 'Textos persuasivos e otimizados para conversão',
      preco: 'R$ 200',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      nome: 'Integração E-mail/CRM',
      descricao: 'Automação de envio de leads e gestão de contatos',
      preco: 'R$ 200',
      icon: <Mail className="w-5 h-5" />
    },
    {
      nome: 'Design Personalizado',
      descricao: 'Identidade visual única para seu projeto',
      preco: 'R$ 300',
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Fixed WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale conosco!
        </span>
      </button>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  HW
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Hugo Enrique Wenner
                </h1>
                <p className="text-sm text-gray-600 font-medium">Desenvolvedor Web Full Stack</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => handleWhatsAppClick()}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => window.location.href = 'mailto:hugowenner5@gmail.com'}
                variant="outline"
                className="font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                E-mail
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-1 text-sm font-medium">
              🚀 Transformando Ideias em Realidade Digital
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Soluções Web
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Que Geram Resultados
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100 leading-relaxed">
              Desenvolvimento profissional de sites, landing pages e sistemas web com tecnologias modernas. 
              Design responsivo, performance otimizada e suporte dedicado.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => handleWhatsAppClick()}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-6 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button 
                size="lg"
                onClick={() => setActiveTab('pacotes')}
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Ver Pacotes
              </Button>
            </div>

            {/* Tecnologias */}
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {tecnologias.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2 text-white">
                  {tech.icon}
                  <span className="font-medium">{tech.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-16 h-14 bg-white shadow-lg rounded-xl">
              <TabsTrigger value="pacotes" className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white rounded-lg">
                💼 Pacotes de Serviços
              </TabsTrigger>
              <TabsTrigger value="extras" className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white rounded-lg">
                ⭐ Serviços Extras
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pacotes" className="space-y-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Escolha Seu Pacote Ideal
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Todos os pacotes incluem suporte técnico, garantia de qualidade e entrega dentro do prazo acordado.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pacotes.map((pacote) => (
                  <Card 
                    key={pacote.id} 
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${pacote.borderColor} ${pacote.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}
                  >
                    {pacote.popular && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                        MAIS POPULAR
                      </div>
                    )}
                    
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pacote.cor}`}></div>
                    
                    <CardHeader className="pb-4 pt-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${pacote.cor} flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg`}>
                        {pacote.nome.charAt(7)}
                      </div>
                      
                      <CardTitle className="text-2xl font-bold mb-2">{pacote.nome}</CardTitle>
                      
                      <Badge variant="outline" className="w-fit mb-3 font-medium">
                        {pacote.descricao}
                      </Badge>
                      
                      <CardDescription className="text-sm leading-relaxed">
                        {pacote.detalhes}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {pacote.itens.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Separator className="my-6" />
                      
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                            {pacote.preco}
                          </span>
                        </div>
                        
                        <Button 
                          onClick={() => handleWhatsAppClick(pacote.nome)}
                          className={`w-full bg-gradient-to-r ${pacote.cor} hover:opacity-90 text-white font-semibold py-6 shadow-lg`}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="extras" className="space-y-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Serviços Complementares
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Potencialize seu projeto com serviços adicionais que fazem toda a diferença no resultado final.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicosExtras.map((servico, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-gray-200">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
                          {servico.icon}
                        </div>
                        <Badge variant="secondary" className="font-bold">
                          {servico.preco}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{servico.nome}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {servico.descricao}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        onClick={() => handleWhatsAppClick(servico.nome)}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 font-semibold"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contratar Serviço
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Informações */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white">
                <h2 className="text-3xl font-bold mb-6">Vamos Conversar?</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estou pronto para transformar suas ideias em realidade digital. 
                  Entre em contato e vamos construir algo incrível juntos!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <p className="text-gray-300">(31) 97183-6063</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">E-mail</p>
                      <p className="text-gray-300">hugowenner5@gmail.com</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8 bg-gray-700" />

                <div>
                  <h3 className="font-semibold mb-3 text-lg">Por que escolher meus serviços?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Código limpo e otimizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Design moderno e responsivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Suporte técnico dedicado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Entrega no prazo acordado</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Clique no botão abaixo e vamos conversar sobre como posso ajudar 
                  a transformar sua visão em um site ou sistema profissional.
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    onClick={() => handleWhatsAppClick()}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-7 shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Iniciar Conversa no WhatsApp
                  </Button>

                  <Button 
                    size="lg"
                    onClick={() => window.location.href = 'mailto:hugowenner5@gmail.com'}
                    variant="outline"
                    className="w-full font-semibold text-lg py-7"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar E-mail
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-6 text-center">
                  ⚡ Respondo em até 2 horas durante horário comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                HW
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Hugo Enrique Wenner</h3>
                <p className="text-blue-300 text-sm">Desenvolvedor Web Full Stack</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Hugo Wenner. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-500">
                Desenvolvido com React, Next.js, TypeScript e Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}