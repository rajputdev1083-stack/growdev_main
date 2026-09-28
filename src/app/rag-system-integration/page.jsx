// app/rag-system-integration/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "RAG System Integration | GR Development - AI-Powered Knowledge Systems",
  description: "Custom RAG (Retrieval-Augmented Generation) systems for businesses. Integrate AI with your data for intelligent chatbots, document search, and knowledge management.",
  keywords: "RAG system, Retrieval Augmented Generation, AI integration, custom chatbot, document Q&A, knowledge base AI, LLM integration, OpenAI, LlamaIndex, LangChain",
  openGraph: {
    title: "RAG System Integration - AI Knowledge Solutions",
    description: "Custom AI systems that learn from your data. Intelligent chatbots, document search, and knowledge management.",
  },
};

const packages = [
  {
    name: "Basic RAG",
    price: "Custom quote",
    duration: "2-3 weeks",
    features: [
      "Document ingestion (PDF, TXT, DOCX)",
      "Basic Q&A system",
      "Up to 100 documents",
      "OpenAI integration",
      "Simple web interface",
      "API access",
      "1 month support"
    ],
    ideal: "Small businesses, Startups"
  },
  {
    name: "Business RAG",
    price: "Custom quote",
    duration: "3-4 weeks",
    features: [
      "Multiple document formats",
      "Advanced chunking strategies",
      "Up to 1,000 documents",
      "Custom embedding model",
      "Hybrid search (vector + keyword)",
      "Chat history",
      "Admin dashboard",
      "User management",
      "3 months support"
    ],
    popular: true,
    ideal: "SMEs, Growing companies"
  },
  {
    name: "Enterprise RAG",
    price: "Custom quote",
    duration: "4-6 weeks",
    features: [
      "Unlimited documents",
      "Real-time data sync",
      "Multiple data sources",
      "On-premise deployment",
      "Custom fine-tuning",
      "Advanced security",
      "Audit logs",
      "Multi-language support",
      "Scalable architecture",
      "12 months support"
    ],
    ideal: "Large enterprises, Healthcare, Legal"
  }
];

const useCases = [
  {
    icon: "💬",
    title: "Customer Support Bot",
    description: "AI chatbot trained on your support docs, FAQs, and knowledge base"
  },
  {
    icon: "📄",
    title: "Document Q&A",
    description: "Ask questions across thousands of PDFs, manuals, and reports"
  },
  {
    icon: "🏢",
    title: "Internal Knowledge Base",
    description: "Employees can instantly find information from company documents"
  },
  {
    icon: "⚖️",
    title: "Legal Document Analysis",
    description: "Search and analyze contracts, case files, and legal documents"
  },
  {
    icon: "🏥",
    title: "Medical Research",
    description: "Query medical literature, patient records, and research papers"
  },
  {
    icon: "🎓",
    title: "Educational Assistant",
    description: "Students get answers from textbooks and course materials"
  }
];

const technologies = [
  {
    category: "Frameworks",
    items: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel"]
  },
  {
    category: "Vector Databases",
    items: ["Pinecone", "Weaviate", "Qdrant", "ChromaDB", "Milvus"]
  },
  {
    category: "LLM Providers",
    items: ["OpenAI", "Anthropic", "Cohere", "Llama 2", "Mistral", "Google Gemini"]
  },
  {
    category: "Embedding Models",
    items: ["OpenAI Embeddings", "Cohere Embed", "Sentence Transformers", "BGE"]
  }
];

const features = [
  { icon: "🔍", title: "Intelligent Search", desc: "Find exactly what you need across all documents" },
  { icon: "💡", title: "Context-Aware", desc: "Understands the full context of your questions" },
  { icon: "📊", title: "Analytics", desc: "Track queries, usage, and improve responses" },
  { icon: "🔒", title: "Secure", desc: "Your data stays private and encrypted" },
  { icon: "⚡", title: "Real-time", desc: "Update documents and get instant answers" },
  { icon: "🌐", title: "Multi-format", desc: "PDF, Word, Excel, PPT, HTML, and more" }
];

export default function RAGSystemPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-600">home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-neutral-600">services</Link>
            <span>/</span>
            <span className="text-neutral-800">rag-system-integration</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              RAG System Integration
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">AI that knows your data</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Build intelligent systems that can read, understand, and answer questions from your documents, 
              databases, and knowledge bases using Retrieval-Augmented Generation (RAG).
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Custom Solutions</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">2-6 weeks delivery</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">LangChain • LlamaIndex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            How RAG Systems Work
          </h2>
          <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12">
            Combine the power of LLMs with your private data for accurate, context-aware responses
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">📚</div>
              <h3 className="font-medium text-neutral-900 mb-2">1. Load Your Data</h3>
              <p className="text-sm text-neutral-500">Upload documents, connect databases, or sync with cloud storage</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">🔍</div>
              <h3 className="font-medium text-neutral-900 mb-2">2. Retrieve Context</h3>
              <p className="text-sm text-neutral-500">System finds the most relevant information for each query</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">🤖</div>
              <h3 className="font-medium text-neutral-900 mb-2">3. Generate Answer</h3>
              <p className="text-sm text-neutral-500">AI crafts accurate responses based on your actual data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            What You Can Build
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-200 rounded-lg">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Solutions</h2>
            <p className="text-neutral-500 mt-2">Custom RAG systems tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-['Inter'] text-xl font-medium text-neutral-900">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 mb-4">{pkg.ideal}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-xs text-neutral-400 block">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?service=rag-system" 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-200 rounded-lg">
                <h3 className="font-medium text-neutral-900 mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, j) => (
                    <span key={j} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Why Integrate RAG?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "24/7 Availability", desc: "Instant answers anytime, anywhere" },
              { title: "Scale Knowledge", desc: "Handle millions of documents effortlessly" },
              { title: "Cost Effective", desc: "Reduce support and research costs" },
              { title: "Continuous Learning", desc: "Improve with more data and usage" },
              { title: "Data Security", desc: "Your data never leaves your control" },
              { title: "Customizable", desc: "Tailored to your specific needs" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-medium text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Build Your AI Knowledge System
          </h2>
          <p className="text-neutral-300 mb-8">Let's discuss how RAG can transform your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Schedule Consultation
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Case Studies
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}