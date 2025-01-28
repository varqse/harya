import React from "react";
import { Timeline } from "./ui/timeline";

const timelineExp = () => {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Plant Manager at Cargill Cocoa and Chocolate
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As the Plant Manager at Cargill, I oversee the entire operations of the facility in East Java, Indonesia. My role involves strategic planning and execution to ensure that production meets and exceeds nominal capacity. I have successfully transformed a previously underperforming plant into a leading facility within three years by fostering a culture of collaboration and continuous improvement. My responsibilities include managing production and technical departments, ensuring operational efficiency, and driving initiatives in inclusion and diversity within the workforce.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Operations Manager at Cargill Cocoa and Chocolate
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In my role as Operations Manager, I was responsible for the operational performance of the plant, focusing on optimizing processes and enhancing productivity. I led significant improvement projects, including the in-container sterilization process using batch retort technology. This experience deepened my understanding of how cultural dynamics and interpersonal relationships can significantly impact team performance and operational success.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
      title: "2013",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Production Manager at Cargill Cocoa and Chocolate
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As Production Manager, I played a crucial role in the turnaround of our East Java facility. I implemented effective production strategies and developed talent within the team, which contributed to transforming the plant&apos;s performance from a negative bottom line to a star performer. My focus was on building strong interpersonal connections and understanding team dynamics to drive improvements in production efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
        title: "2011",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Production and Engineering Manager at PT Indolakto
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                In this role, I managed both production and engineering teams, ensuring that operational goals were met while also focusing on process improvements. My experience in engineering management allowed me to implement innovative solutions that enhanced production capabilities and efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2009",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Production Manager at PT Indolakto
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                As Production Manager, I was responsible for overseeing daily operations and ensuring that production targets were met. I focused on optimizing processes and improving team performance, which laid the groundwork for my future roles in operations management.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2007",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  R&D Project Support Manager at PT Australia Indonesia Milk Industries
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                In this corporate role, I supported the Product Development Team by managing resources and assets across various laboratories. My responsibilities included overseeing innovation and renovation activities, which were critical in developing new products and improving existing ones.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2005",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Process Development Manager at PT Australia Indonesia Milk Industries
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                As Process Development Manager, I was responsible for developing and optimizing production processes. My work involved collaborating with cross-functional teams to implement best practices and drive efficiency in manufacturing operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2003",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Packaging Development Manager at PT Australia Indonesia Milk Industries
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                In this role, I led the packaging development initiatives, focusing on creating innovative packaging solutions that met market demands. My experience in packaging development was instrumental in enhancing product presentation and shelf life.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2001",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Packaging supervisor Manager at PT Australia Indonesia Milk Industries
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                As a Packaging Development Supervisor, I managed a team responsible for developing packaging solutions. This role provided me with foundational experience in project management and team leadership.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
      {
        title: "2001",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Management Trainee at PT Australia Indonesia Milk Industries
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Starting my career as a Management Trainee, I gained exposure to various aspects of the dairy industry, including production, engineering, and packaging. This experience laid the groundwork for my future roles in operations and management.
            </p>
            <div className="grid grid-cols-2 gap-4">
  
            </div>
          </div>
        ),
      },
  ];

  return (
    <div>
      <Timeline data={data} />
    </div>
  );
};

export default timelineExp;

