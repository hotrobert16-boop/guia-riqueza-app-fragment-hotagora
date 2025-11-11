'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  BookOpen, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react'

export default function GuiaDaRiqueza() {
  const [activeTab, setActiveTab] = useState('estrategias')

  const estrategias = [
    {
      titulo: "Investimento em Ações",
      descricao: "Aprenda a escolher ações vencedoras e construir um portfólio sólido",
      retorno: "15-25% ao ano",
      risco: "Médio-Alto",
      icon: TrendingUp
    },
    {
      titulo: "Fundos Imobiliários",
      descricao: "Receba renda passiva mensal investindo no mercado imobiliário",
      retorno: "8-12% ao ano",
      risco: "Médio",
      icon: DollarSign
    },
    {
      titulo: "Renda Fixa",
      descricao: "Base sólida para sua carteira com investimentos seguros",
      retorno: "10-13% ao ano",
      risco: "Baixo",
      icon: Target
    }
  ]

  const modulos = [
    {
      titulo: "Fundamentos da Riqueza",
      aulas: 8,
      duracao: "2h 30min",
      topicos: ["Mindset Milionário", "Planejamento Financeiro", "Controle de Gastos"]
    },
    {
      titulo: "Estratégias de Investimento",
      aulas: 12,
      duracao: "4h 15min",
      topicos: ["Análise Fundamentalista", "Diversificação", "Gestão de Risco"]
    },
    {
      titulo: "Renda Passiva",
      aulas: 10,
      duracao: "3h 45min",
      topicos: ["Dividendos", "Fundos Imobiliários", "Negócios Online"]
    },
    {
      titulo: "Liberdade Financeira",
      aulas: 6,
      duracao: "2h 10min",
      topicos: ["Independência Financeira", "Aposentadoria Precoce", "Lifestyle"]
    }
  ]

  const depoimentos = [
    {
      nome: "Carlos Silva",
      resultado: "R$ 250.000 em 2 anos",
      texto: "O Guia da Riqueza mudou completamente minha visão sobre dinheiro. Hoje tenho uma carteira diversificada e renda passiva mensal.",
      rating: 5
    },
    {
      nome: "Ana Costa",
      resultado: "Aposentadoria aos 45",
      texto: "Seguindo as estratégias do curso, consegui me aposentar 20 anos antes do previsto. Liberdade financeira é real!",
      rating: 5
    },
    {
      nome: "Roberto Lima",
      resultado: "R$ 15.000/mês passivos",
      texto: "Construí múltiplas fontes de renda passiva. Agora trabalho porque quero, não porque preciso.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Guia da Riqueza</h1>
                <p className="text-gray-600">Transforme sua Vida Financeira</p>
              </div>
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Construa sua <span className="text-green-600">Riqueza</span> do Zero
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda as estratégias que os ricos usam para multiplicar seu dinheiro. 
            Mais de 50.000 alunos já transformaram suas vidas financeiras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Assistir Aula Gratuita
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
              Ver Conteúdo Completo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50.000+</div>
              <div className="text-gray-600">Alunos Transformados</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.5M+</div>
              <div className="text-gray-600">Em Resultados Gerados</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégias Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Estratégias Comprovadas
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra as principais estratégias de investimento que podem transformar sua situação financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estrategias.map((estrategia, index) => {
              const IconComponent = estrategia.icon
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">{estrategia.titulo}</h4>
                  <p className="text-gray-600 mb-6">{estrategia.descricao}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Retorno Esperado:</span>
                      <span className="font-semibold text-green-600">{estrategia.retorno}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Nível de Risco:</span>
                      <span className="font-semibold">{estrategia.risco}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                    Aprender Estratégia
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Conteúdo Completo
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 módulos completos com mais de 12 horas de conteúdo prático
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modulos.map((modulo, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{modulo.titulo}</h4>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {modulo.aulas} aulas
                      </span>
                      <span>{modulo.duracao}</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Módulo {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {modulo.topicos.map((topico, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{topico}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Ver Detalhes do Módulo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Resultados Reais
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como nossos alunos transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{depoimento.texto}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{depoimento.nome}</div>
                  <div className="text-green-600 font-bold">{depoimento.resultado}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Comece sua Jornada para a Riqueza Hoje
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã o que pode transformar sua vida hoje. 
            Junte-se a milhares de pessoas que já alcançaram a liberdade financeira.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Garantir Minha Vaga
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
              Falar com Consultor
            </button>
          </div>
          
          <div className="mt-8 text-green-100">
            <p>✅ Garantia de 30 dias | ✅ Suporte completo | ✅ Certificado de conclusão</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Guia da Riqueza</h4>
                </div>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da educação financeira.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Curso</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Módulos</li>
                <li>Certificado</li>
                <li>Suporte</li>
                <li>Garantia</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Recursos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Calculadoras</li>
                <li>E-books</li>
                <li>Webinars</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Suporte</li>
                <li>WhatsApp</li>
                <li>Email</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Guia da Riqueza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}