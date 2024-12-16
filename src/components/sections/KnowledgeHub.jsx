import React from "react";

export default function KnowledgeHub() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Knowledge Hub (26)</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our case studies, white papers, and product brochures,
            crafted to guide you in navigating key industry transformations and
            accelerating your path to value realization
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="white-paper">White Paper</TabsTrigger>
              <TabsTrigger value="product-brochures">
                Product Brochures
              </TabsTrigger>
            </TabsList>
          </Tabs> */}
        </div>
      </div>
    </section>
  );
}
