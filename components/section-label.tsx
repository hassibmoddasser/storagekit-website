export default function SectionLabel({
  label,
  heading,
}: {
  label: string;
  heading: string;
}) {
  return (
    <div className="text-center">
      <p className="text-syntax-comment font-mono text-xs">
        <span className="text-syntax-punct">{"<"}</span>
        <span className="text-syntax-key">section</span>
        <span className="text-syntax-punct">{"="}</span>
        <span className="text-syntax-string">&quot;{label}&quot;</span>
        <span className="text-syntax-punct">{"/>"}</span>
      </p>
      <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {heading}
      </h2>
    </div>
  );
}
