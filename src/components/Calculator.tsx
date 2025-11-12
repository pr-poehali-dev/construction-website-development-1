import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';

const Calculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    area: '',
    roofType: '',
    serviceType: '',
    name: '',
    phone: ''
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const roofTypes = [
    { value: 'flat', label: 'Плоская кровля', coefficient: 1 },
    { value: 'pitched', label: 'Скатная кровля', coefficient: 1.2 },
    { value: 'complex', label: 'Сложная кровля', coefficient: 1.5 }
  ];

  const serviceTypes = [
    { value: 'soft', label: 'Мягкая кровля', price: 800 },
    { value: 'metal', label: 'Металлочерепица', price: 1200 },
    { value: 'folded', label: 'Фальцевая кровля', price: 1500 },
    { value: 'waterproofing', label: 'Гидроизоляция', price: 600 },
    { value: 'repair', label: 'Ремонт кровли', price: 1000 }
  ];

  const calculatePrice = () => {
    if (!formData.area || !formData.roofType || !formData.serviceType) {
      toast({
        title: "Заполните все поля",
        description: "Для расчета необходимо указать площадь, тип крыши и вид работ",
        variant: "destructive"
      });
      return;
    }

    const area = parseFloat(formData.area);
    if (isNaN(area) || area <= 0) {
      toast({
        title: "Некорректная площадь",
        description: "Укажите корректное значение площади",
        variant: "destructive"
      });
      return;
    }

    const roofType = roofTypes.find(r => r.value === formData.roofType);
    const serviceType = serviceTypes.find(s => s.value === formData.serviceType);

    if (roofType && serviceType) {
      const price = area * serviceType.price * roofType.coefficient;
      setCalculatedPrice(Math.round(price));
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Заполните контактные данные",
        description: "Укажите ваше имя и телефон для отправки заявки",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 15 минут для уточнения деталей",
    });

    setFormData({
      area: '',
      roofType: '',
      serviceType: '',
      name: '',
      phone: ''
    });
    setCalculatedPrice(null);
  };

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте примерную стоимость кровельных работ за 1 минуту
          </p>
        </div>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Calculator" className="text-primary" size={28} />
                <span>Быстрый расчет</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь кровли (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Например: 150"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roofType">Тип крыши</Label>
                  <Select value={formData.roofType} onValueChange={(value) => setFormData({ ...formData, roofType: value })}>
                    <SelectTrigger id="roofType">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      {roofTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="serviceType">Вид работ</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Выберите вид работ" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label} - от {service.price} ₽/м²
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={calculatePrice} className="w-full" size="lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center animate-in fade-in slide-in-from-bottom-3">
                  <div className="text-sm text-muted-foreground mb-2">Примерная стоимость работ</div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {calculatedPrice.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-sm text-muted-foreground mb-6">
                    Итоговая цена может отличаться в зависимости от сложности работ и выбранных материалов
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="text-left">
                      <div className="font-semibold text-foreground mb-4">Оставьте заявку для точного расчета</div>
                      <div className="space-y-3">
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <Button onClick={handleSubmit} className="w-full" variant="default" size="lg">
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Быстрый расчет</div>
                    <div className="text-xs text-muted-foreground">За 1 минуту</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Гарантия цены</div>
                    <div className="text-xs text-muted-foreground">Без скрытых платежей</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Ответ за 15 минут</div>
                    <div className="text-xs text-muted-foreground">Работаем с 9:00 до 21:00</div>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Calculator;