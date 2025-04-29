const certifications = [
    { title: "Prompt Engineering with LangChain", description: "LinkedIn Learning, 2025." },
    { title: "AI for Everyone", description: "Coursera, by Andrew Ng." }
  ];
  
  const certList = document.getElementById("cert-list");
  certifications.forEach(cert => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${cert.title}</h3><p>${cert.description}</p>`;
    certList.appendChild(card);
  });