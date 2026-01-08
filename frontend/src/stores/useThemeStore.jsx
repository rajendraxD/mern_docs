import { create } from "zustand";
import { persist } from "zustand/middleware";

const applyThemeToBody = (theme) => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
};
let useThemeStore =
    (set, get) => ({
        theme: "light",

        toggleTheme: () => {
            const newTheme = get().theme === "light" ? "dark" : "light";
            applyThemeToBody(newTheme);
            set({ theme: newTheme });
        },

        // setTheme: (theme) => {
        //     document.body.classList.remove("light", "dark");
        //     document.body.classList.add(theme);

        //     set({ theme });
        // },
    })
useThemeStore = create(persist(useThemeStore, { name: "theme-storage" }));


export default useThemeStore;
