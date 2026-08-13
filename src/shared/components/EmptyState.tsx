interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps): JSX.Element {
  return (
    <section className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </section>
  );
}
