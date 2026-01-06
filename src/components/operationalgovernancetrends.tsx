export const OperationalGovernanceTrends = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Operating in a Regulated Reality
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            As operational environments become more regulated, interconnected, and scrutinized,
            leadership is increasingly defined by control, documentation, and consistency —
            not by speed or improvisation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
              What Operating Leaders Prioritize
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-left">
              <li>• Clear, enforceable work instructions</li>
              <li>• Predictable execution across shifts and teams</li>
              <li>• Safety procedures that leave little room for interpretation</li>
              <li>• Fewer ad-hoc decisions during incidents</li>
              <li>• Documentation that stands on its own</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
              Standards, Compliance & Liability
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-left">
              <li>• Formal management systems based on recognized standards</li>
              <li>• Traceable procedures and corrective actions</li>
              <li>• Verifiable training and competency records</li>
              <li>• Data protection and access control by default</li>
              <li>• Decisions that can be reconstructed after the fact</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
              Safety, Hygiene & Operational Reality
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-left">
              <li>• Safety rules must work under pressure, not only on paper</li>
              <li>• Hygiene procedures must be consistent across locations</li>
              <li>• Deviations must be logged, not normalized</li>
              <li>• Informal workarounds increase exposure</li>
              <li>• Personal accountability is moving closer to the floor</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-20 border-t border-slate-200" />

        {/* BOTTOM — TRENDS 2026+ */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-800 text-lg leading-relaxed">
            Looking ahead, the trend is clear:
            operations are expected to be explainable, auditable, and repeatable —
            even under disruption.
          </p>

          <p className="mt-6 text-slate-600 text-sm leading-relaxed">
            Organizations that succeed will be those that embed standards,
            safety, hygiene, and data discipline directly into daily execution.
            Not as overhead, but as operational structure.
          </p>
        </div>

      </div>
    </section>
  );
};
