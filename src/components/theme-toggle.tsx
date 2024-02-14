'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="size-5 dark:hidden" />
      <Icons.moon className="hidden size-5 dark:block" />
    </Button>
  );
};