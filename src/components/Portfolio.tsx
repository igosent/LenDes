import { motion } from "motion/react";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ZoomIn } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const projects = [
  {
    id: 1,
    title: "Przyklad 1", 
    category: "mieszkanie",
    image : "/images/5.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Przyklad 2",
    category: "dom",
    image : "/images/6.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Przyklad 3",
    category: "mieszkanie",
    image : "/images/7.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Przyklad 4",
    category: "dom",
    image : "/images/8.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Przyklad 5",
    category: "mieszkanie",
    image : "/images/9.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "Przyklad 6 ",
    category: "dom",
    image : "/images/10.jpg",
    size: "large",
  },
  {
    id: 7,
    title: "Przyklad 7",
    category: "zewnetrzne",
    image : "/images/11.jpg",
    size: "small",
  },
  {
    id: 8,
    title: "Przyklad 8",
    category: "zewnetrzne",
    image : "/images/12.jpg",
    size: "small",
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeTab, setActiveTab] = useState("wszystkie");

  const filteredProjects = activeTab === "wszystkie" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <>
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-gray-600 text-sm tracking-wider">
                PORTFOLIO
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <h2 className="text-gray-900 mb-4">Nasze realizacje</h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Każdy projekt to unikalna historia połączenia wizji klienta z naszą ekspertyzą
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
                <TabsList className="bg-white">
                  <TabsTrigger value="wszystkie">Wszystkie</TabsTrigger>
                  <TabsTrigger value="mieszkanie">Mieszkania</TabsTrigger>
                  <TabsTrigger value="dom">Domy</TabsTrigger>
                  <TabsTrigger value="zewnetrzne">Zewnętrzne</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`group cursor-pointer relative overflow-hidden bg-gray-900 ${
                  project.size === "large" 
                    ? "md:col-span-2 md:row-span-2" 
                    : project.size === "medium"
                    ? "md:col-span-2"
                    : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative ${
                  project.size === "large" ? "aspect-square" : "aspect-[4/3]"
                }`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-amber-500 text-sm mb-2 uppercase tracking-wider">
                        {project.category}
                      </p>
                      <h3 className="text-white mb-4">{project.title}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="inline-flex items-center gap-2 text-white">
                          <ZoomIn className="h-4 w-4" />
                          <span className="text-sm">Zobacz projekt</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 bg-gray-900">
          {selectedProject && (
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto"
              />
              <div className="p-8 bg-gray-900 text-white">
                <p className="text-amber-500 mb-2 uppercase tracking-wider text-sm">
                  {selectedProject.category}
                </p>
                <h2 className="text-white">{selectedProject.title}</h2>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
