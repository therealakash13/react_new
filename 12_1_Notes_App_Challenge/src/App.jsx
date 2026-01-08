import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const notesData = [
    {
      dateCreated: "2026-01-05T10:30:00Z",
      title: "Project Kickoff Meeting",
      content:
        "Today we held the initial kickoff for the new app development project. The team discussed key objectives, timelines, and resource allocation. Everyone seems motivated, and we outlined the MVP features clearly.\n\nChallenges include tight deadlines and integration with third-party APIs. We assigned roles: I'm leading the frontend, while Sarah handles backend. Next steps involve setting up the repo and first sprint planning.\n\nOverall, a productive start. Looking forward to the prototype demo next week.",
      timeLastUpdated: "2026-01-08T14:20:00Z",
    },
    {
      dateCreated: "2026-01-06T09:15:00Z",
      title: "Grocery Shopping List",
      content:
        "Don't forget essentials for the week: milk, eggs, bread, and fresh veggies. Also, pick up pasta, tomato sauce, and cheese for dinner ideas. Check for any sales on fruits.\n\nFor snacks: nuts, yogurt, and dark chocolate. Household items: toilet paper, detergent, and dish soap. Budget under 2000 INR.\n\nAdded protein: chicken breast and lentils.",
      timeLastUpdated: "2026-01-08T16:45:00Z",
    },
    {
      dateCreated: "2026-01-04T16:45:00Z",
      title: "React Hooks Best Practices",
      content:
        "When using useState, always provide a functional update for state derived from previous state. This prevents stale closures. For example, use setCount(prev => prev + 1) instead of setCount(count + 1).\n\nuseEffect dependencies: include all values from the effect that change. ESLint plugin helps catch misses. Custom hooks encapsulate reusable logic cleanly.\n\nPerformance tip: useCallback and useMemo judiciously to avoid unnecessary re-renders.",
      timeLastUpdated: "2026-01-07T11:10:00Z",
    },
    {
      dateCreated: "2026-01-07T13:20:00Z",
      title: "Delhi Traffic Observations",
      content:
        "Morning commute from South Delhi to Noida took 90 minutes due to construction on DND Flyway. Suggest leaving by 7 AM to beat the rush. Metro alternative is faster but crowded.\n\nApp idea: real-time traffic heatmap integrated with public transport schedules. Would save hours weekly.\n\nEvening return smoother; aim for post-8 PM.",
      timeLastUpdated: "2026-01-08T17:15:00Z",
    },
    {
      dateCreated: "2026-01-03T20:10:00Z",
      title: "Workout Routine Update",
      content:
        "Started a new 4-day split: push, pull, legs, rest. Push day includes bench press 3x8, overhead press, and tricep dips. Feeling stronger already after two sessions.\n\nNutrition: upped protein to 150g daily with whey shakes and paneer. Track macros via app. Goal: gain 5kg lean muscle by March.\n\nCardio twice weekly for heart health.",
      timeLastUpdated: "2026-01-08T09:30:00Z",
    },
    {
      dateCreated: "2026-01-02T11:05:00Z",
      title: "Book Summary: Atomic Habits",
      content:
        "James Clear's book emphasizes small, compounding changes. Key: make habits obvious, attractive, easy, satisfying. Habit stacking links new to existing routines.\n\nIdentity shift: become the type of person who does the habit, not just do it. Environment design trumps willpower. Track streaks visually for motivation.\n\nApplied: 2-minute rule for starting tasks.",
      timeLastUpdated: "2026-01-06T18:40:00Z",
    },
    {
      dateCreated: "2026-01-06T15:50:00Z",
      title: "Budget Review January",
      content:
        "Income: 85,000 INR salary. Expenses so far: rent 25k, groceries 8k, utilities 5k, transport 3k. Savings: 20k transferred.\n\nDining out creeping up at 4k; cut to 2k next week. Investments: added 5k to mutual fund. Aim for 30k savings by month-end.\n\nTrack daily spends via app.",
      timeLastUpdated: "2026-01-08T12:25:00Z",
    },
    {
      dateCreated: "2026-01-01T22:30:00Z",
      title: "New Year Resolutions",
      content:
        "1. Read 12 books. 2. Exercise 4x/week. 3. Learn advanced JS. 4. Save 3 lakhs. 5. Travel to Himachal.\n\nMake SMART: specific, measurable. Weekly review Sundays. App reminders set.\n\nProgress: gym 3/4 this week, book 50 pages done.",
      timeLastUpdated: "2026-01-08T10:15:00Z",
    },
    {
      dateCreated: "2026-01-05T18:40:00Z",
      title: "Recipe: Butter Chicken",
      content:
        "Marinate 500g chicken in yogurt, ginger-garlic paste, spices for 2 hours. Fry onions, add tomato puree, cashew paste, cream. Simmer chicken in gravy 20 mins.\n\nServe with naan or rice. Garnish coriander. Prep time 30 mins, cook 40 mins. Serves 4.\n\nTips: use fresh garam masala for best flavor.",
      timeLastUpdated: "2026-01-07T19:55:00Z",
    },
    {
      dateCreated: "2026-01-07T08:25:00Z",
      title: "Note Taking App Ideas",
      content:
        "Enhance with tags, search, dark mode. Add voice-to-text, image OCR for handwritten notes. Sync across devices via cloud.\n\nMonetize: freemium with premium export/PDF. Analytics on note patterns for insights.\n\nUser feedback: simplify UI, faster load times.",
      timeLastUpdated: "2026-01-08T17:30:00Z",
    },
  ];

  return (
    <div className="bg-bg h-screen w-full flex p-5 text-primary mx-auto">
      <Sidebar />
      <div className="flex-1 h-full flex flex-col">
        <Navbar />
        <Main notes={notesData} />
      </div>
    </div>
  );
}

// Add Note creation (modal) functionality