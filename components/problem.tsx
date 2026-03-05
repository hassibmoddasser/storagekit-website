export default function Problem() {
  return (
    <section className="bg-muted/40 relative overflow-hidden rounded-4xl py-14 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="bg-accent/5 absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Debugging storage shouldn&apos;t slow you down
        </h2>
        <div className="text-muted-foreground mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Manually clearing Local storage to test different states. Editing
            cookies one by one to switch accounts. Copying storage values to
            decode JWTs on external sites.
          </p>
          <p>
            It&apos;s tedious work that interrupts your flow.{" "}
            <span className="text-foreground font-medium">
              StorageKit eliminates the friction
            </span>{" "}
            so you can focus on building.
          </p>
        </div>
      </div>
    </section>
  );
}
