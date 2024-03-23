## The Virtual DOM

- React builds a representation of the browser **Document Object Model or DOM** in memory called the `virtual DOM`. 
- As components are updated, React checks to see if the componentss HTML code in the virtual DOM matches the browser DOM. If a change is required, the browser DOM is updated. If nothing has changed, then no update is performed.This is called the **reconciliation process** and can be broken down into the following steps:

   **Step 1:** The virtual DOM is updated.
 
   **Step 2:** The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.
      
   **Step 3:** The changed elements are updated in the browser DOM.
      
   **Step 4:** The displayed webpage updates to match the browser DOM.

- As updating the browser DOM can be a slow operation, this process helps to reduce the number of updates to the browser DOM by only updating when it is necessary.

- But even with this process, if a lot of elements are updated by an event, pushing the update to the browser DOM can still be expensive and cause slow performance in the web application.

- The React team invested many years of research into solving this problem. The outcome of that research is what's known as the **React Fiber Architecture.**

- The Fiber Architecture allows React to incrementally render the web page. What this means is that instead of immediately updating the browser DOM with all virtual DOM changes, React can spread the update over time. But what does "over time" mean?

- Imagine a really long web page in the web browser. If the user scrolls to the bottom, the top of the web page is no longer visible. The user then clicks a button on the bottom of the web page that updates some text on the top of the web page.

  But the top of the page isn't visible. Therefore, why update it immediately?

  Perhaps there is text currently displayed on the bottom of the page that also updates when the button is clicked. Wouldn’t that be a higher priority to update than the non-visible text?

  This is the principle of the React Fiber Architecture. 

- React can optimize when and where updates occur to the browser DOM to significantly improve application performance and responsiveness to user input. Think of it as a priority system. The highest priority changes, the elements visible to the user, are updated first. While lower priority changes, the elements not currently displayed, are updated later.


[The above passage is taken from the META COURSEA COURSE](https://www.coursera.org/learn/introduction-to-front-end-development/supplement/4TP4s/the-virtual-dom)
