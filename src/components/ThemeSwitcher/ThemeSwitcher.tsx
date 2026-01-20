import * as ToggleGroup from '@radix-ui/react-toggle-group';

import DarkIcon from '../../assets/svg/IconDarkTheme';
import LightIcon from '../../assets/svg/IconLightTheme';
import styles from './ThemeSwitcher.module.css';
import { useTheme } from '../../theme/useTheme';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup.Root
      type="single"
      className={styles['theme-switcher']}
      value={theme}
      onValueChange={(val) => {
        if (val) setTheme(val as 'light' | 'dark');
      }}
      aria-label="Theme Toggle"
    >
      <ToggleGroup.Item value="light" aria-label="Light mode" className={styles.item}>
        <LightIcon className={styles.icon} />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="dark" aria-label="Dark mode" className={styles.item}>
        <DarkIcon className={styles.icon} />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ThemeSwitcher;