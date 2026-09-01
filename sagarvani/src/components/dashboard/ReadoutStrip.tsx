import { Readout } from "@/lib/types";

export function ReadoutStrip({ readouts }: { readouts: Readout[] }) {
  return (
    <div className="h-[72px] w-full bg-bg-primary/95 backdrop-blur-sm border-b border-border flex items-center px-6 gap-8 overflow-x-auto shadow-sm">
      {readouts.map((readout, idx) => (
        <div key={idx} className="flex flex-col relative h-full justify-center">
          <div className="flex items-baseline gap-1">
            <span className="font-heading font-bold text-2xl text-foreground leading-none">{readout.value}</span>
            {readout.unit && <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{readout.unit}</span>}
          </div>
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">{readout.label}</span>
          
          {readout.isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          )}
        </div>
      ))}
    </div>
  );
}
