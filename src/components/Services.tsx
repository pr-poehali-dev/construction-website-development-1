import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Home',
      title: 'Ремонт мягкой кровли',
      description: 'Устранение протечек, замена поврежденных участков, восстановление битумной черепицы',
      price: 'от 800 ₽/м²',
      features: ['Диагностика протечек', 'Замена гидроизоляции', 'Ремонт основания', 'Гарантия 3 года']
    },
    {
      icon: 'Hammer',
      title: 'Замена металлочерепицы',
      description: 'Полная или частичная замена металлочерепицы с утеплением и водостоком',
      price: 'от 1200 ₽/м²',
      features: ['Демонтаж старой кровли', 'Утепление и пароизоляция', 'Монтаж металлочерепицы', 'Гарантия 5 лет']
    },
    {
      icon: 'Layers',
      title: 'Фальцевая кровля',
      description: 'Монтаж надежной фальцевой кровли из оцинкованной стали или меди',
      price: 'от 1500 ₽/м²',
      features: ['Подготовка основания', 'Монтаж фальцевых картин', 'Установка снегозадержателей', 'Гарантия 5 лет']
    },
    {
      icon: 'ShieldCheck',
      title: 'Гидроизоляция кровли',
      description: 'Устройство надежной гидроизоляции для защиты от протечек',
      price: 'от 600 ₽/м²',
      features: ['Наплавляемая гидроизоляция', 'Мембранная изоляция', 'Обработка примыканий', 'Гарантия 3 года']
    },
    {
      icon: 'Wrench',
      title: 'Ремонт стропильной системы',
      description: 'Укрепление и восстановление стропильной конструкции крыши',
      price: 'от 2000 ₽/м²',
      features: ['Диагностика повреждений', 'Замена стропил', 'Усиление конструкции', 'Антисептическая обработка']
    },
    {
      icon: 'Droplets',
      title: 'Монтаж водосточной системы',
      description: 'Установка водостоков для эффективного отвода воды с крыши',
      price: 'от 400 ₽/пог.м',
      features: ['Расчет системы', 'Монтаж желобов и труб', 'Установка воронок', 'Гарантия 2 года']
    }
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр кровельных работ с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary mt-2">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToContacts} className="w-full">
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-primary text-primary-foreground">
            <div className="flex items-center space-x-4">
              <Icon name="Calculator" size={32} />
              <div className="text-left">
                <div className="text-lg font-semibold">Бесплатный расчет стоимости</div>
                <div className="text-sm opacity-90">Выезд специалиста и составление сметы</div>
              </div>
              <Button onClick={scrollToContacts} variant="secondary" size="lg">
                Вызвать замерщика
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
