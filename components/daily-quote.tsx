"use client";

import { motion } from "framer-motion";

const quotes = [
  { text: "Richness is not having many possessions, but richness is being content with oneself.", author: "Prophet Muhammad ﷺ" },
  { text: "Do not belittle any good deed, even meeting your brother with a cheerful face.", author: "Prophet Muhammad ﷺ" },
  { text: "The greatest jihad is to battle your own soul, to fight the evil within yourself.", author: "Prophet Muhammad ﷺ" },
  { text: "The strongest among you is the one who controls his anger.", author: "Prophet Muhammad ﷺ" },
  { text: "A kind word is a form of charity.", author: "Prophet Muhammad ﷺ" },
  { text: "God does not look at your forms and possessions but he looks at your hearts and your deeds.", author: "Prophet Muhammad ﷺ" },
  { text: "None of you truly believes until he wishes for his brother what he wishes for himself.", author: "Prophet Muhammad ﷺ" },
  { text: "He who is not merciful to others, will not be treated mercifully.", author: "Prophet Muhammad ﷺ" },
  { text: "Make things easy for people and not difficult. Give people good news and bring them joy.", author: "Prophet Muhammad ﷺ" },
  { text: "The best among you are those who have the best manners and character.", author: "Prophet Muhammad ﷺ" },
  { text: "Verily, with hardship comes ease.", author: "Quran 94:6" },
  { text: "So remember Me; I will remember you.", author: "Quran 2:152" },
  { text: "And He found you lost and guided [you].", author: "Quran 93:7" },
  { text: "Do not lose hope, nor be sad.", author: "Quran 3:139" },
  { text: "Allah does not burden a soul beyond that it can bear.", author: "Quran 2:286" },
  { text: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.'", author: "Quran 9:51" },
  { text: "If you are grateful, I will surely increase you [in favor].", author: "Quran 14:7" },
  { text: "My mercy encompasses all things.", author: "Quran 7:156" },
  { text: "Good words are for good men, and good men are for good words.", author: "Quran 24:26" },
  { text: "Indeed, Allah is with the patient.", author: "Quran 2:153" },
  { text: "Patience is of two kinds: patience over what pains you, and patience against what you covet.", author: "Ali ibn Abi Talib" },
  { text: "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brilliantly.", author: "Ali ibn Abi Talib" },
  { text: "What is destined will reach you, even if it be underneath two mountains. What is not destined, will not reach you, even if it be between your two lips.", author: "Umar ibn Al-Khattab" },
  { text: "To overcome evil with good is good, to resist evil by evil is evil.", author: "Prophet Muhammad ﷺ" },
  { text: "A man's true wealth is the good he does in this world.", author: "Prophet Muhammad ﷺ" },
  { text: "Strive always to excel in virtue and truth.", author: "Prophet Muhammad ﷺ" },
  { text: "Knowledge from which no benefit is derived is like a treasure out of which nothing is spent in the cause of God.", author: "Prophet Muhammad ﷺ" },
  { text: "There is no beauty better than intellect.", author: "Prophet Muhammad ﷺ" },
  { text: "Leave what makes you doubt for what does not make you doubt.", author: "Prophet Muhammad ﷺ" },
  { text: "Modesty brings nothing but good.", author: "Prophet Muhammad ﷺ" },
  { text: "The world is a prison for the believer and a paradise for the unbeliever.", author: "Prophet Muhammad ﷺ" },
  { text: "When you see a person who has been given more than you in money and beauty, look to those, who have been given less.", author: "Prophet Muhammad ﷺ" },
  { text: "The best of people are those that bring most benefit to the rest of mankind.", author: "Prophet Muhammad ﷺ" },
  { text: "Be mindful of Allah, you will find Him before you.", author: "Prophet Muhammad ﷺ" },
  { text: "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.", author: "Ali ibn Abi Talib" },
  { text: "Through patience, great things are accomplished.", author: "Ali ibn Abi Talib" },
  { text: "Silence is the best reply to a fool.", author: "Ali ibn Abi Talib" },
  { text: "The disease of the heart is worse than the disease of the body.", author: "Ali ibn Abi Talib" },
  { text: "Do not sit idle for the provision of your day. Heaven does not rain gold and silver.", author: "Umar ibn Al-Khattab" },
  { text: "Sometimes the people with the worst past, create the best future.", author: "Umar ibn Al-Khattab" },
  { text: "Invite to the way of your Lord with wisdom and good instruction.", author: "Quran 16:125" },
  { text: "And whoever puts all his trust in Allah, He will be enough for him.", author: "Quran 65:3" },
  { text: "Do not despair of the mercy of Allah.", author: "Quran 39:53" },
  { text: "And speak to people good [words].", author: "Quran 2:83" },
  { text: "Indeed, the patient will be given their reward without account.", author: "Quran 39:10" },
  { text: "Perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you.", author: "Quran 2:216" },
  { text: "Verily, the hearts find rest in the remembrance of Allah.", author: "Quran 13:28" },
  { text: "So be patient with gracious patience.", author: "Quran 70:5" },
  { text: "And He is with you wherever you are.", author: "Quran 57:4" },
  { text: "Our Lord, forgive me and my parents and the believers the Day the account is established.", author: "Quran 14:41" },
  { text: "There is no relationship between Allah and anyone except through obedience to Him.", author: "Umar ibn Al-Khattab" },
  { text: "Worldly life is short, so turn to Allah before you return to Allah.", author: "Anonymous" },
  { text: "The heart that beats for Allah is always a stranger among the hearts that beat for the world.", author: "Anonymous" },
  { text: "When you seek Allah, you will never lose. When you lose Allah, you have lost everything.", author: "Anonymous" },
  { text: "Sins destroy the heart the same way poison destroys the body.", author: "Ibn Qayyim" },
  { text: "A trial that brings you closer to Allah is better than a blessing that takes you away from Him.", author: "Ibn Taymiyyah" },
  { text: "The wound is the place where the Light enters you.", author: "Rumi" },
  { text: "Let yourself be drawn by the stronger pull of that which you truly love.", author: "Rumi" },
  { text: "What you seek is seeking you.", author: "Rumi" },
  { text: "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.", author: "Rumi" },
];

function getDailyQuote() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  // Divide time by 12 hours so the quote changes twice a day
  const halfDays = Math.floor(diff / (1000 * 60 * 60 * 12));
  return quotes[halfDays % quotes.length];
}

export default function DailyQuote() {
  const quote = getDailyQuote();

  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Quote of the Day
        </p>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 px-8 py-10 md:px-14 md:py-12">
          {/* Big background quotation mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 -left-2 select-none text-[10rem] md:text-[14rem] font-serif leading-none text-foreground/5"
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <motion.blockquote
            key={quote.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <p className="text-lg md:text-2xl font-medium italic leading-relaxed text-foreground/80 max-w-3xl">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold tracking-wide text-muted-foreground">
              — {quote.author}
            </footer>
          </motion.blockquote>
        </div>
      </motion.div>
    </section>
  );
}
