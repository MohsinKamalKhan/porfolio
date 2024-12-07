import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface SkillBadgeProps {
  name: string
  icon: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
      <Image src={icon} alt={name} width={16} height={16} />
      {name}
    </Badge>
  )
}

