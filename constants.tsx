
import { 
  Briefcase, 
  Rocket, 
  Cpu, 
  Settings, 
  TrendingUp, 
  Users,
  Layers,
  Building,
} from 'lucide-react';
import { NavItem, HomeService, Project, Metric, Step, TeamMember, ServiceSection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/about' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.portfolio', path: '/portfolio' },
  { label: 'nav.howWeWork', path: '/methodology' },
  { label: 'nav.impact', path: '/impact' },
  { label: 'nav.contact', path: '/contact' },
];

export const HOME_SERVICES: HomeService[] = [
  {
    title: 'home.services.build.title',
    icon: Rocket,
    points: [
      'home.services.build.points.0',
      'home.services.build.points.1',
      'home.services.build.points.2',
      'home.services.build.points.3',
      'home.services.build.points.4',
      'home.services.build.points.5',
    ]
  },
  {
    title: 'home.services.operate.title',
    icon: Settings,
    points: [
      'home.services.operate.points.0',
      'home.services.operate.points.1',
      'home.services.operate.points.2',
      'home.services.operate.points.3',
      'home.services.operate.points.4',
    ]
  },
  {
    title: 'home.services.design.title',
    icon: Layers,
    points: [
      'home.services.design.points.0',
      'home.services.design.points.1',
      'home.services.design.points.2',
      'home.services.design.points.3',
      'home.services.design.points.4',
      'home.services.design.points.5',
    ]
  },
  {
    title: 'home.services.develop.title',
    icon: Cpu,
    points: [
        'home.services.develop.points.0',
        'home.services.develop.points.1',
        'home.services.develop.points.2',
    ]
  },
  {
    title: 'home.services.drive.title',
    icon: TrendingUp,
    points: [
      'home.services.drive.points.0',
      'home.services.drive.points.1',
      'home.services.drive.points.2',
      'home.services.drive.points.3',
      'home.services.drive.points.4',
    ]
  }
];

export const SERVICES: ServiceSection[] = [
  {
    id: 'venture-building',
    title: 'services.ventureBuilding.title',
    icon: Rocket,
    description: 'services.ventureBuilding.description',
    features: [
      'services.ventureBuilding.features.0',
      'services.ventureBuilding.features.1',
      'services.ventureBuilding.features.2',
      'services.ventureBuilding.features.3',
      'services.ventureBuilding.features.4',
      'services.ventureBuilding.features.5',
    ]
  },
  {
    id: 'operations-partner',
    title: 'services.operationsPartner.title',
    icon: Settings,
    description: 'services.operationsPartner.description',
    features: [
      'services.operationsPartner.features.0',
      'services.operationsPartner.features.1',
      'services.operationsPartner.features.2',
      'services.operationsPartner.features.3',
      'services.operationsPartner.features.4',
      'services.operationsPartner.features.5',
    ]
  },
  {
    id: 'tech-development',
    title: 'services.techDevelopment.title',
    icon: Cpu,
    description: 'services.techDevelopment.description',
    features: [
      'services.techDevelopment.features.0',
      'services.techDevelopment.features.1',
      'services.techDevelopment.features.2',
      'services.techDevelopment.features.3',
      'services.techDevelopment.features.4',
      'services.techDevelopment.features.5',
    ]
  },
  {
    id: 'growth-services',
    title: 'services.growth.title',
    icon: TrendingUp,
    description: 'services.growth.description',
    features: [
      'services.growth.features.0',
      'services.growth.features.1',
      'services.growth.features.2',
      'services.growth.features.3',
      'services.growth.features.4',
      'services.growth.features.5',
    ]
  },
  {
    id: 'startup-investor-services',
    title: 'services.startupInvestor.title',
    icon: Briefcase,
    description: 'services.startupInvestor.description',
    features: [
      'services.startupInvestor.features.0',
      'services.startupInvestor.features.1',
      'services.startupInvestor.features.2',
      'services.startupInvestor.features.3',
      'services.startupInvestor.features.4',
      'services.startupInvestor.features.5',
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'marsool',
    name: 'project.marsool.name',
    tagline: 'project.marsool.tagline',
    sector: 'project.marsool.sector',
    overview: 'project.marsool.overview',
    arklivsRole: [
      'project.marsool.role.0',
      'project.marsool.role.1',
      'project.marsool.role.2',
      'project.marsool.role.3',
      'project.marsool.role.4',
    ],
    marketValue: 'project.marsool.marketValue',
    logo: 'from-red-500 to-rose-600',
    color: '#EF4444',
    isLogoAsset: false,
  },
  {
    id: 'thub',
    name: 'project.thub.name',
    tagline: 'project.thub.tagline',
    sector: 'project.thub.sector',
    overview: 'project.thub.overview',
    arklivsRole: [
      'project.thub.role.0',
      'project.thub.role.1',
      'project.thub.role.2',
      'project.thub.role.3',
      'project.thub.role.4',
    ],
    marketValue: 'project.thub.marketValue',
    logo: 'from-green-500 to-emerald-600',
    color: '#22C55E',
    isLogoAsset: false,
  },
  {
    id: 'commex',
    name: 'project.commex.name',
    tagline: 'project.commex.tagline',
    sector: 'project.commex.sector',
    overview: 'project.commex.overview',
    arklivsRole: [
      'project.commex.role.0',
      'project.commex.role.1',
      'project.commex.role.2',
      'project.commex.role.3',
      'project.commex.role.4',
    ],
    marketValue: 'project.commex.marketValue',
    logo: 'from-blue-500 to-indigo-600',
    color: '#3B82F6',
    isLogoAsset: false,

  },
  {
    id: 'new-horizon',
    name: 'project.newHorizon.name',
    tagline: 'project.newHorizon.tagline',
    sector: 'project.newHorizon.sector',
    overview: 'project.newHorizon.overview',
     arklivsRole: [
      'project.newHorizon.role.0',
      'project.newHorizon.role.1',
      'project.newHorizon.role.2',
      'project.newHorizon.role.3',
      'project.newHorizon.role.4',
    ],
    marketValue: 'project.newHorizon.marketValue',
    logo: 'from-blue-900 to-yellow-400',
    color: '#1E3A8A',
    isLogoAsset: false,
  }
];

export const METHODOLOGY_STEPS: Step[] = [
  {
    id: 1,
    title: 'methodology.steps.1.title',
    description: 'methodology.steps.1.description',
  },
  {
    id: 2,
    title: 'methodology.steps.2.title',
    description: 'methodology.steps.2.description',
  },
  {
    id: 3,
    title: 'methodology.steps.3.title',
    description: 'methodology.steps.3.description',
  },
  {
    id: 4,
    title: 'methodology.steps.4.title',
    description: 'methodology.steps.4.description',
  },
  {
    id: 5,
    title: 'methodology.steps.5.title',
    description: 'methodology.steps.5.description',
  },
  {
    id: 6,
    title: 'methodology.steps.6.title',
    description: 'methodology.steps.6.description',
  }
];

export const IMPACT_METRICS: Metric[] = [
  { label: 'impact.metrics.ventures.label', value: '4+', description: 'impact.metrics.ventures.description' },
  { label: 'impact.metrics.sectors.label', value: '5', description: 'impact.metrics.sectors.description' },
  { label: 'impact.metrics.experts.label', value: '15+', description: 'impact.metrics.experts.description' },
  { label: 'impact.metrics.systems.label', value: '10+', description: 'impact.metrics.systems.description' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'team.ahmed.name',
    role: 'team.ahmed.role',
    bio: 'team.ahmed.bio',
    roleKey: 'CEO'
  },
  {
    id: '2',
    name: 'team.mohamedA.name',
    role: 'team.mohamedA.role',
    bio: 'team.mohamedA.bio',
    roleKey: 'CTO'
  },
  {
    id: '3',
    name: 'team.moad.name',
    role: 'team.moad.role',
    bio: 'team.moad.bio',
    roleKey: 'CFO'
  },
  {
    id: '4',
    name: 'team.mohamedE.name',
    role: 'team.mohamedE.role',
    bio: 'team.mohamedE.bio',
    roleKey: 'COO'
  }
];