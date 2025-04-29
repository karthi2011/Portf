const projects = [
        {
          title: "Intelligent Hiring Assistant",
          description: "LLM-powered recruitment tool using Flask and React. This system leverages AI and machine learning to eliminate biases in the hiring process by analyzing resumes and interview answers. It includes an automated job matching system, candidate scoring, and an admin dashboard with data visualizations for HR to assess applicants efficiently. Integrated with vector databases (Pinecone) and RAG (Retrieval-Augmented Generation) techniques to enhance the recruitment process."
        },
        {
          title: "Mahi Herbals and Naturals Website",
          description: "Fully responsive e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js). It showcases and sells herbal and natural products, integrated with payment functionality using Braintree API. Includes email notifications for order stages and provides diagrammatic order representations using npm pie-chart."
        },
        {
          title: "Monthly Calendar (Java Implementation)",
          description: "A Java-based text calendar application that allows users to generate and display a calendar for any given month and year, without relying on built-in date functions. This project highlights skills in algorithm design, Java programming, and user input handling."
        },
        {
          title: "Complete Responsive Flower Shop",
          description: "An e-commerce platform for selling flowers built using HTML, CSS, and JavaScript for the frontend and PHP with MySQL for server-side functionalities. Includes payment processing integration and provides a responsive and user-friendly experience for customers."
        },
        {
          title: "Web Scraping Tool for GST Status",
          description: "Developed an automated web scraping tool that fetches GST status from various websites, streamlining the process of tracking GST compliance for businesses. The tool provides real-time updates and ensures that businesses remain compliant with tax regulations."
        },
        {
            title: "WhatsApp Automated Message Sender",
            description: "Developed an automated WhatsApp message-sending tool for attendance management at TVS Sensing Solutions. The tool integrates with the WhatsApp API and sends attendance reminders, notifications, and alerts to employees, streamlining the attendance tracking process. This project demonstrated my ability to automate communication workflows and manage real-time notifications for better operational efficiency."
        }
      ];
      

      const projectList = document.getElementById("project-list");

      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
  
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = project.title;
  
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<p>${project.description}</p>`;
  
        card.appendChild(cardTitle);
        card.appendChild(modal);
  
        card.addEventListener("mouseenter", () => {
          modal.style.display = "flex"; // Show modal on hover
        });
  
        card.addEventListener("mouseleave", () => {
          modal.style.display = "none"; // Hide modal when not hovering
        });
  
        projectList.appendChild(card);
      });
  