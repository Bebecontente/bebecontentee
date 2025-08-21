import { useState } from "react";
const produtos = [
  { id: 1, nome: "Body Soninho Feliz", preco: 59.9, img: "https://images.unsplash.com/photo-1601979031057-030c4a01c45d?q=80&w=1400&auto=format&fit=crop" },
  { id: 2, nome: "Kit Chupetas Lilás", preco: 34.9, img: "https://images.unsplash.com/photo-1622462662910-99999929c84f?q=80&w=1400&auto=format&fit=crop" },
  { id: 3, nome: "Naninha Ursinho", preco: 79.9, img: "https://images.unsplash.com/photo-1608901513058-3c687b7c4f79?q=80&w=1400&auto=format&fit=crop" },
  { id: 4, nome: "Banheira Dobrável", preco: 249.9, img: "https://images.unsplash.com/photo-1604079629978-750c21a5c24b?q=80&w=1400&auto=format&fit=crop" },
  { id: 5, nome: "Carrinho Compacto", preco: 1199.0, img: "https://images.unsplash.com/photo-1592878901227-6e7d1e87d5d3?q=80&w=1400&auto=format&fit=crop" },
  { id: 6, nome: "Cadeirinha 3 em 1", preco: 399.0, img: "https://images.unsplash.com/photo-1602524204727-93b8a7f6c1a7?q=80&w=1400&auto=format&fit=crop" },
  { id: 7, nome: "Conjunto Bebê Contente", preco: 149.9, img: "https://images.unsplash.com/photo-1592878901227-6e7d1e87d5d3?q=80&w=1400&auto=format&fit=crop" }
];

export default function Loja() {
  const [cart, setCart] = useState({});

  const addCart = (id) => { setCart({...cart, [id]: (cart[id]||0)+1}); };

  return (
    <div className="min-h-screen bg-[#f8f5fb]">
      <header className="bg-primary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Bebê Contente</h1>
          <div>Carrinho: {Object.values(cart).reduce((a,b)=>a+b,0)}</div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {produtos.map(p => (
          <div key={p.id} className="bg-white shadow-md rounded-2xl p-4">
            <img src={p.img} alt={p.nome} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-lg">{p.nome}</h3>
            <p className="text-purple-800 font-bold">R$ {p.preco.toFixed(2)}</p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded-2xl hover:bg-[#9b59b6]" onClick={()=>addCart(p.id)}>Adicionar</button>
          </div>
        ))}
      </main>
    </div>
  )
}