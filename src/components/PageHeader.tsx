import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: 'clamp(12rem, 25vh, 20rem)' }}
    >
      {/* Batik pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%231A1612' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <h1
          className="font-display font-medium text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-[#1A1612]"
        >
          {title}
        </h1>
        <nav className="mt-3 flex items-center justify-center gap-2 font-body text-[0.875rem] text-[rgba(26,22,18,0.5)]">
          <Link to="/" className="hover:text-[#8B6914] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-[#1A1612]">{title}</span>
        </nav>
      </div>
    </div>
  );
}
