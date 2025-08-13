import Container from '@/components/Container';
import Button from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col md:flex-row justify-between gap-10 md:items-center pb-12 md:pb-20 border-b border-foreground/15">
        <h1 className="text-4xl font-bold font-segoe-ui">
          Vulputate et pulvinar ethre <br className="hidden md:block" />{' '}
          Suspendisse tellus consecteur
        </h1>

        <Button title="Lorem Ipsum" className="bg-website-yellow" />
      </Container>

      <Container className="flex flex-col md:flex-row justify-between gap-1 md:gap-10 md:items-center pt-6">
        <p>Copyright © {new Date().getFullYear()} Lorem Ipsum.</p>

        <div className="flex items-center gap-1">
          <a href="#" className="underline font-semibold">
            Privacy Policy
          </a>
          <p className="text-foreground">|</p>
          <a href="#" className="underline font-semibold">
            Terms & Conditions
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
