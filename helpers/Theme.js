export const loadTheme = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if ( localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const setTheme = (mode) => {
  localStorage.theme = mode;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add(mode);
};

export const getTheme = () => {
  let savedTheme = localStorage.getItem("theme");
  if(!savedTheme) return "system"
  return savedTheme;
};

// Whenever the user explicitly chooses to respect the OS preference
export const removeTheme = () => {
  localStorage.removeItem("theme");
};
