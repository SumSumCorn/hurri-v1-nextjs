'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import React from 'react';

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
      <Button onClick={toggle}>토글</Button>
    </div>
  );
};

export default ThemeButton;
