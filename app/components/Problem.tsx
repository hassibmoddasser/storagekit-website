export default function Problem() {
  return (
    <section className="border-t border-border/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Debugging storage shouldn&apos;t slow you down
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Manually clearing Local storage to test different states. Editing
            cookies one by one to switch accounts. Copying storage values to
            decode JWTs on external sites.
          </p>
          <p>
            It&apos;s tedious work that interrupts your flow.{" "}
            <span className="font-medium text-foreground">
              StorageKit eliminates the friction
            </span>{" "}
            so you can focus on building.
          </p>
        </div>
      </div>
    </section>
  );
}
