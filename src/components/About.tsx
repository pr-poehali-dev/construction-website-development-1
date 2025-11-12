import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Даем официальную гарантию на все виды работ до 5 лет'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Квалифицированные специалисты с опытом работы более 10 лет'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Выполняем работы строго в оговоренные сроки'
    },
    {
      icon: 'BadgeCheck',
      title: 'Сертификаты',
      description: 'Все необходимые лицензии и допуски СРО'
    },
    {
      icon: 'Wrench',
      title: 'Современное оборудование',
      description: 'Используем профессиональный инструмент и технологии'
    },
    {
      icon: 'DollarSign',
      title: 'Честные цены',
      description: 'Прозрачное ценообразование без скрытых платежей'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            О компании
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            КровляПро — надежный партнер в ремонте и обслуживании кровли. Мы специализируемся на всех видах кровельных работ: от небольшого ремонта до полной замены крыши.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img 
            src="https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/0a842159-f89b-4e8b-b668-35002ec9b64b.jpg" 
            alt="Команда КровляПро"
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Почему выбирают нас</h3>
            <p className="text-muted-foreground mb-6">
              За годы работы мы завоевали доверие сотен клиентов благодаря профессионализму, качеству работ и индивидуальному подходу к каждому проекту. Наша миссия — создавать надежные кровли, которые защищают ваш дом на долгие годы.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold text-foreground">Комплексный подход</div>
                  <div className="text-sm text-muted-foreground">От диагностики до сдачи объекта</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold text-foreground">Качественные материалы</div>
                  <div className="text-sm text-muted-foreground">Работаем только с проверенными поставщиками</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold text-foreground">Послегарантийное обслуживание</div>
                  <div className="text-sm text-muted-foreground">Поддержка даже после истечения гарантии</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={advantage.icon} className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h4>
              <p className="text-muted-foreground">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
