const adviceBtn = document.getElementById("adviceBtn");
const adviceEL = document.getElementById("Advice");
const Add_Advice = document.getElementById("Add_Advice");
const windowEl = document.querySelector(".window");
const closeBtn = document.getElementById("closeBtn");
const saveBtn = document.getElementById("saveBtn");
const randomChose = (array) => {
  const randomNumber = Math.trunc(Math.random() * array.length);
  return array[randomNumber];
};

const adviceArray = [
  "Take care of your physical health.",
  "Prioritize your mental well-being.",
  "Set realistic goals for yourself.",
  "Learn from your mistakes.",
  "Celebrate small victories.",
  "Practice gratitude daily.",
  "Be kind to yourself and others.",
  "Embrace change as a part of life.",
  "Listen more than you speak.",
  "Read regularly to expand your knowledge.",
  "Travel and explore new places.",
  "Build strong relationships with family and friends.",
  "Don't be afraid to ask for help when needed.",
  "Take breaks to rest and recharge.",
  "Learn to manage your time effectively.",
  "Save and invest for your future.",
  "Stay curious and never stop learning.",
  "Find a balance between work and play.",
  "Develop a growth mindset.",
  "Learn to say 'no' when necessary.",
  "Stay true to your values.",
  "Practice mindfulness and meditation.",
  "Be open to constructive criticism.",
  "Challenge yourself regularly.",
  "Take calculated risks.",
  "Focus on what you can control.",
  "Practice active listening in conversations.",
  "Be adaptable in different situations.",
  "Learn to forgive and let go of grudges.",
  "Express your thoughts and feelings openly.",
  "Value quality over quantity in relationships.",
  "Keep your promises and commitments.",
  "Surround yourself with positive influences.",
  "Don't compare yourself to others.",
  "Take responsibility for your actions.",
  "Learn a new skill or hobby.",
  "Keep a positive attitude in challenging times.",
  "Strive for continuous improvement.",
  "Accept that failure is a part of success.",
  "Stay humble, no matter your achievements.",
  "Invest in experiences over possessions.",
  "Practice effective communication.",
  "Be mindful of your environmental impact.",
  "Learn to manage stress in healthy ways.",
  "Don't be afraid to express your creativity.",
  "Seek opportunities for collaboration.",
  "Set clear boundaries for yourself.",
  "Learn to delegate tasks when necessary.",
  "Celebrate the success of others.",
  "Don't be afraid to stand up for what's right.",
  "Learn to manage conflict peacefully.",
  "Cultivate a positive and optimistic mindset.",
  "Keep a journal to reflect on your thoughts.",
  "Exercise regularly for both physical and mental health.",
  "Stay true to your principles.",
  "Stay organized to reduce stress.",
  "Build a strong support system.",
  "Take time to disconnect from technology.",
  "Learn to appreciate and enjoy solitude.",
  "Take pride in your accomplishments.",
  "Practice humility in your achievements.",
  "Learn to budget and manage your finances.",
  "Set aside time for hobbies and passions.",
  "Be mindful of your online presence.",
  "Learn to cook and enjoy homemade meals.",
  "Embrace diversity and inclusivity.",
  "Practice patience in all aspects of life.",
  "Be conscious of your body language.",
  "Learn to negotiate effectively.",
  "Take the initiative to solve problems.",
  "Stay true to your personal style.",
  "Embrace failure as a learning opportunity.",
  "Surround yourself with positive affirmations.",
  "Be mindful of your energy and where you invest it.",
  "Don't be afraid to seek professional help.",
  "Find joy in the little things.",
  "Learn to let go of things beyond your control.",
  "Invest time in building a strong foundation.",
  "Stay committed to your long-term goals.",
  "Embrace moments of uncertainty as opportunities.",
  "Celebrate diversity and appreciate different perspectives.",
  "Find joy in giving back to your community.",
  "Cultivate a sense of wonder and curiosity.",
  "Express gratitude for the people in your life.",
  "Be mindful of your body's signals and take breaks.",
  "Learn to manage expectations, both yours and others'.",
  "Be conscious of your environmental impact.",
  "Practice kindness, even in challenging situations.",
  "Strive for a healthy work-life balance.",
  "Learn to prioritize tasks effectively.",
];

adviceBtn.addEventListener("click", () => {
  const advice = randomChose(adviceArray);
  adviceEL.textContent = advice;
});

Add_Advice.addEventListener("click", () => {
  windowEl.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  windowEl.classList.toggle("hidden");
});

saveBtn.addEventListener("click", () => {
  adviceArray.push(document.getElementById("Input").value);
});
