// PromptMaster JavaScript Application

// Technique data based on the prompt guide
const techniques = [
    {
        id: 'best-choice',
        title: 'Getting to the Best Choice',
        description: 'Use AI to ask questions and recommend the best option when you have multiple choices.',
        tags: ['Decision Making', 'Questions', 'Recommendations'],
        useCase: 'When you have 3+ options and need help weighing factors',
        example: 'Choosing between laptops, restaurants, or any purchase decision',
        content: `
            <h2>Getting to the Best Choice</h2>
            <p>This technique helps you make informed decisions by having AI ask targeted questions about your preferences and constraints.</p>
            
            <h3>How it works:</h3>
            <ol>
                <li>Present your options to the AI</li>
                <li>Ask the AI to research specifications/details</li>
                <li>Let the AI ask you questions about your needs</li>
                <li>Get a personalized recommendation</li>
            </ol>
            
            <h3>Example Prompt:</h3>
            <div class="example-prompt">
                "I'm trying to choose between the Xentron Pro 15, Zephyr 360, and BlazeBook Ultra laptops. Can you search the Web to find their specs and then ask me questions to figure out which one is best for me?"
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Big purchases (laptops, cars, homes)</li>
                <li>Small choices (restaurants, movies)</li>
                <li>When you know a little about options but need help weighing factors</li>
            </ul>
        `
    },
    {
        id: 'chained-prompts',
        title: 'Chained Prompts',
        description: 'Gradually refine legal documents through a series of prompts for better results.',
        tags: ['Refinement', 'Step-by-step', 'Legal'],
        useCase: 'When you need to improve complex documents incrementally',
        example: 'Drafting contracts, editing motions, summarizing cases',
        content: `
            <h2>Chained Prompts</h2>
            <p>Use a series of connected prompts to gradually improve and refine your content, especially useful for complex documents.</p>
            
            <h3>How it works:</h3>
            <ol>
                <li>Start with a basic prompt</li>
                <li>Ask for specific improvements in follow-up prompts</li>
                <li>Build on each response to create a polished final result</li>
            </ol>
            
            <h3>Example Sequence:</h3>
            <div class="example-prompt">
                <strong>Prompt 1:</strong> "Summarize the case of Smith v. Johnson in simple terms"<br><br>
                <strong>Prompt 2:</strong> "Expand on this by explaining the legal reasoning behind the court's decision, but still keep the language simple"<br><br>
                <strong>Prompt 3:</strong> "Can you also explain how this decision might affect similar cases in the future?"
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Legal documents and briefs</li>
                <li>Complex technical writing</li>
                <li>Any content that needs step-by-step refinement</li>
            </ul>
        `
    },
    {
        id: 'engaging-students',
        title: 'Engaging Students with AI',
        description: 'Craft interactive, inclusive course scripts with AI to enhance learning experiences.',
        tags: ['Education', 'Interactive', 'Inclusive'],
        useCase: 'Creating engaging educational content',
        example: 'Video lectures, course materials, presentations',
        content: `
            <h2>Engaging Students with AI</h2>
            <p>Create interactive and inclusive educational content that encourages participation and learning.</p>
            
            <h3>Key Elements:</h3>
            <ul>
                <li><strong>Interactive Elements:</strong> Questions, polls, thought experiments</li>
                <li><strong>Inclusive Language:</strong> Avoid gender-specific terms, use "we" and "everyone"</li>
                <li><strong>Compelling CTAs:</strong> Motivating calls to action</li>
            </ul>
            
            <h3>Example Prompts:</h3>
            <div class="example-prompt">
                "Help me add interactive elements to my lecture on black holes. Include questions, polls, and discussion prompts."
            </div>
            
            <h3>Language Tips:</h3>
            <ul>
                <li>Use "Everyone" instead of "Guys"</li>
                <li>Say "Please submit your observations" instead of "Each student should submit his observations"</li>
                <li>Create community with "we" language</li>
            </ul>
        `
    },
    {
        id: 'example-driven',
        title: 'Example-Driven Prompting',
        description: 'Use few-shot examples to guide AI responses in the style and tone you want.',
        tags: ['Examples', 'Style', 'Tone'],
        useCase: 'When you need specific style or format',
        example: 'Emails, creative content, technical explanations',
        content: `
            <h2>Example-Driven Prompting (Few-Shot)</h2>
            <p>Provide examples within your prompt to guide the AI to produce responses that match your desired style, tone, or format.</p>
            
            <h3>How it works:</h3>
            <ol>
                <li>Identify the style/tone you want</li>
                <li>Provide 2-3 examples of that style</li>
                <li>Ask the AI to generate content in that same style</li>
            </ol>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                "Write an email to a new client introducing my freelance services. Here are two examples of the tone I'm aiming for:<br><br>
                1. Hi [Client Name], I'm Alex, a freelancer who's passionate about helping businesses like yours thrive...<br><br>
                2. Hey [Client Name], I'm excited to potentially work together! I offer [services] that could really help your business..."
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Email templates</li>
                <li>Creative writing</li>
                <li>Brand voice consistency</li>
            </ul>
        `
    },
    {
        id: 'output-primers',
        title: 'Output Primers',
        description: 'Control the format and structure of AI responses using specific formatting instructions.',
        tags: ['Formatting', 'Structure', 'Layout'],
        useCase: 'When you need specific formatting or structure',
        example: 'Blog posts, presentations, reports',
        content: `
            <h2>Output Primers</h2>
            <p>Specify formatting elements like headings, bullet points, and structure to get visually appealing, organized responses.</p>
            
            <h3>Formatting Elements:</h3>
            <ul>
                <li>Headings and subheadings</li>
                <li>Bullet points and numbered lists</li>
                <li>Bold and italic text</li>
                <li>Specific layouts (Q&A, sections, etc.)</li>
            </ul>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                "Write a blog post about summer fashion trends. Please format the response with headings, bullet points, and bold text for emphasis."
            </div>
            
            <h3>Structure Example:</h3>
            <div class="example-prompt">
                "Write a business proposal. Please structure it with an introduction, problem statement, solution, market analysis, and conclusion."
            </div>
        `
    },
    {
        id: 'completion',
        title: 'Completion',
        description: 'Finish what you started by having AI continue your text in a consistent style.',
        tags: ['Continuation', 'Writer\'s Block', 'Flow'],
        useCase: 'When you\'re stuck mid-writing',
        example: 'Essays, stories, articles, song lyrics',
        content: `
            <h2>Completion</h2>
            <p>Overcome writer's block by having AI continue your text while maintaining your original style and flow.</p>
            
            <h3>How it works:</h3>
            <ol>
                <li>Provide the beginning of your text</li>
                <li>Ask AI to continue in the same style</li>
                <li>Get a seamless continuation</li>
            </ol>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                "I'm providing you with the beginning of my essay: 'Social media platforms have revolutionized the way we communicate and share our lives. However, as these platforms grow in influence, so too do the concerns about their effects on mental health. Studies have shown that...' Finish it based on the words provided. Keep the flow consistent."
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Creative writing</li>
                <li>Academic essays</li>
                <li>Business documents</li>
                <li>Any content where you've hit a wall</li>
            </ul>
        `
    },
    {
        id: 'proofreading',
        title: 'Proofreading',
        description: 'Get focused editing that only fixes spelling and grammar while preserving your unique voice.',
        tags: ['Editing', 'Grammar', 'Voice'],
        useCase: 'When you want to polish without changing style',
        example: 'Creative writing, personal emails, unique content',
        content: `
            <h2>Proofreading</h2>
            <p>Get spelling and grammar corrections without losing your unique writing voice and style.</p>
            
            <h3>Key Instruction:</h3>
            <p>Always specify "only fix spelling and grammar errors" to preserve your voice.</p>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                "Proofread my short story and only fix spelling and grammar errors."
            </div>
            
            <h3>What to avoid:</h3>
            <div class="example-prompt">
                ❌ "Edit my short story to improve it"<br>
                ✅ "Proofread my short story and only fix spelling and grammar errors"
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Creative writing</li>
                <li>Personal content</li>
                <li>Content with unique voice</li>
                <li>When you want minimal changes</li>
            </ul>
        `
    },
    {
        id: 'labeled-sections',
        title: 'Labeled Sections',
        description: 'Structure prompts with clearly labeled sections for better organization and results.',
        tags: ['Organization', 'Structure', 'Clarity'],
        useCase: 'Complex prompts that need clear organization',
        example: 'Business proposals, detailed requests, multi-part tasks',
        content: `
            <h2>Labeled Sections</h2>
            <p>Break down complex prompts into clearly labeled sections for better organization and more accurate responses.</p>
            
            <h3>Common Sections:</h3>
            <ul>
                <li><strong>Goal:</strong> What you want to achieve</li>
                <li><strong>Audience:</strong> Who the content is for</li>
                <li><strong>Context:</strong> Background information</li>
                <li><strong>Instruction:</strong> What you want the AI to do</li>
                <li><strong>Tone:</strong> Desired style and voice</li>
                <li><strong>Constraints:</strong> Limitations or requirements</li>
            </ul>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                ---Goal---<br>
                Create a persuasive product pitch for our AI tool<br><br>
                ---Audience---<br>
                Potential investors in the technology sector<br><br>
                ---Context---<br>
                Our startup has developed an AI-powered productivity tool<br><br>
                ---Instruction---<br>
                Write a concise pitch emphasizing time-saving features<br><br>
                ---Tone---<br>
                Confident and forward-thinking<br><br>
                ---Constraints---<br>
                The pitch should be no more than 150 words
            </div>
        `
    },
    {
        id: 'breaking-down',
        title: 'Breaking Down Complex Tasks',
        description: 'Master complex queries by breaking them into simple, manageable prompts.',
        tags: ['Complexity', 'Step-by-step', 'Research'],
        useCase: 'When dealing with complex or overwhelming tasks',
        example: 'Research projects, multi-step processes, detailed analysis',
        content: `
            <h2>Breaking Down Complex Tasks</h2>
            <p>Instead of overwhelming the AI with complex requests, break them into smaller, focused prompts for better results.</p>
            
            <h3>Strategy:</h3>
            <ol>
                <li>Start with a specific, focused prompt</li>
                <li>Build on each response with follow-up questions</li>
                <li>Explore different aspects step by step</li>
                <li>Combine insights for a complete picture</li>
            </ol>
            
            <h3>Example Sequence:</h3>
            <div class="example-prompt">
                <strong>Step 1:</strong> "I want to create a healthy summer dish using zucchini, tomatoes, and fresh basil. Can you suggest a hearty base that complements these ingredients?"<br><br>
                <strong>Step 2:</strong> "I'm aiming for a hearty texture, so let's go with farro. Can you guide me through the best way to prepare the farro and vegetables?"<br><br>
                <strong>Step 3:</strong> "Can you suggest any additional toppings or garnishes to elevate the dish?"
            </div>
            
            <h3>Benefits:</h3>
            <ul>
                <li>Clearer, more focused responses</li>
                <li>Easier to manage complex topics</li>
                <li>Better exploration of different aspects</li>
                <li>More dynamic conversations</li>
            </ul>
        `
    },
    {
        id: 'clean-prompts',
        title: 'Clean, Concise Prompts',
        description: 'Review and edit prompts for clarity and effectiveness before using them.',
        tags: ['Clarity', 'Editing', 'Effectiveness'],
        useCase: 'When your initial prompt is unclear or too wordy',
        example: 'Any prompt that needs refinement',
        content: `
            <h2>Clean, Concise Prompts</h2>
            <p>Have the AI review and edit your prompt to make it clearer, more concise, and more effective.</p>
            
            <h3>Process:</h3>
            <ol>
                <li>Draft your initial prompt</li>
                <li>Ask AI to review and edit it</li>
                <li>Check for missed details</li>
                <li>Use the refined prompt</li>
            </ol>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                <strong>Original:</strong> "Hey there! So I just launched this new line of candles that are amazing! They're all handmade, use eco-friendly materials, and come in really beautiful glass jars that can be reused as cute home decor after the candle burns out. I think everyone's going to love them but need a good way to promote them on Instagram. Could you write me a short but really cool post to help advertise them, maybe mentioning their sustainability?"<br><br>
                <strong>Edited:</strong> "I've just launched a handmade candle line, crafted with eco-friendly materials. Each candle comes in a reusable glass jar, perfect for home decor. Help me create a catchy Instagram post to highlight their sustainability and aesthetic appeal."
            </div>
            
            <h3>Benefits:</h3>
            <ul>
                <li>Removes unnecessary words</li>
                <li>Fixes grammar and spelling</li>
                <li>Makes instructions clearer</li>
                <li>Helps identify missed details</li>
            </ul>
        `
    },
    {
        id: 'layered-prompting',
        title: 'Layered Prompting',
        description: 'Refine responses through follow-up questions to get exactly what you need.',
        tags: ['Refinement', 'Follow-up', 'Specificity'],
        useCase: 'When initial responses need more detail or specificity',
        example: 'Content creation, research, problem-solving',
        content: `
            <h2>Layered Prompting</h2>
            <p>Start with a broad prompt and then add layers of specificity through follow-up questions to get highly targeted results.</p>
            
            <h3>Process:</h3>
            <ol>
                <li>Start with a general prompt</li>
                <li>Ask follow-up questions for specific aspects</li>
                <li>Refine and adjust based on responses</li>
                <li>Build toward your exact needs</li>
            </ol>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                <strong>Layer 1:</strong> "Can you give me some ideas for an email marketing campaign to promote a skincare product launch?"<br><br>
                <strong>Layer 2:</strong> "Let's focus on the educational series. Can you help me outline a 3-email sequence that educates customers about the key ingredients?"<br><br>
                <strong>Layer 3:</strong> "Can you make Email 2 more engaging by explaining the science in simple, relatable terms?"<br><br>
                <strong>Layer 4:</strong> "Can you suggest a catchy subject line for each of the three emails?"
            </div>
            
            <h3>Best for:</h3>
            <ul>
                <li>Complex content creation</li>
                <li>Research projects</li>
                <li>Problem-solving</li>
                <li>When you need highly specific results</li>
            </ul>
        `
    },
    {
        id: 'audience-integration',
        title: 'Audience Integration',
        description: 'Integrate your intended audience directly into prompts for targeted content.',
        tags: ['Audience', 'Targeting', 'Relevance'],
        useCase: 'When content needs to resonate with specific groups',
        example: 'Marketing copy, blog posts, email campaigns',
        content: `
            <h2>Audience Integration</h2>
            <p>Specify your target audience in prompts to get content that speaks directly to their interests and needs.</p>
            
            <h3>How it works:</h3>
            <ol>
                <li>Identify your target audience</li>
                <li>Include audience details in your prompt</li>
                <li>Get content tailored to their interests</li>
            </ol>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                <strong>Generic:</strong> "Write ad copy for a new line of eco-friendly home goods."<br><br>
                <strong>Audience-Specific:</strong> "Write ad copy for a new line of eco-friendly home goods that appeals to environmentally-conscious consumers who value sustainability and ethical sourcing."
            </div>
            
            <h3>Audience Details to Include:</h3>
            <ul>
                <li>Demographics (age, profession, interests)</li>
                <li>Values and motivations</li>
                <li>Pain points and challenges</li>
                <li>Preferred communication style</li>
            </ul>
        `
    },
    {
        id: 'audience-personas',
        title: 'Audience Personas',
        description: 'Simplify complex topics by asking AI to explain as if speaking to a specific audience.',
        tags: ['Simplification', 'Personas', 'Clarity'],
        useCase: 'When you need to simplify complex information',
        example: 'Teaching, explaining technical concepts, making content accessible',
        content: `
            <h2>Audience Personas</h2>
            <p>Ask AI to explain topics as if speaking to a specific audience to get appropriately leveled explanations.</p>
            
            <h3>Common Personas:</h3>
            <ul>
                <li>Age-based: "Explain like I'm 13 years old"</li>
                <li>Expertise-based: "Explain for beginners" or "Explain for experts"</li>
                <li>Role-based: "Explain for business owners" or "Explain for students"</li>
            </ul>
            
            <h3>Example:</h3>
            <div class="example-prompt">
                <strong>Complex:</strong> "Explain quantum mechanics."<br><br>
                <strong>Simplified:</strong> "Explain quantum mechanics to me like I'm 13 years old."
            </div>
            
            <h3>Response Comparison:</h3>
            <div class="example-prompt">
                <strong>Complex:</strong> "Quantum mechanics is a fundamental theory in physics that describes physical properties of nature at the scale of atoms and subatomic particles..."<br><br>
                <strong>Simplified:</strong> "Imagine everything around you is made of tiny building blocks called atoms. Quantum mechanics is like a set of rules that tells us how these tiny blocks behave. But here's the tricky part: sometimes, these blocks act like they're everywhere at once, and other times, they act like they're not there at all until you look for them!"
            </div>
        `
    }
];

// Examples data
const examples = [
    {
        technique: 'Getting to the Best Choice',
        scenario: 'Choosing a Laptop',
        prompt: 'I\'m trying to choose between the Xentron Pro 15, Zephyr 360, and BlazeBook Ultra laptops. Can you search the Web to find their specs and then ask me questions to figure out which one is best for me?',
        response: 'Sure! I\'ve looked up the specifications for all three models... I can ask you some questions to help figure out which one would suit your needs best. How do you primarily plan to use the laptop?'
    },
    {
        technique: 'Example-Driven Prompting',
        scenario: 'Writing an Email',
        prompt: 'Write an email to a new client introducing my freelance services. Here are two examples of the tone I\'m aiming for: 1. Hi [Client Name], I\'m Alex, a freelancer who\'s passionate about helping businesses like yours thrive... 2. Hey [Client Name], I\'m excited to potentially work together!',
        response: 'Hi [Client Name], I\'m thrilled to connect with you! I\'m Alex, a freelancer who loves partnering with businesses to create something special. I\'m really looking forward to discussing how I can help support your success.'
    },
    {
        technique: 'Output Primers',
        scenario: 'Blog Post Formatting',
        prompt: 'Write a blog post about summer fashion trends. Please format the response with headings, bullet points, and bold text for emphasis.',
        response: 'Summer Fashion Trends You Can\'t Miss\n\nBright Colors\n• Neon shades\n• Pastels\n• Color blocking\n\nBold Patterns\n• Animal prints\n• Stripes\n• Polka dots'
    },
    {
        technique: 'Labeled Sections',
        scenario: 'Business Proposal',
        prompt: '---Goal---\nCreate a persuasive product pitch for our AI tool\n---Audience---\nPotential investors\n---Context---\nOur startup has developed an AI-powered productivity tool\n---Instruction---\nWrite a concise pitch emphasizing time-saving features\n---Tone---\nConfident and forward-thinking',
        response: 'Productivity reimagined. Our AI-powered tool transforms how you manage tasks by automating routine workflows, freeing up time for higher-level strategic activities...'
    },
    {
        technique: 'Audience Personas',
        scenario: 'Explaining Complex Topics',
        prompt: 'Explain quantum mechanics to me like I\'m 13 years old.',
        response: 'Imagine everything around you is made of tiny building blocks called atoms. Now, quantum mechanics is like a set of rules that tells us how these tiny blocks behave. But here\'s the tricky part: sometimes, these blocks act like they\'re everywhere at once, and other times, they act like they\'re not there at all until you look for them!'
    },
    {
        technique: 'Layered Prompting',
        scenario: 'Email Campaign Planning',
        prompt: 'Can you give me some ideas for an email marketing campaign to promote a skincare product launch?',
        response: 'Sure! Here are a few email campaign ideas: 1. Teaser Campaign: Send an early announcement with sneak peeks... 2. Educational Series: Provide insights about key ingredients... Which of these do you think works best for your brand?'
    }
];

// Application state
let selectedTechnique = null;
let currentPrompt = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderTechniques();
    renderTechniqueSelector();
    renderExamples();
    setupEventListeners();
});

// Render techniques grid
function renderTechniques() {
    const grid = document.getElementById('techniquesGrid');
    grid.innerHTML = techniques.map(technique => `
        <div class="technique-card" onclick="openTechniqueModal('${technique.id}')">
            <h3>${technique.title}</h3>
            <p>${technique.description}</p>
            <div class="technique-tags">
                ${technique.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render technique selector for builder
function renderTechniqueSelector() {
    const selector = document.getElementById('techniqueSelector');
    selector.innerHTML = techniques.map(technique => `
        <div class="technique-option" onclick="selectTechnique('${technique.id}')">
            <h4>${technique.title}</h4>
            <p>${technique.useCase}</p>
        </div>
    `).join('');
}

// Render examples
function renderExamples() {
    const grid = document.getElementById('examplesGrid');
    grid.innerHTML = examples.map(example => `
        <div class="example-card">
            <h3>${example.technique}</h3>
            <p><strong>Scenario:</strong> ${example.scenario}</p>
            <div class="example-prompt">
                <strong>Prompt:</strong><br>
                ${example.prompt}
            </div>
            <div class="example-response">
                <strong>Response:</strong><br>
                ${example.response}
            </div>
        </div>
    `).join('');
}

// Open technique modal
function openTechniqueModal(techniqueId) {
    const technique = techniques.find(t => t.id === techniqueId);
    const modal = document.getElementById('techniqueModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = technique.content;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('techniqueModal').style.display = 'none';
}

// Select technique for builder
function selectTechnique(techniqueId) {
    selectedTechnique = techniques.find(t => t.id === techniqueId);
    
    // Update UI
    document.querySelectorAll('.technique-option').forEach(option => {
        option.classList.remove('active');
    });
    event.target.closest('.technique-option').classList.add('active');
    
    // Show technique-specific options
    renderBuilderOptions();
}

// Render builder options based on selected technique
function renderBuilderOptions() {
    const options = document.getElementById('builderOptions');
    
    if (!selectedTechnique) {
        options.innerHTML = '<p>Select a technique to see options</p>';
        return;
    }
    
    let optionsHTML = `<h4>${selectedTechnique.title}</h4><p>${selectedTechnique.description}</p>`;
    
    // Add technique-specific options
    switch (selectedTechnique.id) {
        case 'best-choice':
            optionsHTML += `
                <div class="option-group">
                    <label>What are you choosing between?</label>
                    <input type="text" id="options" placeholder="e.g., Laptop A, Laptop B, Laptop C">
                </div>
                <div class="option-group">
                    <label>What's your main use case?</label>
                    <input type="text" id="useCase" placeholder="e.g., graphic design, gaming, business">
                </div>
            `;
            break;
        case 'example-driven':
            optionsHTML += `
                <div class="option-group">
                    <label>What type of content?</label>
                    <input type="text" id="contentType" placeholder="e.g., email, blog post, proposal">
                </div>
                <div class="option-group">
                    <label>Describe your desired tone</label>
                    <input type="text" id="tone" placeholder="e.g., friendly, professional, casual">
                </div>
            `;
            break;
        case 'output-primers':
            optionsHTML += `
                <div class="option-group">
                    <label>Content topic</label>
                    <input type="text" id="topic" placeholder="e.g., summer fashion trends">
                </div>
                <div class="option-group">
                    <label>Desired format</label>
                    <select id="format">
                        <option value="headings">Headings & Bullets</option>
                        <option value="qa">Q&A Format</option>
                        <option value="sections">Structured Sections</option>
                        <option value="list">Numbered List</option>
                    </select>
                </div>
            `;
            break;
        case 'labeled-sections':
            optionsHTML += `
                <div class="option-group">
                    <label>Goal</label>
                    <input type="text" id="goal" placeholder="What do you want to achieve?">
                </div>
                <div class="option-group">
                    <label>Audience</label>
                    <input type="text" id="audience" placeholder="Who is this for?">
                </div>
                <div class="option-group">
                    <label>Context</label>
                    <input type="text" id="context" placeholder="Background information">
                </div>
                <div class="option-group">
                    <label>Tone</label>
                    <input type="text" id="tone" placeholder="e.g., professional, friendly, confident">
                </div>
            `;
            break;
        case 'audience-personas':
            optionsHTML += `
                <div class="option-group">
                    <label>Topic to explain</label>
                    <input type="text" id="topic" placeholder="e.g., quantum mechanics, blockchain">
                </div>
                <div class="option-group">
                    <label>Audience persona</label>
                    <select id="persona">
                        <option value="13-year-old">13 years old</option>
                        <option value="beginner">Beginner in the field</option>
                        <option value="business-owner">Business owner</option>
                        <option value="student">College student</option>
                        <option value="expert">Expert in the field</option>
                    </select>
                </div>
            `;
            break;
        default:
            optionsHTML += `
                <div class="option-group">
                    <label>Your request</label>
                    <input type="text" id="request" placeholder="Describe what you need">
                </div>
            `;
    }
    
    options.innerHTML = optionsHTML;
}

// Generate prompt based on selected technique and options
function generatePrompt() {
    if (!selectedTechnique) {
        alert('Please select a technique first');
        return;
    }
    
    let prompt = '';
    
    switch (selectedTechnique.id) {
        case 'best-choice':
            const options = document.getElementById('options')?.value || 'Option A, Option B, Option C';
            const useCase = document.getElementById('useCase')?.value || 'general use';
            prompt = `I'm trying to choose between ${options}. Can you search for their specifications and then ask me questions to figure out which one is best for my ${useCase} needs?`;
            break;
            
        case 'example-driven':
            const contentType = document.getElementById('contentType')?.value || 'content';
            const tone = document.getElementById('tone')?.value || 'professional';
            prompt = `Write ${contentType} with a ${tone} tone. Here are two examples of the style I'm aiming for:\n\n1. [Example 1 of desired tone]\n2. [Example 2 of desired tone]\n\nPlease generate content in this same style.`;
            break;
            
        case 'output-primers':
            const topic = document.getElementById('topic')?.value || 'your topic';
            const format = document.getElementById('format')?.value || 'headings';
            let formatInstruction = '';
            switch (format) {
                case 'headings': formatInstruction = 'with headings, bullet points, and bold text for emphasis'; break;
                case 'qa': formatInstruction = 'in a Q&A format with clear questions and answers'; break;
                case 'sections': formatInstruction = 'with clear sections and structured layout'; break;
                case 'list': formatInstruction = 'as a numbered list with detailed explanations'; break;
            }
            prompt = `Write about ${topic}. Please format the response ${formatInstruction}.`;
            break;
            
        case 'labeled-sections':
            const goal = document.getElementById('goal')?.value || 'your goal';
            const audience = document.getElementById('audience')?.value || 'your audience';
            const context = document.getElementById('context')?.value || 'relevant context';
            const tone2 = document.getElementById('tone')?.value || 'appropriate tone';
            prompt = `---Goal---\n${goal}\n\n---Audience---\n${audience}\n\n---Context---\n${context}\n\n---Instruction---\nPlease create the requested content\n\n---Tone---\n${tone2}`;
            break;
            
        case 'audience-personas':
            const topic2 = document.getElementById('topic')?.value || 'the topic';
            const persona = document.getElementById('persona')?.value || '13-year-old';
            prompt = `Explain ${topic2} to me like I'm a ${persona}.`;
            break;
            
        default:
            const request = document.getElementById('request')?.value || 'your request';
            prompt = `${request}`;
    }
    
    // Update the textarea and preview
    document.getElementById('promptTextarea').value = prompt;
    document.getElementById('previewContent').innerHTML = `<pre>${prompt}</pre>`;
}

// Clear prompt
function clearPrompt() {
    document.getElementById('promptTextarea').value = '';
    document.getElementById('previewContent').innerHTML = '<p class="preview-placeholder">Your generated prompt will appear here...</p>';
}

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('techniqueModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
    
    // Update preview when textarea changes
    document.getElementById('promptTextarea').addEventListener('input', function() {
        const content = this.value;
        if (content.trim()) {
            document.getElementById('previewContent').innerHTML = `<pre>${content}</pre>`;
        } else {
            document.getElementById('previewContent').innerHTML = '<p class="preview-placeholder">Your generated prompt will appear here...</p>';
        }
    });
}

// Add some CSS for the option groups
const style = document.createElement('style');
style.textContent = `
    .option-group {
        margin-bottom: 1rem;
    }
    
    .option-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #374151;
    }
    
    .option-group input,
    .option-group select {
        width: 100%;
        padding: 8px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-size: 0.9rem;
    }
    
    .option-group input:focus,
    .option-group select:focus {
        outline: none;
        border-color: #4f46e5;
    }
    
    .preview-content pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;
document.head.appendChild(style);
