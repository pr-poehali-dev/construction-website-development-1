import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Home" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">КровляПро</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
            Главная
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
            О компании
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
            Проекты
          </button>
          <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
            Отзывы
          </button>
          <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
            Контакты
          </button>
        </nav>

        <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
          Заказать звонок
        </Button>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="text-left text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-foreground hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="w-full">
              Заказать звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
