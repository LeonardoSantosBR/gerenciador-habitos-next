import Image from "next/image";
import DayStates from "@/components/day-state";
import EmptyMessage from "@/components/empty-message";

export default function Home() {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const habits = {
    "correr 5km": {
      "2025-07-10": false,
      "2025-07-09": true,
      "2025-07-08": true,
    },
    "acordar 6am": {
      "2025-07-10": true,
      "2025-07-09": false,
      "2025-07-08": true,
    },
  };

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      <EmptyMessage habits={habits} />
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => {
          return (
            <div key={habit}>
              <div className="flex justify-between items-center">
                <span className="text-xl font-light text-white font-sans">
                  {habit}
                </span>
                <button>
                  <Image
                    src="/images/delete.svg"
                    alt="deletar hábito"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className="grid grid-cols-7 bg-neutral-800 rounded-md p-3">
                {weekDays.map((wk) => {
                  return (
                    <div key={wk} className="flex flex-col">
                      <span className="font-display text-xs text-white pb-1">
                        {wk}
                      </span>
                      <DayStates day={true} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </main>
  );
}
