import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ProjectGallery from '@/components/ProjectGallery';

const Projects = () => {
  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/ecbc9ca6-8a21-4e88-bca2-3f6bee867e76.jpg',
      title: 'Коттедж в Подмосковье',
      category: 'Полная замена кровли',
      area: '250 м²',
      duration: '14 дней',
      description: 'Полная замена металлочерепицы с утеплением и гидроизоляцией',
      gallery: [
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/ecbc9ca6-8a21-4e88-bca2-3f6bee867e76.jpg',
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/9a244b6c-da3e-41bf-9356-4b1bc7094529.jpg'
      ]
    },
    {
      image: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/2846dcca-0afc-4d08-9a4d-b7140bd0c6e7.jpg',
      title: 'Частный дом',
      category: 'Ремонт мягкой кровли',
      area: '180 м²',
      duration: '10 дней',
      description: 'Капитальный ремонт битумной черепицы с заменой основания',
      gallery: [
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/2846dcca-0afc-4d08-9a4d-b7140bd0c6e7.jpg',
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/fbf7e685-57a9-44f7-aec0-f130fed63c40.jpg'
      ]
    },
    {
      image: 'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/fb7887f4-e72f-452d-a129-e634224765e0.jpg',
      title: 'Загородный дом',
      category: 'Монтаж фальцевой кровли',
      area: '320 м²',
      duration: '18 дней',
      description: 'Устройство фальцевой кровли из оцинкованной стали',
      gallery: [
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/fb7887f4-e72f-452d-a129-e634224765e0.jpg',
        'https://cdn.poehali.dev/projects/c3cb7d48-caf1-45c7-aa2f-6fee065312bb/files/01c2dee6-5253-4fd4-b03b-3201269c10e9.jpg'
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — это пример нашего профессионализма и внимания к деталям
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Maximize2" size={16} className="text-primary" />
                    <span className="text-muted-foreground">{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                </div>
                <ProjectGallery images={project.gallery} projectName={project.title} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;