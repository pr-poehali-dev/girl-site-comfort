import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Hearts from "@/components/Hearts";
import Particles from "@/components/Particles";

const Index = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/files/787d923f-ca85-43ea-b775-b848a1d6f935.jpg",
      title: "Нежность",
      description: "Изящный стиль в каждом образе"
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/files/5a6e98e0-4cc2-4c51-8e6e-4cc8f144451f.jpg",
      title: "Естественность",
      description: "Красота в гармонии с природой"
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/files/cb8ec2e4-1cf1-47ec-b5b4-26eead09136f.jpg",
      title: "Утончённость",
      description: "Элегантность в каждой детали"
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/files/4cda3ea7-7fc3-4a36-b314-cdfed284f849.jpg",
      title: "Игривость",
      description: "Лёгкость и очарование"
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/files/ba377a79-4408-4534-8603-8c75b1425f6c.jpg",
      title: "Ты — моё солнце",
      description: "Янтарный свет в моём сердце"
    },
    {
      id: 6,
      image: "https://cdn.poehali.dev/files/b1f7f7b8-a3f4-496c-98ad-90c323e4f5ae.jpg",
      title: "С любовью к тебе",
      description: "Ты делаешь мир прекраснее"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Hearts />
      <Particles />
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,222,226,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(229,221,255,0.3),transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 text-foreground tracking-tight text-glow floating">
            Лучшим девочкам
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide">
            Пространство утончённого стиля и изящества
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-light tracking-wider hover:scale-105 transition-transform"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Открыть галерею
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="gallery" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-foreground">
            Галерея
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Коллекция изысканных моментов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[3/4] shimmer">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-2xl font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/b1f7f7b8-a3f4-496c-98ad-90c323e4f5ae.jpg"
            alt="С любовью к тебе"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-16 shimmer">
            <div className="text-center floating">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-4 text-glow">
                С любовью к тебе
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Ты делаешь мир прекраснее
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
          <Icon name="Sparkles" size={48} className="mx-auto text-primary" />
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Создайте свой стиль
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Каждая деталь имеет значение. Откройте для себя мир утончённой элегантности и изысканного вкуса.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-light tracking-wider border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            Узнать больше
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center">
        <p className="text-muted-foreground font-light tracking-wide">
          © 2024 Élegance. Создано с любовью
        </p>
      </footer>
    </div>
  );
};

export default Index;