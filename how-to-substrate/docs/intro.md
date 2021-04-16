---
sidebar_position: 1
---
# Welcome
_Hello Substrate runtime engineer!_
## Guidelines

Each guide contains various links to [Knowledge Base](https://substrate.dev/docs/en/) key terms and other [Developer hub](https://substrate.dev/en/) ressources. Most beginner guides link to other intermediate or advanced guides that use the foundations from the more basic guides they build on. In this way, this book aims to become a modular and extensible framework that:
- can expand overtime, by virtue of the ease for contributors to integrate new content that follows these linking guidelines and structure;
- provides an indispensible collection of guides for developers of all levels building with Substrate;
- connects related resources from the developer hub, including documentation and knowledge base article.

The following points touch on the approach for building content for the Substrate How-to Guides ressource.

- :black_medium_square: **Modularity**. This means that devhub ressources need to be linked in a way that they can adapt to change: each piece needs to be a standalone guide that has a well-defined and useful focus. Last, they need to be able to handle changes to Substrate in a way that offers a path of least resistance when implementing those changes.
- :link: **Linking**. *TBD how exactly each "link type" is differentiated from one another.* What matters is where ever there's a link, it's clear where it will take the reader, whether colors or marked, for e.g. "this link (Knowledge base)".
- :play_or_pause_button: **Examples**. Here's the part for "examples on how to actually put this guide to use". Each example links to the "Substrate How-to Guide" codebase hosted in Playground, which contains a collection of pallets and runtimes showing eacg guides' implemention in practise. 
- :satellite: **References.** At the end of each recipe, developers can see a list of related ressources. Here is where all related Knowledge Base links go; Rust docs; as well as links to any other related guides.
- :stop_button: **Avoid repetition.** If there's something that needs to be included in one guide and can be abstracted to a completely separate guide, abstract it and link to it instead of repeating that content. This ties into the modularity aspect too.

**Note for future:** *It would be nice to have a way to capture feedback on each guide by having an easy way for readers to rate their usefulness.*

## FAQ

**What is the difference between a "how-to guide" and a tutorial?** 

A **how-to guide** is an in-depth guide intended for someone who is assumed to have prior Substrate knowledge on how to achieve a specific goal. Information inside a guide is only pertinent to achieving that goal. Anything else is irrelevant.

A **tutorial** is a lesson to teach someone how to achieve something assuming they have no prior knowledge on the subject. They contain more details on the subject; cover breadth (vs. how-to guides which cover depth); and can repeat information across other tutorials.

