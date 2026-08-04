import {onMounted, ref, watch} from "vue";

export type Theme = "dark"|"light"|null;

export function useTheme() {
  const theme = ref<Theme>("dark");

  onMounted(() => {
    theme.value = localStorage.getItem('theme') as Theme;
    if (!theme.value) {
      theme.value = "dark";
      localStorage.setItem("theme", "dark");
    }
    apply()
  })
  watch(theme, () => apply())

  function apply() {
    document.documentElement.classList.toggle("dark", theme.value == 'dark');
    localStorage.setItem("theme", theme.value || 'dark');
  }

  function toggle() {
    theme.value = theme.value == 'dark' ? 'light' : 'dark';
  }

  return {
    toggle,
    isDark: theme.value == 'dark',
  }
}