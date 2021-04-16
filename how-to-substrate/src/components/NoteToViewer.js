import React from 'react';
import clsx from 'clsx';
import styles from './Note.css';


export default function NoteToViewer() {
  return (
    <section className={styles.features}>
      <div className="container">
          <div className="text--center padding-horiz--md">
          <h2> 🚧 Note: this is WIP and is by no means an official resource. 🚧</h2>
             <p>
                 Substrate is all about combining <a href="https://substrate.dev/docs/en/knowledgebase/runtime/primitives"> bullet-proof 
             primitives </a> and building on them in ways that offer powerful and robust programmable logic.
             </p>
             
             <p>
                The <strong> Substrate how-to guide book</strong> intends to help new 
                and experienced Substrate developers to do just that. By building things up from simple components, the purpose of this book is to 
                serve as a "how-to" guide for developers looking to understand integration techniques of both simple and more complex capabilities 
                that Substrate and FRAME offers.
            </p>
            </div>       
      </div>
    </section>
  );
}
