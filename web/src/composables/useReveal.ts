import { onBeforeUnmount, onMounted, ref, watch } from "vue";

export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const element = ref<T | null>(null);
  const visible = ref(false);

  let observer: IntersectionObserver | null = null;

  const observe = (el: T | null) => {
    observer?.disconnect();
    observer = null;

    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      visible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.value = true;
            observer?.disconnect();
            observer = null;
            break;
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(el);
  };

  onMounted(() => observe(element.value));
  watch(element, (el) => {
    if (el) observe(el);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return {
    ref: element,
    visible,
  };
}
