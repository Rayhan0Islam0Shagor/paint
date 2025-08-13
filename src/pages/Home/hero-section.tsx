import Container from '@/components/Container';
import Badges from './badges';
import Button from '@/components/ui/button';
import AngleBg from '@/components/ui/AngleBg';

const HeroSection = () => {
  return (
    <section className="relative pb-36 lg:pb-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="order-2 md:order-1">
          <h5 className="font-bold font-segoe-ui text-website-yellow md:text-[30px] uppercase">
            risus praesent vulputate.
          </h5>
          <h1 className="font-bold mb-4 font-segoe-ui text-foreground text-4xl md:text-[80px] md:leading-[90px]">
            Consequat <br />
            Consequat Tristique.|
          </h1>

          <div className="my-8">
            <Badges
              badges={[
                'Cursus Integer',
                'Integer Consequat ',
                'Tellus Euismod Pellentesque',
                'Aliquot Tristique',
                'Pellentesque Tempus',
                'Mauris Fermentum Praesent',
              ]}
            />
          </div>

          <Button title="Lorem Ipsum" className="bg-website-yellow" />
        </div>

        <img
          src="/assets/hero.png"
          alt=""
          className="max-w-[714px] order-1 md:order-2 w-full h-auto max-h-[714px]"
        />
      </Container>

      <AngleBg color="fill-foreground" slope={0.2} height={150} />
    </section>
  );
};

export default HeroSection;
