import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Алексей Петров',
      role: 'Владелец коттеджа',
      initials: 'АП',
      rating: 5,
      text: 'Отличная работа! Сделали полную замену кровли за 2 недели. Все четко, качественно и в срок. Рекомендую!',
      date: 'Октябрь 2024'
    },
    {
      name: 'Мария Иванова',
      role: 'Частный дом',
      initials: 'МИ',
      rating: 5,
      text: 'Очень довольны результатом. Ребята профессионалы своего дела. Всё убрали за собой, дали гарантию 5 лет.',
      date: 'Сентябрь 2024'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Загородный дом',
      initials: 'ДС',
      rating: 5,
      text: 'Обратились для ремонта мягкой кровли. Работу выполнили быстро и качественно. Цены адекватные, без накруток.',
      date: 'Август 2024'
    },
    {
      name: 'Елена Козлова',
      role: 'Владелец дома',
      initials: 'ЕК',
      rating: 5,
      text: 'Спасибо большое за проделанную работу! Крыша выглядит отлично. Все этапы работы согласовывали, никаких сюрпризов.',
      date: 'Июль 2024'
    },
    {
      name: 'Сергей Волков',
      role: 'Коттедж',
      initials: 'СВ',
      rating: 5,
      text: 'Профессиональный подход на всех этапах. От замера до сдачи объекта всё прошло гладко. Рекомендую эту компанию!',
      date: 'Июнь 2024'
    },
    {
      name: 'Ольга Михайлова',
      role: 'Частный дом',
      initials: 'ОМ',
      rating: 5,
      text: 'Качественная работа по разумной цене. Мастера вежливые, аккуратные. После окончания работ всё убрали и вывезли мусор.',
      date: 'Май 2024'
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют, и мы ценим каждого клиента
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3">{review.text}</p>
                <div className="text-sm text-muted-foreground">{review.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
