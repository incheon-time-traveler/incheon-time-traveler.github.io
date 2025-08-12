---
title: Internship | Build a New Rag Pipeline with Flowise version 3.0
date: 2025-08-12 13:15:00 +09:00
categories: [Internship, AI Workflow Builder]
tags: [Flowise, Low-code LLM Platform, AI workflow builder, LLM, RAG, Internship]     # TAG names should always be lowercase
description: Compare Flowise Versions and Building RAG Pipleline with the Newest Version 
---

## Flowise & On This Page
![Showing Flowise workflow UI](https://docs.flowiseai.com/~gitbook/image?url=https%3A%2F%2F823733684-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F00tYLwhz5RyR7fJEhrWy%252Fuploads%252FK5NWsHkLAelZq9sBlY8x%252FFlowiseIntro.gif%3Falt%3Dmedia%26token%3Dea75ba7b-32fa-447d-8872-41fe5578fe1f&width=400&dpr=3&quality=100&sign=35a65986&sv=2)_GIF From Flowise Official Docs_

Flowise is a low-code LLM platform, which is used in a AI workflow builder of a company where I work.
Since the Flowise version is updated from 2.3.3 to 3.0.0, I felt it is necessary to acquire new functions. I am going to review some differences between those two versions and re-build RAG pipeline based on the newest version.
Therefore, this is a post to compare different versions and record some basic concepts to understand nodes in Flowise.

## Basic Nodes
### Structured Output Parser
I was wondering if I can handle the Flowise node output format because it is possible with codes, for example, `response_format={"type": "json_object"}` can be added to `client.chat.completions.create` method.
I was not able to find the way in the internship company's official docs but I found the solution.
Using `Structured Output Parser` makes similar result like setting `rresponse_format={"type": "json_object"}`. 

For example, if you want to make your prompt's result in an exact json format, you can set the format like this:

```json
{
    "your_key": "your_value"
}
```
