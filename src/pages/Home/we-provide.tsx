import Container from '@/components/Container';
import AngleBg from '@/components/ui/AngleBg';
import Badges from './badges';
import Button from '@/components/ui/button';

const WeProvide = () => {
  return (
    <section className="relative pb-44 lg:pb-20 text-white bg-website-yellow">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="order-2 md:order-1 max-w-[615px]">
          <h1 className="font-bold mb-4 font-segoe-ui text-foreground text-3xl md:text-[50px] md:leading-[60px]">
            Cursus Integer <br />
            consequat Tristique.
          </h1>

          <div className="my-12">
            <Badges
              badges={[
                'Ac viverra sed risus praesent vulputate.',
                'Natoqu consectetur pulvinar.',
                'Sollicitudin ornare tempus nulla varius pulvinar.',
                'Varius pulvinar',
                'Natoque id tellus consectetur',
                'Vulputate et vulputate suspendisse',
              ]}
            />
          </div>

          <Button title="Lorem Ipsum" className="bg-foreground text-white" />
        </div>

        <img
          src="/assets/action.png"
          alt="action"
          className="max-w-[714px] order-1 md:order-2 w-full h-auto max-h-[714px]"
        />
      </Container>

      <AngleBg color="fill-background" slope={0.2} height={150} />
    </section>
  );
};

export default WeProvide;
