# Rugiet Health - Software Engineering Experience

## Role Overview

**Position**: Software Engineer (IC2 - Individual Contributor Level 2)
**Duration**: February 2023 - September 2024 (19 months)
**Time Allocation**: 25% of working hours (simultaneous with CompoundLive Solutions Engineer role)
**Company**: Direct-to-consumer telehealth platform focused on men's health (Onyx MP Growth ’ ListenCo acquisition)

## Company Context

Rugiet Health operated a men's health telehealth platform called "Bufo V2" focused on sexual health and hormone optimization. Platform enabled patients to consult with licensed providers and receive prescription treatments delivered to their homes.

**Platform Type**: Ruby on Rails application with Stimulus.js frontend
**Patient Focus**: Men's health (ED, testosterone, hormone optimization)
**Business Model**: Subscription-based recurring prescriptions

## My First Real Engineering Job

This was my first professional software engineering role after completing LEARN Academy's bootcamp and teaching there for two years. I joined as an IC2 (junior/mid-level) Software Engineer building a telehealth platform for real patients and real healthcare operations.

**Career Transition**:
- 2020: Graduated coding bootcamp
- 2020-2021: Mobile development intern (struggled with complex algorithms)
- 2021-2023: Bootcamp instructor (solidified fundamentals)
- 2023: First professional engineering role at Rugiet

## Dual Role Structure

**Context**: Both Rugiet Health and CompoundLive had the same parent company (Onyx MP Growth), same office, same building.

**Time Split**:
- 25% engineering for Rugiet's patient platform (Bufo V2)
- 75% solutions engineering for CompoundLive's B2B clients

**Daily Reality**:
- Code in the morning on Rugiet features
- Jump on client calls in the afternoon for CompoundLive
- Back to code reviews or tickets in evening
- Context switching between engineering and client-facing work

**Why This Split Worked**:
- I understood the Rugiet platform deeply from building it
- CompoundLive was spun out as B2B version of same platform
- Natural evolution: build the platform, then help clients implement it
- Same team, same office, intentional company strategy

## Technical Contributions

### Feature Development

**Prescription Management**:
- Patient prescription request flows
- Doctor approval workflows
- Prescription history tracking
- Refill automation

**Subscription System**:
- Recurring billing for treatment plans
- Subscription pause/resume functionality
- Payment processing integration
- Subscription modification workflows

**Patient Portal Features**:
- Account management
- Treatment history display
- Refill request interface
- Medication tracking

**HIPAA-Compliant Development**:
- Secure data handling practices
- Audit logging for patient data access
- Encrypted data storage
- Access control implementation

### Tech Stack

**Backend**:
- Ruby on Rails (framework)
- PostgreSQL (database)
- RESTful API design

**Frontend**:
- Stimulus.js (JavaScript framework for interactivity)
- HTML5/CSS3
- Responsive design

**Infrastructure**:
- AWS hosting
- Git/GitHub version control
- CI/CD pipelines

**Development Practices**:
- Agile Scrum with 2-week sprints
- Daily standups
- Sprint planning and retrospectives
- Code reviews via GitHub pull requests
- ClickUp for ticket management

## The Retention Problem (My "Product Manager Moment")

### The Business Challenge

When patient retention metrics started dropping, I was assigned tickets to implement feature requests from the backlog.

**Initial Approach** (typical junior engineer):
- Read Jira ticket
- Understand acceptance criteria
- Implement exactly what was requested
- Submit for code review
- Move to next ticket

**What I Did Instead**:
- Paused before implementing
- Dug into the retention data
- Talked to customer support team
- Analyzed churn patterns in the database
- Identified root cause vs. symptoms

### The Discovery Process

**Data Analysis**:
- Queried database for churn rates by subscription length
- Segmented users by cancellation reason
- Identified patterns in cancellation timing
- Analyzed support ticket categories

**Customer Support Insights**:
- Read support ticket history for churned users
- Identified common themes in cancellation requests
- Discovered patients wanted to pause, not cancel
- Found inflexibility forcing permanent cancellations

**Root Cause Identified**:
The Jira tickets had clear acceptance criteria, but they weren't solving the right problem. The real issue wasn't missing featuresit was **inflexible subscription management forcing patients to cancel when they wanted to pause or adjust**.

**Specific Pain Points**:
- Patients going on vacation couldn't pause subscriptions
- Patients wanting to try different dosages had to cancel and restart
- No way to skip a month without full cancellation
- Cancellation was permanentcouldn't easily restart

### The Solution

**Proposed Feature**: Flexible subscription management system

**Core Capabilities**:
- **Pause Subscription**: Temporarily pause for 1-3 months without canceling
- **Skip Shipment**: Skip individual shipments while maintaining subscription
- **Modify Dosage**: Adjust treatment without cancellation
- **Reactivate**: Easy restart for previously paused subscriptions

**Implementation Approach**:
1. Wrote detailed technical specification with edge cases
2. Identified database schema changes needed
3. Designed user interface for subscription management
4. Planned rollout with feature flag for gradual release
5. Built the feature myself in Ruby on Rails

**Technical Details**:
- Added subscription status field: Active, Paused, Cancelled
- Created pause duration tracking (start date, end date)
- Implemented automated reactivation after pause period
- Built skip shipment functionality with charge date adjustment
- Designed admin interface for customer support to assist users

### Results

**Retention Impact**:
- **35% increase in patient retention** after implementing flexible subscription management
- Measured by comparing churn rates 3 months before vs. 3 months after launch
- Patients who used pause feature had 60% higher lifetime value

**Revenue Impact**:
- Direct bottom-line improvement from reduced churn
- Higher customer lifetime value (patients staying longer)
- Reduced customer acquisition cost amortization (keeping customers vs. acquiring new)

**Operational Impact**:
- Reduced support ticket volume for cancellation requests
- Customer support could offer pause as retention tool
- Positive patient feedback on flexibility

### The Realization: My "Product Manager Moment"

This project was when I realized I was doing product management, not just engineering.

**What I Did That Was PM Work**:
- Questioned whether the requirements were solving the right problem
- Analyzed data to identify root cause
- Talked to customer support to understand user pain points
- Proposed a solution based on insights, not just implementation
- Wrote detailed specifications before coding
- Measured business impact, not just feature completion

**The Epiphany**:
> "That's when I realized I was better at deciding what to build than building it."

I was good at writing code, but I kept finding myself in the gap between **"what we're building"** and **"what actually needs to work."**

**Key Insight**:
My highest impact wasn't writing code fasterit was **asking better questions first**.

## Engineering Practices Learned

### Agile Scrum
- 2-week sprint cycles with clear goals
- Daily standups (15 minutes, blockers and progress)
- Sprint planning (story pointing, capacity planning)
- Retrospectives (what worked, what didn't, action items)

### Code Reviews
- Every pull request reviewed by at least one other engineer
- Learned to give constructive feedback
- Received feedback that improved my code quality
- Understood importance of readable code for team collaboration

### ClickUp Ticket Management
- Tracked requirements, feature progress, bug reports
- Learned to break large features into manageable tickets
- Estimated story points for planning
- Maintained ticket history for documentation

### HIPAA Compliance in Code
- Learned healthcare data handling standards
- Implemented encryption for sensitive data
- Added audit logging for patient data access
- Understood security practices beyond general web development

### Team Collaboration
- Worked with 10+ engineers on shared codebase
- Coordinated feature development with dependent work
- Managed merge conflicts and branch strategies
- Participated in technical architecture discussions

## Reality Check: 25% Ticket Volume

I was only shipping about **25% of the ticket volume** of other engineers due to my time split with CompoundLive.

**How I Felt at the Time**:
- Less productive as a pure engineer compared to peers
- Worried about performance perception
- Questioned whether I was good enough at coding

**What I Didn't Realize**:
- I was developing a different skillsetbridging technical and business thinking
- My Solutions Engineer work was more valuable than marginal engineering output
- The retention project showed higher impact from better decisions vs. more code

**The Trade-off**:
Would I have been a better engineer if I spent 100% time coding? Probably.
Would I have discovered my passion for product management? Definitely not.

## Skills Developed

### Technical Skills
- **Full-stack web development**: Ruby on Rails backend, JavaScript frontend
- **Healthcare application development**: Prescription management, patient workflows
- **HIPAA compliance implementation**: Secure data handling, audit logging
- **API integration**: Payment processors, pharmacy networks, shipment tracking
- **Database design**: PostgreSQL schema design, query optimization

### Product Thinking Skills
- **Data analysis**: SQL queries to understand user behavior
- **Root cause analysis**: Identifying real problems vs. symptoms
- **Stakeholder communication**: Talking to support, understanding patient pain points
- **Business impact measurement**: Retention metrics, revenue impact
- **Technical specification writing**: Detailed requirements before implementation

### Professional Skills
- **Code review practices**: Giving and receiving feedback
- **Agile methodology**: Sprint planning, standups, retrospectives
- **Team collaboration**: Working on shared codebase with 10+ engineers
- **Project management**: Ticket tracking, estimation, planning

## What I Learned

### Healthcare Engineering Requires Understanding Patient Journeys

**Insight**: You can't build good healthcare software by just following tickets. You need to understand:
- Why patients are using the platform
- What problems they're trying to solve
- Where current workflows fail them
- How features impact patient outcomes

**Example**: The retention problem wasn't solved by building features on the backlog. It was solved by understanding why patients were leaving and addressing the root cause.

### The Hardest Part Isn't CodingIt's Figuring Out What to Code

**Engineering Challenge**: Implementing flexible subscription management (moderately complex)
**Product Challenge**: Identifying that subscription inflexibility was causing churn (much harder)

**Realization**: Most engineers can implement a solution once it's clearly defined. The hard part is figuring out what solution to implement.

### Data Analysis Reveals Problems That Stakeholders Don't Articulate

**Stakeholder Request**: "Build feature X to improve retention"
**Data Insight**: "Feature X won't solve the real problemsubscription inflexibility is the issue"

**Lesson**: Trust data over opinions. Validate assumptions before building.

### Talking to Support Teams Provides Invaluable Product Insights

**Support Tickets Revealed**:
- Common cancellation reasons
- Workarounds users were requesting
- Frustrations with current system
- Feature requests from real users

**Lesson**: Support team talks to users every day. They have insights product and engineering often miss.

### Business Impact Matters More Than Code Elegance

**As Engineer**: Wanted to write clean, elegant, well-tested code
**As PM-in-training**: Realized poorly-written code that solves a real problem beats perfectly-written code that doesn't

**Balance**: Obviously clean code matters for maintainability. But the first question should be "Are we solving the right problem?" not "Are we writing this elegantly?"

## Why I Left

**Company Acquisition**: Parent company (Onyx MP Growth) was acquired by ListenCo.

**Decision Point**: After acquisition process completed, I could either:
1. Stay with acquired entity under new ownership
2. Pursue Hedfirst/Teligant opportunity with Kelly Smith

**Why I Chose Hedfirst**:
- Wanted to build a healthcare platform from scratch incorporating everything I'd learned
- Opportunity to apply lessons from CompoundLive about what worked and what didn't
- Chance to transition fully into product management vs. split role
- Excited about AI integration and next-generation telehealth capabilities

**What I Took With Me**:
- Engineering fundamentals and technical credibility
- Understanding of telehealth platform operations
- Product thinking mindset (what to build, not just how)
- Healthcare domain expertise
- Empathy for both engineers and business stakeholders

## The Transition to Product Management

Rugiet was where I discovered that my passion was **product management**, not pure engineering.

**Engineering Strengths**:
- Could write clean, functional code
- Understood technical constraints and trade-offs
- Communicated well with other engineers
- Delivered features on time

**Product Strengths** (discovered at Rugiet):
- Identified problems worth solving before coding
- Analyzed data to understand root causes
- Communicated with stakeholders to gather insights
- Measured business impact, not just feature completion
- Asked "why are we building this?" before "how do we build this?"

**The Best Engineers I Saw**:
Weren't just fast codersthey understood the business problem deeply enough to question the requirements.

**My Realization**:
I wanted to be the person defining what to build, not just building it well.

This realization, combined with my Solutions Engineering experience at CompoundLive, set the foundation for my transition to Technical Product Manager at Hedfirst/Teligant.
