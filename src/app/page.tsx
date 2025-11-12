'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  BookOpen, 
  Play,
  Star,
  CheckCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

export default function GuiaDaRiqueza() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 rounded-xl shadow-lg">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Guia da Riqueza
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Transforme sua Vida Financeira</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <button className="hidden sm:block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Começar Agora
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 border-t pt-4">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold">
                Começar Agora
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Construa sua <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Riqueza</span> do Zero
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Aprenda as estratégias que os ricos usam para multiplicar seu dinheiro. 
            Mais de 50.000 alunos já transformaram suas vidas financeiras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Assistir Aula Gratuita
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-emerald-50 transition-all duration-300">
              Ver Conteúdo Completo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">50.000+</div>
              <div className="text-sm sm:text-base text-gray-600">Alunos Transformados</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">R$ 2.5M+</div>
              <div className="text-sm sm:text-base text-gray-600">Em Resultados Gerados</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégias Section */}
      <section className="py-12 sm:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Estratégias Comprovadas
            </h3>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Descubra as principais estratégias de investimento que podem transformar sua situação financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {estrategias.map((estrategia, index) => {
              const IconComponent = estrategia.icon
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{estrategia.titulo}</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{estrategia.descricao}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-500">Retorno Esperado:</span>
                      <span className="font-semibold text-emerald-600">{estrategia.retorno}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-500">Nível de Risco:</span>
                      <span className="font-semibold">{estrategia.risco}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base">
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
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Conteúdo Completo
            </h3>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              4 módulos completos com mais de 12 horas de conteúdo prático
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {modulos.map((modulo, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{modulo.titulo}</h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {modulo.aulas} aulas
                      </span>
                      <span>{modulo.duracao}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ml-2">
                    Módulo {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {modulo.topicos.map((topico, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{topico}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 sm:mt-6 border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 text-sm sm:text-base">
                  Ver Detalhes do Módulo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 sm:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Resultados Reais
            </h3>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Veja como nossos alunos transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">"{depoimento.texto}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{depoimento.nome}</div>
                  <div className="text-emerald-600 font-bold text-sm sm:text-base">{depoimento.resultado}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Comece sua Jornada para a Riqueza Hoje
          </h3>
          <p className="text-base sm:text-xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Não deixe para amanhã o que pode transformar sua vida hoje. 
            Junte-se a milhares de pessoas que já alcançaram a liberdade financeira.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Garantir Minha Vaga
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300">
              Falar com Consultor
            </button>
          </div>
          
          <div className="mt-6 sm:mt-8 text-emerald-50 text-sm sm:text-base">
            <p>✅ Garantia de 30 dias | ✅ Suporte completo | ✅ Certificado de conclusão</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">Guia da Riqueza</h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Transformando vidas através da educação financeira.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Curso</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Módulos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Certificado</li>
                <li className="hover:text-white transition-colors cursor-pointer">Suporte</li>
                <li className="hover:text-white transition-colors cursor-pointer">Garantia</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Recursos</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Calculadoras</li>
                <li className="hover:text-white transition-colors cursor-pointer">E-books</li>
                <li className="hover:text-white transition-colors cursor-pointer">Webinars</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Suporte</li>
                <li className="hover:text-white transition-colors cursor-pointer">WhatsApp</li>
                <li className="hover:text-white transition-colors cursor-pointer">Email</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 Guia da Riqueza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
