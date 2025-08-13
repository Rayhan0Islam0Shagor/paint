import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'max-w-[350px] w-full flex items-center text-foreground justify-between cursor-pointer rounded-full px-8 py-4 font-bol font-segoe-ui text-2xl',
        props.className,
      )}
    >
      {title}

      <MoveRight />
    </button>
  );
};

export default Button;
