import { ShinyBadge } from './ShinyBadge';
import { GradienBadge } from './GradientBadge';

export default function ButtonSection() {
  return (
    <div className="flex gap-4">
        <ShinyBadge />
        <GradienBadge />
    </div>
  );
}
