const fallbackPortfolio = {
  hero: {
    name: "Ravi Kumar Rayapalli",
    role: "AI Engineer specializing in LLM systems, agentic architectures, and retrieval-augmented generation.",
    location: "California, USA",
    summary:
      "I build production-grade AI applications with multi-agent workflows, hybrid retrieval, knowledge graphs, and scalable backend services across cloud environments.",
    availability: "Open to AI engineering and backend platform opportunities",
    stats: ["8 years of engineering experience", "LLM, RAG, and agent systems", "GCP, AWS, Docker, Kubernetes"]
  },
  about: {
    bio:
      "I am an AI Engineer with a strong foundation in backend engineering and data platforms. My recent work centers on LLM systems, retrieval-driven agents, knowledge graphs, and evaluation pipelines, while my broader experience includes distributed services, microservice platforms, cloud deployments, and production-focused system design.",
    stack: "Python, SQL, JavaScript, TypeScript, Google ADK, LangGraph, LangChain, Neo4j, Vertex AI, OpenAI, GCP, AWS"
  },
  skills: [
    {
      title: "Programming",
      items: ["Python", "SQL", "JavaScript", "TypeScript", "Java"]
    },
    {
      title: "AI and LLM Stack",
      items: ["Google ADK", "LangGraph", "LangChain", "LlamaIndex", "Hugging Face", "Pydantic"]
    },
    {
      title: "Retrieval and Data",
      items: ["Neo4j", "FAISS", "Milvus", "ChromaDB", "BM25", "BigQuery"]
    },
    {
      title: "Cloud and DevOps",
      items: ["GCP", "AWS", "Docker", "Kubernetes", "Cloud Run", "GKE", "CI/CD"]
    },
    {
      title: "ML and Evaluation",
      items: ["PyTorch", "Scikit-learn", "MLflow", "DeepEval", "RAGAS", "BERTScore"]
    },
    {
      title: "Platforms",
      items: ["Vertex AI", "OpenAI", "Anthropic Claude", "AWS Bedrock", "Snowflake", "Databricks"]
    }
  ],
  highlights: [
    {
      title: "Agentic AI systems",
      description: "Planner-executor architectures, tool invocation layers, structured memory, and coordinated multi-agent execution."
    },
    {
      title: "Hybrid retrieval and RAG",
      description: "Dense retrieval, BM25, reranking, vector databases, and knowledge-graph grounding for higher quality responses."
    },
    {
      title: "Cloud-native backend delivery",
      description: "Production services and pipelines built with GCP, AWS, Docker, Kubernetes, CI/CD, and observability in mind."
    }
  ],
  projects: [
    {
      title: "Legal AI Systems at Optum",
      year: "2026",
      summary: "Built legal AI systems for healthcare workflows using LLM-driven document intelligence, entity extraction, clause classification, semantic search, and multi-agent orchestration over large legal corpora.",
      metric: "Reduced hallucinations by 25%",
      tags: ["Google ADK", "Neo4j", "BigQuery", "DeepEval"],
      outcome: "Designed retrieval agents, MCP-compliant tools, and evaluation pipelines that improved grounding, regression safety, and end-to-end reliability."
    },
    {
      title: "Maya Talent Agent",
      year: "2025",
      summary: "Developed a LangGraph-based conversational hiring agent for candidate intake, resume parsing, skill matching, follow-up generation, interview scheduling, and FAQ support.",
      metric: "Reduced manual effort by 70%",
      tags: ["LangGraph", "RAG", "FAISS", "Unstructured.io"],
      outcome: "Combined structured state machines, retrieval pipelines, guardrails, and observability to support consistent multi-step screening workflows."
    },
    {
      title: "Scalable Backend Platforms",
      year: "2017-2025",
      summary: "Built and led backend platforms across startups and enterprise teams using Node.js, Python, Java, microservices, data pipelines, cloud infrastructure, and containerized deployments.",
      metric: "8 years across product and enterprise engineering",
      tags: ["Node.js", "Python", "Microservices", "Cloud"],
      outcome: "Delivered scalable services, data processing systems, CI/CD workflows, and production integrations across healthcare, recruiting, analytics, and enterprise products."
    }
  ],
  services: [
    {
      title: "LLM and Agent Architectures",
      description: "Multi-agent systems, planner-executor patterns, tool orchestration, and retrieval-grounded workflows."
    },
    {
      title: "Backend and Data Platforms",
      description: "Scalable APIs, microservices, ingestion pipelines, cloud-native services, and production system design."
    },
    {
      title: "Evaluation and Reliability",
      description: "Guardrails, observability, regression testing, retrieval metrics, and benchmark-driven AI system quality."
    }
  ],
  process: [
    {
      title: "Design for grounding",
      description: "I start with the data sources, retrieval paths, and tool interfaces needed to keep model outputs anchored."
    },
    {
      title: "Orchestrate deliberately",
      description: "State transitions, routing logic, fallback handling, and schema validation are defined before scale is added."
    },
    {
      title: "Measure what matters",
      description: "I use evaluations, tracing, logging, and retrieval metrics to track correctness, latency, and drift."
    },
    {
      title: "Ship for production",
      description: "Containerization, CI/CD, cloud deployment, and runtime controls ensure systems stay maintainable after launch."
    }
  ],
  testimonials: [
    {
      quote: "M.S. in Information Systems, Cleveland State University",
      author: "Graduated May 2025"
    },
    {
      quote: "Microsoft Azure AI Fundamentals, Azure Fundamentals, and Azure Developer Associate",
      author: "AI-900, AZ-900, AZ-204"
    },
    {
      quote: "CompTIA Security+ with broad experience spanning AI engineering, backend systems, and cloud delivery",
      author: "SY0-701"
    }
  ],
  contact: {
    intro:
      "Tell me about the role, the AI platform, or the backend problem you want help building.",
    links: [
      { label: "Email", value: "ravirayapalli30@gmail.com", href: "mailto:ravirayapalli30@gmail.com" },
      { label: "LinkedIn", value: "ravi-rayapalli", href: "https://www.linkedin.com/in/ravi-rayapalli" },
      { label: "GitHub", value: "ravi-30", href: "https://github.com/ravi-30" }
    ]
  }
};

async function loadPortfolio() {
  try {
    const response = await fetch("/data/portfolio.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Portfolio data could not be loaded.");
    }
    return await response.json();
  } catch (error) {
    return fallbackPortfolio;
  }
}

function text(id, value) {
  const node = document.getElementById(id);
  if (node && value) node.textContent = value;
}

function renderList(containerId, items, renderItem) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(renderItem).join("");
}

function renderPortfolio(data) {
  text("hero-name", data.hero.name);
  text("hero-role", data.hero.role);
  text("hero-location", data.hero.location);
  text("hero-summary", data.hero.summary);
  text("availability-text", data.hero.availability);
  text("about-bio", data.about.bio);
  text("about-stack", data.about.stack);
  text("contact-intro", data.contact.intro);

  renderList(
    "hero-stats",
    data.hero.stats,
    (item) => `<li>${item}</li>`
  );

  renderList(
    "highlights",
    data.highlights,
    (item) => `
      <article class="feature-card">
        <strong>${item.title}</strong>
        <p>${item.description}</p>
      </article>
    `
  );

  renderList(
    "project-grid",
    data.projects,
    (project) => `
      <article class="project-card">
        <div class="project-topline">
          <span class="project-year">${project.year}</span>
        </div>
        <div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div class="card-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="project-metric">${project.metric}</div>
        <p>${project.outcome || ""}</p>
      </article>
    `
  );

  renderList(
    "skills-grid",
    data.skills || [],
    (skill) => `
      <article class="skill-card">
        <h3>${skill.title}</h3>
        <div class="skill-list">${skill.items.map((item) => `<span>${item}</span>`).join("")}</div>
      </article>
    `
  );

  renderList(
    "service-grid",
    data.services,
    (service) => `
      <article class="service-card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `
  );

  renderList(
    "timeline",
    data.process,
    (step, index) => `
      <article class="timeline-step" data-step="0${index + 1}">
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </article>
    `
  );

  renderList(
    "testimonial-grid",
    data.testimonials,
    (testimonial) => `
      <article class="testimonial-card">
        <p>${testimonial.quote}</p>
        <footer>${testimonial.author}</footer>
      </article>
    `
  );

  renderList(
    "contact-links",
    data.contact.links,
    (link) => `
      <a class="contact-link" href="${link.href}" target="_blank" rel="noreferrer">
        ${link.label}: ${link.value}
      </a>
    `
  );
}

async function handleContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending your message...";

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      form.reset();
      status.textContent = result.message || "Thanks. Your message was sent.";
    } catch (error) {
      status.textContent = error.message || "The form could not be sent right now.";
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadPortfolio();
  renderPortfolio(data);
  handleContactForm();
});
