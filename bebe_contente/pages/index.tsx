import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CheckCircle, CreditCard, Shield } from "lucide-react";

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const whatsappNumber = "5511999999999"; // Trocar pelo seu número

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary to-white">
      <header className="bg-primary text-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Bebê Contente</h1>
          <Button variant="secondary" onClick={() => setCheckoutOpen(true)}>
            <ShoppingCart className="w-4 h-4 mr-2" /> Carrinho
          </Button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-primary">Bem-vindo à Bebê Contente</h2>
        <p className="text-center text-gray-700 mt-2">Produtos fofos e práticos para o dia a dia do seu bebê 💜</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Benefit icon={<Shield className="w-5 h-5" />} title="Compra Segura" desc="Site protegido e confiável." />
          <Benefit icon={<CheckCircle className="w-5 h-5" />} title="Entrega Garantida" desc="Receba em casa sem preocupações." />
          <Benefit icon={<CreditCard className="w-5 h-5" />} title="Pagamento Fácil" desc="Pix, boleto e cartão até 12x." />
        </div>
      </main>

      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Tenho uma dúvida sobre um pedido.")}`}
         target="_blank" rel="noreferrer"
         className="fixed bottom-24 right-6 md:bottom-6 z-40">
        <Button className="rounded-full h-12 w-12 p-0 shadow-lg bg-green-500 hover:bg-green-600" aria-label="Abrir WhatsApp">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" />
        </Button>
      </a>

      <footer className="border-t bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">Bebê Contente</p>
            <p className="text-muted-foreground mt-2">Produtos fofos para seu bebê, enviados com carinho para todo o Brasil.</p>
          </div>
          <div>
            <p className="font-semibold">Ajuda</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Trocas e devoluções</li>
              <li>Rastrear pedido</li>
              <li>Atendimento via WhatsApp</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Pagamentos</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Pix (instantâneo)</li>
              <li>Boleto bancário</li>
              <li>Cartão até 12x</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground pb-6">© {new Date().getFullYear()} Bebê Contente. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

function Benefit({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-md text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  );
}