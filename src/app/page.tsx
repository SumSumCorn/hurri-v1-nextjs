import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import ThemeButton from './ThemeButton';

export default function Home() {
  return (
    <div>
      hello<Button>버튼입니다</Button>
      <ModeToggle />
      <ThemeButton />
    </div>
  );
}
