import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

const Reviews = () => {
  const reviews = [
    {
      name: 'Алексей Петров',
      role: 'Владелец коттеджа',
      initials: 'АП',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/ce56e810-237e-48ec-a5df-47815337056f.jpg',
      rating: 5,
      text: 'Отличная работа! Сделали полную замену кровли за 2 недели. Все четко, качественно и в срок. Рекомендую!',
      date: 'Октябрь 2024'
    },
    {
      name: 'Мария Иванова',
      role: 'Частный дом',
      initials: 'МИ',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/67b6a407-82aa-4ffb-97be-69ee2a1ed847.jpg',
      rating: 5,
      text: 'Очень довольны результатом. Ребята профессионалы своего дела. Всё убрали за собой, дали гарантию 5 лет.',
      date: 'Сентябрь 2024'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Загородный дом',
      initials: 'ДС',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/a25d6c3a-c4a8-4fd4-a767-0d7f6a20392c.jpg',
      rating: 5,
      text: 'Обратились для ремонта мягкой кровли. Работу выполнили быстро и качественно. Цены адекватные, без накруток.',
      date: 'Август 2024'
    },
    {
      name: 'Елена Козлова',
      role: 'Владелец дома',
      initials: 'ЕК',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/4f451207-1666-4c7b-ba87-4a2470f20d6d.jpg',
      rating: 5,
      text: 'Спасибо большое за проделанную работу! Крыша выглядит отлично. Все этапы работы согласовывали, никаких сюрпризов.',
      date: 'Июль 2024'
    },
    {
      name: 'Сергей Волков',
      role: 'Коттедж',
      initials: 'СВ',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/ae53c967-28a3-4670-9d57-64f95c6b7647.jpg',
      rating: 5,
      text: 'Профессиональный подход на всех этапах. От замера до сдачи объекта всё прошло гладко. Рекомендую эту компанию!',
      date: 'Июнь 2024'
    },
    {
      name: 'Ольга Михайлова',
      role: 'Частный дом',
      initials: 'ОМ',
      photo: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/04f7bfda-0e8b-45fa-be97-c9708fec3a69.jpg',
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
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={review.photo} alt={review.name} />
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;