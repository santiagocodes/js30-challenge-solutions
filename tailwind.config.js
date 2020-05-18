module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
      },
    },
    extend: {
      minHeight: {
        "0": "0",
        "64": "16rem",
        "72": "18rem",
      },
      spacing: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "80p": "80%",
        "90p": "90%",
        "100p": "100%",
        "5vh": "5vh",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
