/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // I allocated some values ​​that do not exist in Tailwind for Response and Animation
      screens: {
        customesm: { max: "415px" }, // إضافة نقطة توقف عند 415px

        customexsm: { max: "434px" }, // إضافة نقطة توقف عند 434
        customexmsm: { max: "542px" }, // إضافة نقطة توقف عند 542
        customexsma: { max: "640px" }, // إضافة نقطة توقف عند 640px
        customexlsm: { max: "739px" }, // إضافة نقطة توقف عند 739
        customeslg: { max: "768px" }, // إضافة نقطة توقف عند 1200px
        customelg: { max: "917px" }, // إضافة نقطة توقف عند 917px
        customexl: { max: "1200px" }, // إضافة نقطة توقف عند 1200px
      },
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInFromLowOpacity: {
          "0%": { opacity: "0.1" }, // يبدأ العنصر بشفافية قليلة (0.1)
          "100%": { opacity: "1" }, // ينتهي العنصر بشفافية كاملة (1)
        },
      },
      fadeInDown: {
        "0%": {
          transform: "translateY(-50px)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
      animation: {
        slideInFromRight: "slideInFromRight 1s ease-out", // مدة الحركة 1 ثانية
        fadeInFromLowOpacity: "fadeInFromLowOpacity 1.5s ease-out", // مدة الحركة 1.5 ثانية
        "fade-in-down": "fadeInDown 1s ease-out forwards",
      },

      colors: {
        "color-primary": "#4CAF4F",
        "color-secondary": "#F5F7FA",
        "color-h2": "#4D4D4D",
        "color-p": " #717171",
        "color-more": "#263238",
        "color-footer": "#263238",
        "color-input": " #FFFFFF",
      },
      spacing: {
        128: "32rem", // تخصيص فئة h-128 (512px)
        144: "36rem", // تخصيص فئة h-144 (576px)
        160: "40rem", // تخصيص فئة h-160 (640px)
        100: "90%",
      },
      boxShadow: {
        "custom-shadow": "0px 2px 4px 0px #ABBED133", // إضافة الظل المخصص
      },
    },
  },
  plugins: [],
};
