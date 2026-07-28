// components/layout/PlaceholderPage.tsx
import { WrenchOff } from 'lucide-react';

export function PlaceholderPage() {
  return (
    <div className="flex h-[calc(100dvh-85px)] flex-col items-center justify-center text-center">
      <WrenchOff size={32} className="mb-3 text-primary" />
      <h2 className="mt-1 text-sm font-semibold text-paragraph">Comming Soon</h2>
    </div>
  );
}