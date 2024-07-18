import styles from "./Header.module.css";
const delhi = "/Delhi.png";

const handleShare = () => {
  const tweet = encodeURIComponent(
    `local food spots to your weekend date plans.\n\neverything you need to know about dilli. \n \ncheck out: https://dilli.wiki`,
  );
  const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
  window.open(twitterIntentUrl, "_blank");
};

export default function Header() {
  return (
    <div
      className={styles.maindiv}
      style={{
        backgroundImage: `url(${delhi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>
            Want to romanticise Dilli on Instagram? This list should help.
            </h1>
            <p>
            Stop getting lost on Google.
            </p>
      <button onClick={handleShare}>Share on 𝕏</button>
    </div>
  );
}
