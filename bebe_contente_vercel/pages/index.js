import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary to-white">
      <header className="bg-primary text-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Bebê Contente</h1>
          <Link href="/loja"><button className="bg-white text-primary px-4 py-2 rounded-2xl font-semibold">Ver Produtos</button></Link>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Produtos fofos e práticos para seu bebê 💜</h2>
        <p className="text-gray-700 mb-8">Na Bebê Contente, qualidade e carinho andam juntos para deixar o dia a dia do seu bebê mais feliz.</p>
        <Link href="/loja"><button className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#9b59b6]">Confira a loja</button></Link>
      </main>
    </div>
  )
}