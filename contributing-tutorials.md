# Substrate Tutorial Contribution Guidelines

This document outlines the requirements for submitting a Substrate tutorial, catered to bounty hunters and other contributors looking to improve existing 
tutorial content. There are 3 overall requirements to follow: an **introduction page**, the **step-by-step sections** and **a working solution** with helper incomplete code if applicable.  

Tutorials in Substrate's developer hub follow these general guidelines, inspired by the [Divio Documentation System](https://documentation.divio.com):

- **Learn by doing:** any explanations must only be articulated if they are relevant to what the learner is doing.
- **Inspire confidence:** the learner has and immediate sense of achievement without any distraction.
- **Ensure repeatability:** each series of steps must be easily reproduced and lead to the same results as depicted by the outcomes of the tutorial.
- **Be specific:** a tutorial must have a very specific scope and outcome.

## 1. Tutorial introduction page

Each tutorial should start with an introduction page, detailing what the tutorial will cover. This should be a separate page with:

- The **title** of the tutorial followed by the tutorial's level (_beginner, intermediate or advanced_) and the amount of time it should take to complete.
- **An "Introduction" section** - this intoduces the motivation for the tutorial and provides a description of what the tutorial will cover.
- A **"What you will be doing"** section, with one or two short sentances on what the tutorial steps will include.
- **A "Learning outcomes" section** - this clearly states what someone will learn from completing the tutorial.

## 2. Structure of individual parts 

Some tutorials will require breaking up content into multiple parts over separate pages, while others may be short and more suitable for a single page. 
It is reccommended to break a tutorial into parts if it exceeds 5 distinct steps.

Either way, every "page" or "part" share a common structure following this exact order:

>  **Title** - the title of the part or page.
>
>  **Overview** - a description of what concepts this part covers and what will be built.
>
>  **Steps** - numbered steps with clear titles for each step.
>
>  **Next steps** - (if applicable) a bulleted list of what the next part will cover, or if this is the last part, have a "learn more" subsection with ressources to continue learning.

## 3. Codebase and solution

There are several ways to approach this requirement, depending on the nature of the tutorial being written and how advanced each is designed to be. Some ways include:

- Using the Node Template as a starting point and **instructing** what to modify. For example, this is done in the [Add a Pallet tutorial](https://substrate.dev/docs/en/tutorials/add-a-pallet/).

- Providing **helper files with incomplete code** and refer to code snippets to paste in or indicate what to add and where. For example, the Kitties tutorial.

- Teaching **how something works without providing the code**, only indicating where and why its needed. 

No matter the type of tutorial, these are the guidelines to follow:

- The final codebase must exist somewhere for anyone to be able to cross check their solution.
- Helper files should be linked from the "Tutorial Introduction page" and each part must clearly indicate which helper file it corresponds to.
