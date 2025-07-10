type HabitsType = Record<string, Record<string, boolean>>;

export default function EmptyMessage({ habits }: { habits: HabitsType }) {
  const isEmpty = !habits || Object.keys(habits).length === 0;
  if (!isEmpty) return null;

  return (
    <h1 className="mt-20 text-4xl text-white font-light font-display text-center">
      você não tem hábitos cadastrados.
    </h1>
  );
}
