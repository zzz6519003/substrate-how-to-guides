# Substrate Tutorial Contribution Guidelines

This document outlines the requirements for submitting a Substrate tutorial, catered to bounty hunters and other contributors looking to improve existing 
tutorial content. There are 3 overall requirements to follow: an introduction page, the step-by-step sections and a working solution with helper incomplete code if applicable.  

## 1. Tutorial introduction page

Each tutorial should start with an introduction of what the tutorial will cover and build. This should be a separate page with:

- The **title** of the tutorial followed by a short sentence indicating the tutorial's level (_beginner, intermediate or advanced_) and the amount of time it should take to complete.
- **An "Introduction" section** - this intoduces the motivation for the tutorial, containing a "What we're building" section and a detailed overview of each part of the tutorial.
- **A "Learning outcomes" section** - this clearly states what someone will learn from completing the tutorial.

## 2. Structure 

Some tutorials will require breaking up content into multiple parts over separate pages, while others may be short and more suitable for a single page. 
It is reccommended to break a tutorial into parts if it exceeds 5 distinct steps.

Either way, every "page" or "part" share a common structure following this exact order:

>  **Title** - the title of the part or page.
>
>  **Overview** - a description of what concepts this part covers and what will be built.
>
>  **Learning outcomes** - a bulleted list of the learning outcomes of this part, clearly defined.
>
>  **Steps** - numbered steps with clear titles for each step.
>
>  **Next steps** - (if applicable) a bulleted list of what the next part will cover.

## 3. Codebase and solution

There are several ways to approach this requirement, depending on the nature of the tutorial being written and how advanced each is designed to be.

Some tutorials could use the Node Template as a starting point and **instruct** what to modify.

Others may want to provide **helper files with incomplete code** and refer to code snippets to paste in or indicate what to add and where.

Others may be a little more advanced and teach **how something works without providing the code**, only indicating where and why its needed. 

These are the guidelines to follow, no matter the type of tutorial:

- The final codebase must exist somewhere for anyone to be able to cross check their solution.
- Helper files should be linked from the "Tutorial Introduction page" and each part must clearly indicate which helper file it corresponds to.
