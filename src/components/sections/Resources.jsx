import React from "react";
import { Flex, Text, Box, Card, Inset, Strong } from "@radix-ui/themes";
import * as Tabs from "@radix-ui/react-tabs";

export default function Resources() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#006fe5] font-title font-medium text-sm uppercase tracking-wider mb-4">
            Resources
          </p>
          <h1 className="font-title text-[#1c1c1c] text-sm md:text-5xl font-medium mb-2">
            Digital Resources <br />
            for Industry Innovators
          </h1>
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
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Tabs.List className="flex max-w-screen-md" aria-label="tabs example">
            <Tabs.Trigger
              value="tab1"
              className="px-8 py-4 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:border-b-4"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className=" px-8 py-4 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:border-b-4"
            >
              Case Studies
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              className=" px-8 py-4 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:border-b-4"
            >
              White Paper
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab4"
              className="px-8 py-4 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:border-b-4"
            >
              Product Brochures
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="bg-slate-100">
            <div>
              <h2 className="text-2xl text-[56px] mb-4">
                All Resources
                <span className="text-gray-500 text-lg ml-2">(105)</span>
              </h2>
              <p className="text-gray-600">
                Discover our <span className="font-medium">case studies</span>,{" "}
                <span className="font-medium">white papers</span>, and{" "}
                <span className="font-medium">product brochures</span>, crafted
                to guide you in navigating key industry transformations and
                accelerating your path to value realization.
              </p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2" className="bg-slate-300600">
            Tab two content
          </Tabs.Content>
          <Tabs.Content value="tab3">Tab three content</Tabs.Content>
          <Tabs.Content value="tab4">brochures</Tabs.Content>
        </Tabs.Root>
        <Box maxWidth="500px" className="pt-8">
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="4">
              Lobortis egestas odio pharetra enim ut
            </Text>
            <Text as="p" size="3">
              <Strong>Typography</Strong> Fermentum aliquam turpis ultricies
              semper maecenas habitant gravida dictumst. Tellus congue est morbi
              nulla integer. Elementum, lorem quis in consequat amet, venenatis.
            </Text>
          </Card>
        </Box>
      </div>
    </section>
  );
}
