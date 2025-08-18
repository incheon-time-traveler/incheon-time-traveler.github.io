---
title: "[Internship] A QA Framework for RAG-Based Chatbots"
date: 2025-08-14 16:30:00 +09:00
categories: [Internship, Tasks]
tags: [Chatbot, QA, Internship]     # TAG names should always be lowercase
description: Five question categories I use to evaluate the quality of a RAG-based chatbot.
language: en
postid: 3
---

## Working as an AI Service QA Engineer
At my internship, I was hired as an AI low-code platform engineer. In this role, performing Quality Assurance (QA) is one of my key responsibilities. Here is a framework of key questions I use to evaluate whether a newly developed AI service is performing as expected.

## Question Categories for Evaluating a RAG-Based AI Service
### 1. Identity and Scope

> This category checks the chatbot's self-awareness and understanding of its own purpose.

#### 1) *"What is your role?"*
- Purpose: To verify the service's identity.
- Reasoning: Since most services cover a specific domain, this is an important question to verify that the service possesses the baseline quality and understands its role as a domain expert.

#### 2) *"What data do you use?"*
- Purpose: To confirm the bot can answer common user questions about its data sources.
- Reasoning: This is one of the most frequent questions from users, making it an essential test before deployment.

#### 3) *"What model do you use?*
- Purpose: To handle user curiosity about the underlying technology.

### 2. Temporal Awareness

> This category tests the chatbot's understanding of time-relative concepts.

#### 1) Testing with expressions like "today," "this year," "the day before yesterday," and "recently."

- Reasoning: Users naturally expect a system to understand common-sense information, so it's crucial to verify if the service has a concept of time.

- Implementation Note: If it fails to recognize the correct date and time, a tool like Flowise's Get Datetime node can be used to provide this capability.

### 3. Core Functionality Questions
- Purpose: This category tests the basic functions the chatbot is expected to perform for its users.

- Examples:
    - "Who is the CEO of [Company Name]?"
    - "What services does [Company Name] provide?"
    - "Can you tell me last year's profit, especially in relation to stock performance?"

### 4. Handling Out-of-Scope Questions
- Purpose: Testing for hallucinations and graceful failures. This involves checking how the service manages questions for which it cannot find a relevant citation in its vector database.

- Example: If the service is specialized in Samsung and web Browse is disabled, a question like "Compare the 2024 profits of Samsung and Apple" should trigger a polite refusal, such as: "I do not have information about other corporations."

### 5. Performance and Complexity
- Purpose: Enhancing user experience by ensuring timely and efficient responses. A user's experience can be ruined if a response takes significantly longer than expected.

- Testing: Therefore, it's necessary to test how long it takes to generate answers for complex queries, how many loops it executes, etc.

- Solutions: The service should be designed to handle these issues by:
    - Defining proper time and loop limits for generating answers.
    - Informing the user about any delays or problems encountered during generation.



