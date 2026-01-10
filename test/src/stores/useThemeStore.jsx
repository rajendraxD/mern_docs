import { create } from "zustand";
import { persist } from "zustand/middleware";


const applyThemeToBody = (themeMode) => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
};
let useThemeStore =
    (set, get) => ({
        themeMode: "light",

        toggleTheme: () => {
            const newTheme = get().themeMode === "light" ? "dark" : "light";
            applyThemeToBody(newTheme);
            set({ themeMode: newTheme });
        },

        // setTheme: (theme) => {
        //     document.body.classList.remove("light", "dark");
        //     document.body.classList.add(theme);

        //     set({ theme });
        // },
    })
useThemeStore = create(persist(useThemeStore, { name: "theme-storage" }));


export default useThemeStore;
