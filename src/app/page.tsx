'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('pacotes');

  const handleContactClick = (type: string) => {
    toast({
      title: "Informações de Contato",
      description: `Entre em contato com Hugo Wenner pelo WhatsApp: (31) 97183-6063 ou Email: hugowenner5@gmail.com`,
    });
  };

  const pacotes = [
    {
      id: 'bronze',
      nome: 'Pacote Bronze',
      cor: 'bg-amber-700',
      descricao: 'Landing Page Simples',
      detalhes: 'Ideal para igrejas, autônomos e pequenos negócios que querem presença online rápida.',
      itens: [
        '1 página responsiva (HTML/React)',
        'Integração WhatsApp e redes sociais',
        'Design padrão com personalização de cores e logo',
        'Hospedagem básica incluída'
      ],
      preco: 'A partir de R$ 500'
    },
    {
      id: 'prata',
      nome: 'Pacote Prata',
      cor: 'bg-gray-300',
      descricao: 'Landing Page Profissional',
      detalhes: 'Página moderna e otimizada para conversões, ideal para campanhas ou empresas locais.',
      itens: [
        'Design original (Tailwind/React)',
        'Formulário de contato funcional',
        'SEO básico + Google Analytics',
        'Compatível com celular e desktop',
        'Configuração de domínio'
      ],
      preco: 'A partir de R$ 1.000'
    },
    {
      id: 'ouro',
      nome: 'Pacote Ouro',
      cor: 'bg-yellow-400',
      descricao: 'Site Completo com Sistema SQLite',
      detalhes: 'Site profissional com painel e banco de dados para gestão de informações.',
      itens: [
        '3 a 5 páginas (Home, Sobre, Contato, etc.)',
        'Sistema CRUD com SQLite',
        'Login e autenticação de usuários',
        'Painel administrativo básico',
        'Layout moderno e rápido'
      ],
      preco: 'A partir de R$ 2.500'
    },
    {
      id: 'platina',
      nome: 'Pacote Platina',
      cor: 'bg-emerald-500',
      descricao: 'Sistema Web Avançado',
      detalhes: 'Sistema completo com dashboard, relatórios e banco de dados robusto.',
      itens: [
        'SQLite ou PostgreSQL',
        'Painel com relatórios e gráficos',
        'Login multiusuário (admin + clientes)',
        'API integrada',
        'Hospedagem e suporte técnico'
      ],
      preco: 'Sob consulta'
    }
  ];

  const servicosExtras = [
    {
      nome: 'Hospedagem e domínio',
      descricao: 'Configuração e publicação (anual)',
      preco: 'A partir de R$ 150'
    },
    {
      nome: 'Manutenção mensal',
      descricao: 'Atualizações, backup e suporte contínuo',
      preco: 'A partir de R$ 100 / mês'
    },
    {
      nome: 'SEO e Google Business',
      descricao: 'Otimização de busca e presença local',
      preco: 'A partir de R$ 250'
    },
    {
      nome: 'Copywriting',
      descricao: 'Textos persuasivos e personalizados',
      preco: 'A partir de R$ 200'
    },
    {
      nome: 'Integração com e-mail / CRM',
      descricao: 'Envio automático de leads e contatos',
      preco: 'A partir de R$ 200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold">
                  HW
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Hugo Enrique Wenner</h1>
                <p className="text-sm text-gray-600">Desenvolvedor Web Profissional</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={() => handleContactClick('header')}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Soluções Web Profissionais
              <span className="block text-blue-200">Para o Seu Negócio</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100">
              Desenvolvimento de sites, landing pages e sistemas web personalizados com tecnologia moderna e design responsivo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setActiveTab('pacotes')}
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold"
              >
                Ver Pacotes
              </Button>
              <Button 
                size="lg"
                onClick={() => handleContactClick('hero')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="pacotes" className="text-lg py-3">Pacotes de Serviços</TabsTrigger>
              <TabsTrigger value="extras" className="text-lg py-3">Serviços Extras</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pacotes" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pacotes de Desenvolvimento Web</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Escolha o pacote ideal para suas necessidades. Todos os pacotes incluem suporte técnico e garantia de qualidade.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pacotes.map((pacote) => (
                  <Card key={pacote.id} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl border-0">
                    <div className={`absolute top-0 left-0 right-0 h-2 ${pacote.cor}`}></div>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{pacote.nome}</CardTitle>
                        <Badge variant="outline" className="text-xs font-medium">
                          {pacote.descricao}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {pacote.detalhes}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-6">
                        {pacote.itens.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Separator className="my-4" />
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">{pacote.preco}</span>
                          <Button 
                            size="sm"
                            onClick={() => handleContactClick(pacote.id)}
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                          >
                            Contratar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="extras" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços Extras</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complemente seu pacote com serviços adicionais para potencializar ainda mais seu projeto.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicosExtras.map((servico, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">{servico.nome}</CardTitle>
                      <CardDescription>{servico.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center mt-4">
                        <span className="font-semibold text-gray-900">{servico.preco}</span>
                        <Button 
                          size="sm"
                          onClick={() => handleContactClick(`extra-${index}`)}
                          variant="outline"
                        >
                          Solicitar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">
              Vamos conversar sobre seu projeto? Estou à disposição para tirar suas dúvidas.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">(31) 97183-6063</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">E-mail</p>
                      <p className="text-sm text-gray-600">hugowenner5@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sobre Mim</h3>
                <p className="text-gray-600 mb-4">
                  Sou desenvolvedor web com experiência em criação de soluções digitais personalizadas. 
                  Trabalho com as tecnologias mais modernas do mercado para entregar projetos de alta qualidade.
                </p>
                <p className="text-gray-600">
                  Meu objetivo é transformar suas ideias em realidade digital, criando experiências web 
                  que geram resultados para o seu negócio.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                onClick={() => handleContactClick('final')}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              >
                Fale Comigo Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold">
                  HW
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">Hugo Enrique Wenner</h3>
                  <p className="text-blue-300">Desenvolvedor Web Profissional</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Hugo Wenner. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-500">Desenvolvido com React, Next.js e Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}