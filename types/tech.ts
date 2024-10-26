export interface Technology {
  name: string
  icon: string
  docs: string
  repo: string
  repl: string
  description: string
}

export interface TechCategory {
  name: string
  technologies: Technology[]
}

export interface TechData {
  categories: TechCategory[]
}