"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Database,
  Code,
  Server,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cloud,
  Snowflake,
  Terminal,
  Bot,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [menuOpen, setMenuOpen] = useState(false)
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactClick = () => {
    toast({
      title: "Contact request sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 3000,
    })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950 text-white font-pixel">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 right-0 z-50 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:bg-purple-800/50"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <NavItem section="hero" label="HOME" active={activeSection === "hero"} onClick={handleSectionClick} />
          <NavItem section="about" label="ABOUT" active={activeSection === "about"} onClick={handleSectionClick} />
          <NavItem section="skills" label="SKILLS" active={activeSection === "skills"} onClick={handleSectionClick} />
          <NavItem
            section="experience"
            label="QUESTS"
            active={activeSection === "experience"}
            onClick={handleSectionClick}
          />
          <NavItem
            section="education"
            label="TRAINING"
            active={activeSection === "education"}
            onClick={handleSectionClick}
          />
          <NavItem
            section="contact"
            label="CONTACT"
            active={activeSection === "contact"}
            onClick={handleSectionClick}
          />
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-black/30 backdrop-blur-sm border-r border-purple-500/30 flex-col justify-center z-40">
        <div className="space-y-8 px-6">
          <NavItem section="hero" label="HOME" active={activeSection === "hero"} onClick={handleSectionClick} />
          <NavItem section="about" label="ABOUT" active={activeSection === "about"} onClick={handleSectionClick} />
          <NavItem section="skills" label="SKILLS" active={activeSection === "skills"} onClick={handleSectionClick} />
          <NavItem
            section="experience"
            label="QUESTS"
            active={activeSection === "experience"}
            onClick={handleSectionClick}
          />
          <NavItem
            section="education"
            label="TRAINING"
            active={activeSection === "education"}
            onClick={handleSectionClick}
          />
          <NavItem
            section="contact"
            label="CONTACT"
            active={activeSection === "contact"}
            onClick={handleSectionClick}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6 text-center relative z-10"
          >
            <div className="inline-block border-2 border-purple-500 p-1 mb-6">
              <h2 className="text-purple-400 text-lg md:text-xl bg-black/50 px-4 py-1">SR DATA ENGINEER</h2>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              DATA WIZARD
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
              14+ years of data engineering expertise across diverse industries
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => handleSectionClick("about")}
                className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-400 px-6 py-3 rounded-none"
              >
                START ADVENTURE
              </Button>
              <Button
                onClick={() => handleSectionClick("contact")}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-900/30 px-6 py-3 rounded-none"
              >
                CONTACT
              </Button>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <div className="w-6 h-6 border-b-2 border-r-2 border-purple-400 transform rotate-45"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 relative">
          <div className="container px-4 md:px-6">
            <SectionHeader title="ABOUT" subtitle="CHARACTER STATS" />

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="border-2 border-purple-500 p-6 bg-black/40">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">CHARACTER PROFILE</h3>
                  <p className="text-gray-300 mb-4">
                    Experienced Data Engineer with over 14 years of consulting expertise across diverse industries.
                    Achieved a 38% reduction in cloud costs at Leapfin, saving $25K monthly through strategic
                    optimization.
                  </p>
                  <p className="text-gray-300">
                    Passionate about AI and skilled in solving complex challenges with innovative solutions. Proactive
                    learner dedicated to exploring new frameworks, automating tasks, and designing robust architectures.
                  </p>
                </div>

                <div className="border-2 border-purple-500 p-6 bg-black/40">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">SPECIAL ABILITIES</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span> Cloud Cost Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span> AI-Powered Solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span> Scalable Data Pipelines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span> CLI Automation Mastery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span> Multi-tenant Data Architecture
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 border-4 border-purple-500 bg-black/40 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Data Engineer Profile"
                      width={280}
                      height={280}
                      className="p-2 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-full h-full border-4 border-cyan-400"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-purple-600"></div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 border-2 border-purple-500 p-6 bg-black/40"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">LANGUAGE SKILLS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">English</span>
                    <span className="text-cyan-400">C1/C2</span>
                  </div>
                  <div className="h-2 bg-gray-800">
                    <div className="h-full w-[90%] bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Spanish</span>
                    <span className="text-cyan-400">Native</span>
                  </div>
                  <div className="h-2 bg-gray-800">
                    <div className="h-full w-full bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center py-20 relative bg-black/30">
          <div className="container px-4 md:px-6">
            <SectionHeader title="SKILLS" subtitle="TECH TREE" />

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-purple-400 border-b-2 border-purple-500 pb-2">CLOUD & DATA</h3>

                <SkillBar name="AWS" value={95} icon={<Cloud className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="Snowflake" value={90} icon={<Snowflake className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="Python" value={90} icon={<Code className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="Terraform" value={85} icon={<Server className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="DBT" value={85} icon={<Database className="h-5 w-5 text-cyan-400" />} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-purple-400 border-b-2 border-purple-500 pb-2">TECHNOLOGIES</h3>

                <SkillBar name="Airflow" value={85} icon={<Cpu className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="Scala" value={80} icon={<Code className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="Elasticsearch" value={80} icon={<Database className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="CLI Automation" value={95} icon={<Terminal className="h-5 w-5 text-cyan-400" />} />
                <SkillBar name="AI/Langchain" value={85} icon={<Bot className="h-5 w-5 text-cyan-400" />} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-purple-400 border-b-2 border-purple-500 pb-2 mb-8">
                ADDITIONAL TECHNOLOGIES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                <TechSkill name="Spark" level={4} />
                <TechSkill name="Cassandra" level={4} />
                <TechSkill name="Kafka" level={4} />
                <TechSkill name="BigQuery" level={5} />
                <TechSkill name="Tableau" level={4} />
                <TechSkill name="Great Expectations" level={5} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center py-20 relative">
          <div className="container px-4 md:px-6">
            <SectionHeader title="EXPERIENCE" subtitle="COMPLETED QUESTS" />

            <div className="mt-12 space-y-12">
              <ExperienceItem
                title="SR Data Engineer"
                company="Leapfin, San Francisco, CA"
                period="08/2020 - Present"
                description={[
                  "Spearheaded cloud cost optimization, slashing monthly expenses from $65K to $40K—a 38% reduction—saving $25K monthly",
                  "Architected scalable data pipelines using AWS, Snowflake, and Python (DBT, Great Expectations) to handle high-volume, multi-tenant data",
                  "Built AI-powered report chatbots with Langchain, improving data accessibility and user engagement",
                  "Executed seamless version migrations for data infrastructure, ensuring high availability and minimal downtime",
                  "Enhanced Snowflake performance through cost optimizations, boosting query efficiency",
                  "Automated repetitive tasks with Linux CLI commands, driving operational efficiency and reducing manual effort",
                ]}
                achievement={{
                  icon: <DollarSign className="h-8 w-8 text-yellow-400" />,
                  text: "38% Cloud Cost Reduction",
                  subtext: "Saved $25K monthly",
                }}
              />

              <ExperienceItem
                title="Analytics Engineer Consultant"
                company="Freelance, Buenos Aires, Argentina"
                period="05/2019 - 07/2020"
                description={[
                  "Partnered with clients like Mercado Libre, Unilever, and Avon to deliver tailored data solutions",
                  "Developed data pipelines and ETL processes using Python, BigQuery, and Snowflake to integrate diverse data sources",
                  "Created actionable insights with Tableau, empowering data-driven decisions for clients",
                ]}
              />

              <ExperienceItem
                title="Data Engineer & Data Analyst"
                company="Core BI, Buenos Aires, Argentina"
                period="08/2016 - 04/2019"
                description={[
                  "Delivered data engineering and analytics solutions for clients like Nike, FOX, and Techint",
                  "Built data pipelines using Python, AWS, Spark, and Cassandra to process large datasets efficiently",
                  "Designed interactive Tableau dashboards for actionable stakeholder insights",
                ]}
              />

              <ExperienceItem
                title="Senior BI Consultant"
                company="Blue Patagon, Buenos Aires, Argentina"
                period="02/2009 - 07/2016"
                description={[
                  "Provided BI solutions for clients including Frávega, ICBC, and Telecom",
                  "Developed data warehouses and ETL processes with SQL Server, Oracle, and Teradata",
                  "Leveraged Python and Spark for advanced data processing and analysis",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center py-20 relative bg-black/30">
          <div className="container px-4 md:px-6">
            <SectionHeader title="EDUCATION" subtitle="TRAINING GROUNDS" />

            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border-2 border-purple-500 p-6 bg-black/40 relative max-w-2xl mx-auto"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 px-4 py-2">
                  <h4 className="text-white font-bold">2003 - 2008</h4>
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Bachelor Degree in Computer Science</h3>
                  <h4 className="text-xl text-cyan-400 mb-4">UTN, Argentina</h4>
                  <p className="text-gray-300">
                    Comprehensive education in computer science fundamentals, algorithms, data structures, and software
                    engineering principles.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Database Systems</Badge>
                    <Badge>Algorithms</Badge>
                    <Badge>Software Engineering</Badge>
                    <Badge>Data Structures</Badge>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-purple-400 border-b-2 border-purple-500 pb-2 mb-8">
                CONTINUOUS LEARNING
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <LearningCard
                  name="AI & Machine Learning"
                  description="Advanced techniques in AI, focusing on LLMs and Langchain for chatbot development"
                  year="2023"
                />
                <LearningCard
                  name="Cloud Cost Optimization"
                  description="Strategies for reducing cloud infrastructure costs while maintaining performance"
                  year="2022"
                />
                <LearningCard
                  name="Data Engineering Best Practices"
                  description="Modern approaches to building scalable, maintainable data pipelines"
                  year="2021"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20 relative">
          <div className="container px-4 md:px-6">
            <SectionHeader title="CONTACT" subtitle="SEND A MESSAGE" />

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="border-2 border-purple-500 p-6 bg-black/40">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">GET IN TOUCH</h3>
                  <p className="text-gray-300 mb-6">
                    Interested in working together or have a question about data engineering solutions? Feel free to
                    reach out!
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:contact@dataengineer.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-cyan-400" />
                      <span>contact@dataengineer.com</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/dataengineer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-cyan-400" />
                      <span>linkedin.com/in/dataengineer</span>
                    </a>
                    <a
                      href="https://github.com/dataengineer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github className="h-5 w-5 text-cyan-400" />
                      <span>github.com/dataengineer</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border-2 border-purple-500 p-6 bg-black/40"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">SEND MESSAGE</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleContactClick()
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-900 border border-purple-500 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-900 border border-purple-500 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-gray-900 border border-purple-500 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white border border-purple-400 py-3 rounded-none"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Component for navigation items
function NavItem({
  section,
  label,
  active,
  onClick,
}: { section: string; label: string; active: boolean; onClick: (section: string) => void }) {
  return (
    <button
      onClick={() => onClick(section)}
      className={cn(
        "group flex items-center gap-2 text-lg font-medium transition-colors",
        active ? "text-purple-400" : "text-gray-400 hover:text-white",
      )}
    >
      <span
        className={cn(
          "h-1 w-1 rounded-full transition-all",
          active ? "bg-purple-400 scale-150" : "bg-gray-600 group-hover:bg-white",
        )}
      ></span>
      {label}
    </button>
  )
}

// Component for section headers
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <h4 className="text-sm md:text-base text-cyan-400 mb-2">{subtitle}</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500"></span>
        </h2>
      </motion.div>
    </div>
  )
}

// Component for skill bars
function SkillBar({ name, value, icon }: { name: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-gray-300">{name}</span>
        </div>
        <span className="text-cyan-400">{value}%</span>
      </div>
      <div className="h-2 bg-gray-800 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-cyan-500"
        ></motion.div>
      </div>
    </div>
  )
}

// Component for tech skills
function TechSkill({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center mb-2 bg-black/40">
        <Database className="h-8 w-8 text-cyan-400" />
      </div>
      <h4 className="text-gray-300 text-center">{name}</h4>
      <div className="flex mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={cn("w-2 h-2 mx-0.5 rounded-full", i < level ? "bg-cyan-400" : "bg-gray-700")}></div>
        ))}
      </div>
    </div>
  )
}

// Component for experience items
function ExperienceItem({
  title,
  company,
  period,
  description,
  achievement,
}: {
  title: string
  company: string
  period: string
  description: string[]
  achievement?: {
    icon: React.ReactNode
    text: string
    subtext: string
  }
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-[200px_1fr] gap-6 relative"
    >
      <div className="hidden md:block absolute left-[100px] top-0 bottom-0 w-0.5 bg-purple-500"></div>

      <div className="text-right hidden md:block">
        <div className="inline-block bg-purple-600 px-4 py-2">
          <h4 className="text-white font-bold">{period}</h4>
        </div>
      </div>

      <div className="relative border-2 border-purple-500 p-6 bg-black/40">
        <div className="md:hidden mb-2 inline-block bg-purple-600 px-3 py-1">
          <h4 className="text-white text-sm font-bold">{period}</h4>
        </div>
        <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-purple-600 border-2 border-black hidden md:flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <h3 className="text-2xl font-bold text-purple-400 mb-1">{title}</h3>
        <h4 className="text-xl text-cyan-400 mb-4">{company}</h4>

        {achievement && (
          <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-500 flex items-center gap-3">
            {achievement.icon}
            <div>
              <p className="font-bold text-yellow-400">{achievement.text}</p>
              <p className="text-sm text-yellow-300">{achievement.subtext}</p>
            </div>
          </div>
        )}

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-cyan-400 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// Component for learning cards
function LearningCard({ name, description, year }: { name: string; description: string; year: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-2 border-purple-500 p-4 bg-black/40 hover:bg-black/60 transition-colors"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold text-purple-400">{name}</h4>
        <span className="text-cyan-400 text-sm">{year}</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

// Component for badges
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-purple-900/50 border border-purple-500 px-2 py-1 text-xs text-gray-300">
      {children}
    </span>
  )
}

