'use client';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div>
      The current theme is: {theme}
      <Button onClick={toggle}>Change Color</Button>
    </div>
  );
};

export default ThemeButton;
