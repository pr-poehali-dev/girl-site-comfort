import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/b1fd5b1c-a940-457b-9917-3d4f804955af/files/afd2e171-6fc0-4dc8-9b2e-d5890e2d389c.jpg",
      title: "Нежность",
      description: "Изысканная красота в каждом лепестке"
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/b1fd5b1c-a940-457b-9917-3d4f804955af/files/dd85cf2c-09a0-4ee1-bd70-63b588796174.jpg",
      title: "Элегантность",
      description: "Утончённый стиль для особенных моментов"
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/b1fd5b1c-a940-457b-9917-3d4f804955af/files/8ba482b0-ff4e-4632-9fad-a19355fad704.jpg",
      title: "Красота",
      description: "Роскошь в каждой детали"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,222,226,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(229,221,255,0.3),transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 text-foreground tracking-tight">
            Élegance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide">
            Пространство утончённого стиля и изящества
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-light tracking-wider hover:scale-105 transition-transform"
          >
            Открыть галерею
            <Icon name="ArrowRight" size={20} className="ml-2" />
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
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
