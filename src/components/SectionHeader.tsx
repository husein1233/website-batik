interface SectionHeaderProps {
  label: string;
  heading: string;
  subtext?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  subtext,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      <span className="font-body font-medium text-[0.75rem] text-[#8B6914] uppercase tracking-[0.1em]">
        {label}
      </span>
      <h2
        className={`mt-3 font-display font-medium text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.015em] text-[#1A1612] ${
          align === 'center' ? 'mx-auto max-w-[600px]' : 'max-w-[600px]'
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`mt-3 font-body text-[1rem] text-[rgba(26,22,18,0.6)] leading-relaxed ${
            align === 'center' ? 'mx-auto max-w-[560px]' : 'max-w-[560px]'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
