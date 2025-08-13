import Container from '@/components/Container';
import AngleBg from '@/components/ui/AngleBg';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FeatureSection = () => {
  return (
    <section className="text-white pb-44 lg:pb-56 lg:min-h-screen bg-foreground relative">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="max-w-[530px] mx-auto">
          <p className="text-website-yellow font-segoe-ui text-xl font-normal tracking-[2%]">
            Quisque porttitor vitae vel amet neque scelerisque mattis.
            Consectetur nibh velit magna consectetur leo.{' '}
          </p>
          <h1 className="text-4xl md:text-[50px] font-bold font-segoe-ui">
            Cursus Integer Conseq Aliquam Tristique.{' '}
          </h1>

          <Button title="Lorem Ipsum" className="bg-white mt-10" />
        </div>

        <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col gap-10">
            <FeatureCard
              id={1}
              dotClassName="text-website-yellow"
              icon="/assets/Icon-Image-1.png"
              title="Phasellus Vitae"
              subtitle="Quisque"
              description="Porttitor vitae vel amet"
            />
            <FeatureCard
              id={3}
              dotClassName="text-white"
              className="bg-website-yellow"
              icon="/assets/Icon-Image-3.png"
              title="Eleifend Pulvinar"
              subtitle="Vitae"
              description="Consectetur nibh velit"
            />
          </div>
          <div className="md:mt-20 flex flex-col gap-10">
            <FeatureCard
              id={2}
              dotClassName="text-white"
              className="bg-website-yellow"
              icon="/assets/Icon-Image-2.png"
              title="Iaculis Magna"
              subtitle="Porttitor"
              description="neque scelerisque mattis."
            />
            <FeatureCard
              id={4}
              dotClassName="text-website-yellow"
              icon="/assets/Icon-Image-4.png"
              title="Velit Odio Phir"
              subtitle="Ametneq"
              description="magna consectetur leo."
            />
          </div>
        </div>
      </Container>

      <AngleBg color="fill-website-yellow" slope={0.2} height={150} />
    </section>
  );
};

interface ContainerProps {
  className?: string;
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  dotClassName?: string;
}

const FeatureCard: React.FC<ContainerProps> = ({
  className,
  title,
  description,
  subtitle,
  id,
  icon,
  dotClassName,
}) => (
  <div
    className={cn(
      'max-w-[350px] w-[350px] h-[400px] bg-white rounded-[60px] overflow-hidden p-10 text-foreground',
      className,
    )}
  >
    <img src={icon} alt={title} className="w-[60px] h-[60px]" />

    <div className="mt-4 font-segoe-ui">
      <h2 className="font-bold text-[72px]">
        {id}
        <span className={cn('text-website-yellow', dotClassName)}>.</span>
      </h2>
      <p className="font-bold  text-2xl mb-3">{title}</p>
      <h3 className="text-xl font-semibold">{subtitle}</h3>
      <p className="font-light text-lg">{description}</p>
    </div>
  </div>
);

export default FeatureSection;
