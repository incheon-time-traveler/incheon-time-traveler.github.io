---
title: "[Internship] Build an Agentflow with Flowsie"
date: 2025-08-12 13:15:00 +09:00
categories: [Internship, AI Workflow Builder]
tags: [Flowise, Low-code LLM Platform, AI workflow builder, LLM, RAG, Internship]     # TAG names should always be lowercase
description: An Exploration of a Key Concept in Flowise Agentflow, with a Comparison to LangChain and LangGraph.
---

## Introduction to Flowise
![Showing Flowise workflow UI](https://docs.flowiseai.com/~gitbook/image?url=https%3A%2F%2F823733684-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F00tYLwhz5RyR7fJEhrWy%252Fuploads%252FK5NWsHkLAelZq9sBlY8x%252FFlowiseIntro.gif%3Falt%3Dmedia%26token%3Dea75ba7b-32fa-447d-8872-41fe5578fe1f&width=400&dpr=3&quality=100&sign=35a65986&sv=2)_GIF From Flowise Official Docs_

At my current internship, we use Flowise, a low-code LLM platform that powers our company's AI workflow builder.

Flowise offers two main paradigms: Chatflows and Agentflows, making it essential to understand both. My previous experience involved building a RAG chatbot with Chatflow (v2.3.3). In this post, I will revisit some key concepts from that project while demonstrating how to build an Agentflow.

This post will serve as a guide to understanding the basic nodes and steps required to build an Agentflow.

## Key ChatFlow Nodes for Flowise Workflows
### Structured Output Parser
I wanted to see if I could control the output format of a Flowise node. Programmatically, this is straightforward; for example, with the OpenAI API, you can simply add the `response_format={'type': 'json_object'}` parameter to the `client.chat.completions.create` method.

While this wasn't covered in our internal documentation, I discovered the solution: the Structured Output Parser node. Using this node achieves a similar result to setting the `response_format` parameter.

For example, if you want to ensure your prompt's output is in a specific JSON format, you can define the schema in the parser like this:

```json
{
    "your_key": "your_value"
}
```
## A Key Concept in Agentflow v2: Flow State
**Flow State** is a shared, key-value context that exists only for the duration of a single execution run.
It enables:
    - Explicit data sharing between nodes.
    - Passing data which is conditionally generated.
    - Accessing data between non-adjacent steps in the flow.

#### How it works
- **Initialization**: The state's schema (its structure and keys) is declared in the `Start Node`. All possible keys for the flow state must be defined at this stage.
- **Read / Update**: Any node in the flow can read from or update the values of the keys defined in the flow state.
- **Immutability of Keys**: New keys cannot be created during the execution; only the values of pre-defined keys can be updated.
- **Maintaining State**: The updated state is available until the end of the execution run.

#### Comparison with Other State Management Approaches
1. Langchain
    - Separates state management into two concepts: `State` and `Memory`.
        - `State`: Manages the current conversational turn or immediately relevant information.
        - `Memory`: Stores long-term information about the user, such as their profile and past conversations.
    - Common Memory Modules: Includes `ConversationBufferMemory`, `ConversationSummaryMemory`, `Redis`
        - e.g., `BufferMemory` stores the entire conversation history, while `SummaryMemory` stores a condensed, summarized version.
    - Code Example:
        ```python
            memory = ConversationBufferMemory()
            chain = ConversationChain(llm=llm, memory=memory)
        ```

2. LangGraph (and similar Agent Framework)
    - Use a central state object, often defined as a dictionary or a typed class (like Python's `TypedDict`)
        ```python
            class State(TypedDict):
                messages: list  # chatting message list
                name: str       # user info
                birthday: str   # additional information
        ```
    - Each node in the graph receives the current state and can return an updated version, managing the entire flow of data.
    - This approach also naturally supports features like Human-in-the-loop, where execution can be paused for user input.


