import Container from '@/components/Container';
import { MoveLeft, MoveRight } from 'lucide-react';

const Testimonial = () => {
  return (
    <div className="absolute w-full -bottom-[350px] md:-bottom-[200px] z-20 overflow-hidden px-4">
      <Container className="relative max-w-[1650px] bg-white py-12 px-14 w-full rounded-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 size-full max-w-[472px] max-h-[472px] rounded-full overflow-hidden">
            <img
              src="/assets/testimonial.png"
              alt="testimonial"
              className="size-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-start flex flex-col items-center md:items-start justify-center md:justify-start space-y-6">
            <h4 className="text-3xl md:text-[50px] font-bold text-foreground">
              What our customers thought?
            </h4>

            <div className="space-y-2">
              <p>
                Euismod magna id purus eget nunc ligula suspendisse dui netus.
                Condimentum blandit rutrum at mauris enim pulvinar duis etiam
                duis.
              </p>

              <span className="text-2xl font-bold">Holly Davidson</span>
            </div>

            <div className="flex items-center gap-4">
              <button>
                <MoveLeft className="text-foreground" />
              </button>
              <button>
                <MoveRight className=" text-website-yellow" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
