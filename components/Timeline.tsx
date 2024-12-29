import { Card, CardContent } from "@/components/ui/card"

type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  location: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Software Engineer I",
    organization: "Ascent Risk and Resilience Software",
    period: "Oct 2024 - Ongoing",
    location: "Gurugram",
    description: "Building frontend with React, Next.js, Tailwind CSS, TypeScript, and Shadcn."
  },
  {
    title: "Web Development Intern",
    organization: "DAYNULM, Ministry of Housing and Urban Affairs",
    period: "April 2023 - June 2023",
    location: "New Delhi",
    description: "Developed responsive website using ReactJS."
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    organization: "Jaypee Institute of Information Technology",
    period: "Aug 2020 - Jun 2024",
    location: "Noida",
    description: "CGPA: 7.6"
  }
]

export function Timeline() {
  return (
    <div className="space-y-8">
      {timelineItems.map((item, index) => (
        <Card key={index} className="bg-zinc-900 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.organization}</p>
            <p className="text-sm text-gray-400">{item.period} | {item.location}</p>
            {item.description && (
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

