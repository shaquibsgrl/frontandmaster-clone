
function allPopularcourses(data, container) {

    data.forEach(el => {

        let div1 = document.createElement("div");
        div1.id = "div1";


        //for image div is created
        let div2 = document.createElement("div");
        div2.id = "div2";

        let bimage = document.createElement("img");
        bimage.id = "bimage"
        bimage.src = el.bgimage;

        div2.append(bimage)


        let div3 = document.createElement("div");
        div3.id = "div3";

        //div for heading
        let div3a = document.createElement("div");
        div3a.id = "div3a";
        let head = document.createElement("h2");
        head.innerText = el.title;

        div3a.append(head)


        //outer div for image and name to get append

        let div3b = document.createElement("div");
        div3b.id = "div3b";
        // div3b.style="display:flex";
        //div for image

        let div3b1 = document.createElement("div");
        div3b1.id = "div3b1"

        let pimage = document.createElement("img");
        pimage.id = "pimage";
        pimage.src = el.image;

        //appending image in div3b1
        div3b1.append(pimage)

        //div for name and comapany
        let div3b2 = document.createElement("div");
        div3b2.id = "div3b2";

        let name = document.createElement("p");
        name.innerText = el.name;
        //append 
        let company = document.createElement("p");
        company.id = "company";
        company.innerText = el.company;

        div3b2.append(name, company)

        div3b.append(div3b1, div3b2);


        //------------------------->

        let div3c = document.createElement("div");
        div3c.id = "div3c";

        let about = document.createElement("p");
        about.innerText = el.about;
        div3c.append(about)//appending for text

        let div3d = document.createElement("div");
        let time = document.createElement("p");
        time.id = "time"
        time.innerText = el.time;
        div3d.append(time)//appending for time




        let div3e = document.createElement("div");
        div3e.id = "div3e";

        let button1 = document.createElement("button");
        button1.id = "button1";
        button1.textContent = "Watch Free Preview";

        button1.addEventListener("click", function () {
            window.location.href = "coursesnew.html"
        })



        let button2 = document.createElement("button");
        button2.id = "button2";
        button2.textContent = "Get Full Access";
        button2.addEventListener("click", () => {
            window.location.href = "pricing.html"
        })

        div3e.append(button1, button2);



        div3.append(div3a, div3b, div3c, div3d, div3e)

        div1.append(div2, div3)

        container.append(div1)


    });

}

export { allPopularcourses }


// var AllPopularcourses = [

//     {
//         title: "A Tour of Web 3: Ethereum & Smart Contracts with Solidity",
//         image: "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-05-04-complete-react-v6/thumb.webp",
//         name: "ThePrimeagen",
//         company: "Netflix",
//         about: "Web 3 (DApp) applications could change the development landscape. Learn to create and deploy smart contracts on Ethereum with Solidity. Then tackle challenging concepts such as memory layout, delegate calls, and fallback functions.",
//         time:"4 hours, 57 minutes CC ",
//     },
//     {
//         title: "Rapid Application Development with Code Generation",
//         image: "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2022-02-02-rapid-app-dev/thumb.webp",
//         name: "Lukas Ruebbelke",
//         company: "Venmo",
//         about: "Lukas Ruebbelke is a Principle Engineer at Venmo, where he has the greatest job in the world. Lukas gets to spend his entire time mentoring and training developers to be effective and build things that people care about. Lukas is also a Google Developer Expert, published author, conference speaker, event organizer, etc. His spirit animal is a red bull.",
//         time:"3 hours, 48 minutes CC ",
//     },
//     {
//         title: "Angular 13 Fundamentals",
//         image: "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2022-02-01-angular-13/thumb.webp",
//         name: "Lukas Ruebbelke",
//         company: "Venmo",
//         about: "Learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll move on to Angular core concepts like components, templates, routing, forms, server-side communication, and more.",
//         time:"6 hours, 52 minutes CC",
//     },
//     {
//         title: "Rx.js Fundamentals",
//         image: "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2022-01-25-rx-js/thumb.webp",
//         name: "Steve Kinney",
//         company: "Temporal",
//         about: "Learn the foundation of Rx.js by creating an observable from scratch, manipulate data arriving over time with Rx.js operators, and build up to orchestrating multiple API requests to craft complex asynchronous experiences.",
//         time:"3 hours, 57 minutes CC",
//     },
//     {
//         title: "Build Progressive Web Apps (PWAs) from Scratch",
//         image: "https://static.frontendmasters.com/assets/teachers/firtman/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2022-01-11-pwas/thumb.webp",
//         name: "Maximiliano Firtman",
//         company: "Independent Consultant",
//         about: "Build offline-capable Progressive Web Apps with HTML, CSS, and JavaScript: Service workers give you access to the cache storage while App Manifests allow you to be distributed on the Google Play store and Apple App Store.",
//         time:"3 hours, 48 minutes CC",
//     },
//     {
//         title: "State Machines in JavaScript with XState, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/khourshid/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-12-21-xstate-v2/thumb.webp",
//         name: "David Khourshid",
//         company: "Microsoft",
//         about: "Learn the fundamentals of state machines and statecharts. You'll build state machines without any libraries in pure JavaScript, then use XState to take advantage of a wide variety of other features.",
//         time:"4 hours, 8 minutes CC",
//     },
//     {
//         title: "Getting Started with CSS",
//         image: "https://static.frontendmasters.com/assets/teachers/kramer/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-12-14-getting-started-css/thumb.webp",
//         name: "Jen Kramer",
//         company: "Freelance Instructor",
//         about: "Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course!",
//         time:"3 hours, 19 minutes CC",
//     },
//     {
//         title: "Web Audio Synthesis & Visualization",
//         image: "https://static.frontendmasters.com/assets/teachers/deslauriers/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/teachers/deslauriers/thumb.webp",
//         name: "Matt DesLauriers",
//         company: "Freelancer",
//         about: "Learn to create sounds using nothing but code! Synthesize and visualize audio, and add fun effects with JavaScript. Use these skills to build audio into games, web applications, or even art projects in the browser.",
//         time:"3 hours, 2 minutes CC",
//     },
//     {
//         title: "Web UX Design for High Converting Websites",
//         image: "https://static.frontendmasters.com/assets/teachers/boag/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-11-23-ux-design-principles/thumb.webp",
//         name: "Paul Boag",
//         company: "Boagworld",
//         about: "Can a website that encourages users to act be created without dark patterns? Well, it turns out, yes, it can! Learn to make websites more engaging through good design, fascinating content, and solid UX in this course by Paul Boag.",
//         time:"4 hours, 49 minutes CC",
//     },
//     {
//         title: "Dynamic CSS with Custom Properties (aka CSS Variables)",
//         image: "https://static.frontendmasters.com/assets/teachers/verou/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-11-09-css-variables/thumb.webp",
//         name: "Lea Verou",
//         company: "MIT",
//         about: "Create reusable components without any JavaScript dependencies needed – with only vanilla CSS! Learn how to leverage Custom Properties to improve code reuse, maintainability, and downright enable possibilities that previously required large amounts of hard-to-maintain JavaScript and violated the separation of concerns.",
//         time:"3 hours, 54 minutes CC",
//     },
//     {
//         title: "Intermediate React Native",
//         image: "https://static.frontendmasters.com/assets/teachers/kraman/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-11-02-intermediate-react-native/thumb.webp",
//         name: "Kadi Kraman",
//         company: "Formidable",
//         about: "Learn how to persist data across app launches, add images to your React Native app, use gestures, add animations and much more!",
//         time:"4 hours, 18 minutes CC",
//     },
//     {
//         title: "CSS Grid & Flexbox for Responsive Layouts, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/kramer/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-10-26-css-grid-flexbox-v2/thumb.webp",
//         name: "Jen Kramer",
//         company: "Freelance Instructor",
//         about: "Learn the essential CSS layout techniques for building responsive, beautiful websites. You'll use CSS Grid and Flexbox along with responsive images to build out real-world web layouts!",
//         time:"5 hours, 49 minutes CC",
//     },
//     {
//         title: "Developer Productivity",
//         image: "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-10-19-developer-productivity/thumb.webp",
//         name: "ThePrimeagen",
//         company: "Netflix",
//         about: "Build a pro dev workflow that will increase your productivity across multiple machines, projects, and technologies. Setup your computer quickly with Ansible, use git worktrees, save time using tmux, and other tools that can help you be more productive.",
//         time:"4 hours, 17 minutes CC",
//     },
//     {
//         title: "Complete Intro to Real-Time",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-10-08-realtime/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Build apps where the client can push messages to the server and talk in real-time! You’ll start by learning long polling with Vanilla JavaScript and Node.js, then open web sockets by hand, and finally, you’ll learn some excellent web socket abstractions with SocketIO. You’ll learn back off and retry strategies along the way, as well as use HTTP2 push in the browser!",
//         time:"3 hours, 25 minutes CC",
//     },
//     {
//         title: "Intermediate Gatsby, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-09-23-intermediate-gatsby-v2/thumb.webp",
//         name: "Jason Lengstorf",
//         company: "Netlify",
//         about: "Use Gatsby’s APIs to handle advanced use cases like handling custom data and dynamic pages, client-only routes and protected routes, and customizing Gatsby’s schema and GraphQL API data.",
//         time:"3 hours, 54 minutes CC",
//     },
//     {
//         title: "Intermediate Gatsby, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-09-23-intermediate-gatsby-v2/thumb.webp",
//         name: "Jason Lengstorf",
//         company: "Netlify",
//         about: "Code a full blog web app in Gatsby. Use GraphQL in Gatsby for storing and retrieving data, create pages and posts with MDX, optimize your images automatically with the gatsby-image, and deploy your brand new blog website to Netlify!",
//         time:"4 hours, 4 minutes CC",
//     },
//     {
//         title: "Intermediate TypeScript",
//         image: "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
//         name: "Mike North",
//         company: "LinkedIn",
//         about: "TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
//         time:"2 hours, 48 minutes CC",
//     },
//     {
//         title: "TypeScript Fundamentals, v3",
//         image: "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
//         name: "Mike North",
//         company: "LinkedIn",
//         about: "TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
//         time:"4 hours, 27 minutes CC",
//     },
//     {
//         title: "Introduction to Node.js, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-07-20-node-js-v2/thumb.webp",
//         name: "Scott Moss",
//         company: "Netflix",
//         about: "Transfer your JavaScript skills to the server-side and level up to a full-stack engineer! By learning the foundations of Node.js, you’ll be able to do a lot more with JavaScript, like creating command-line interfaces and APIs, and interacting with the file system.",
//         time:"4 hours, 51 minutes CC",
//     },
//     {
//         title: "Complete Intro to Computer Science",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-07-06-computer-science-v2/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Even without a traditional computer science background, you’ll be able to learn big computer science topics: Algorithms and Big O Analysis, Recursion, Sorting, Data Structures, AVL Trees, Binary Search Trees, Tree Traversals, and Path Finding.",
//         time:"8 hours, 59 minutes CC",
//     },
//     {
//         title: "Redux Fundamentals (feat. React)",
//         image: "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-06-15-redux-fundamentals/thumb.webp",
//         name: "Steve Kinney",
//         company: "Temporal",
//         about: "Learn the Redux API from scratch, then learn to hook Redux into a React application. Also learn how to extend Redux with various tools from its ecosystem, including Reselect, Immer, and Redux Toolkit, to reduce boilerplate and speed up your development!",
//         time:"4 hours, 41 minutes CC",
//     },
//     {
//         title: "Website Accessibility, v2",
//         image: "https://static.frontendmasters.com/assets/teachers/kuperman/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-06-08-accessibility-v2/thumb.webp",
//         name: "Jon Kuperman",
//         company: "Cloudflare",
//         about: "Audit and fix accessibility issues on any website! Learn keyboard accessibility, focus control & ARIA roles to make sites accessible to screen readers and those with disabilities.",
//         time:"2 hours, 52 minutes CC",
//     },
//     {
//         title: "React and TypeScript",
//         image: "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-05-25-react-typescript/thumb.webp",
//         name: "Steve Kinney",
//         company: "Temporal",
//         about: "Ship React apps with more code confidence using TypeScript! Migrate your app to TypeScript, type simple and advanced React components, and learn all types shipped with React for writing React with TypeScript.",
//         time:"5 hours, 3 minutes CC",
//     },
//     {
//         title: "The Rust Programming Language",
//         image: "https://static.frontendmasters.com/assets/teachers/feldman/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-05-11-rust/thumb.webp",
//         name: "Richard Feldman",
//         company: "NoRedInk",
//         about: "Go from zero Rust knowledge to being able to build your own complete Rust programs! You’ll use Rust’s built-in data types and standard libraries, add-in packages from Rust’s package ecosystem, and dive into Rust-specific concepts like ownership, borrowing, and lifetimes.",
//         time:"4 hours, 42 minutes CC",
//     },
//     {
//         title: "Intermediate React, v3",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-05-04-intermediate-react-v3/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Build scalable React applications while learning React hooks in-depth, CSS-in-JS with TailwindCSS, increase performance with code splitting and server-side rendering, add TypeScript, state management with Redux, test your app with Jest …and more!",
//         time:"6 hours, 7 minutes CC",
//     },
//     {
//         title: "Complete Intro to React, v6",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-05-04-intermediate-react-v3/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Much more than an intro, you’ll build with the latest features in React, including hooks, effects, context, and portals. Learn to build real-world apps from the ground up using the latest tools in the React ecosystem, like Parcel, ESLint, Prettier, and React Router!",
//         time:"5 hours, 41 minutes CC",
//     },
//     {
//         title: "VIM Fundamentals",
//         image: "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-04-20-vim-fundamentals/thumb.webp",
//         name: "ThePrimeagen",
//         company: "Netflix",
//         about: "Learn the basics of editing and navigation in VIM. You'll learn macros, registers, find, and replaces. Finally, edit your vimrc plugins along with quickfix lists and get a demo of ThePrimeagen's ideal VIM workflow!",
//         time:"4 hours, 14 minutes CC",
//     },
//     {
//         title: "Web Assembly (Wasm)",
//         image: "https://static.frontendmasters.com/assets/teachers/young/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-04-07-web-assembly/thumb.webp",
//         name: "Jem Young",
//         company: "Netflix",
//         about: "Learn foundational, low-level programming such as binary, hexadecimal, array buffers, memory management, and unsigned integers. Use AssemblyScript to build and ship Web Assembly modules into your web apps!",
//         time:"3 hours, 43 minutes CC",
//     },
//     {
//         title: "Introduction to Dev Tools, v3",
//         image: "https://static.frontendmasters.com/assets/teachers/kuperman/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-03-30-dev-tools/thumb.webp",
//         name: "Jon Kuperman",
//         company: "Cloudflare",
//         about: "Master built-in dev tools to step through your code with the debugger, audit web page performance, and remove “page jank” when a site isn’t keeping up.",
//         time:"3 hours, 22 minutes CC",
//     },
//     {
//         title: "Web Performance Fundamentals",
//         image: "https://static.frontendmasters.com/assets/teachers/gardner/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-03-23-web-perf/thumb.webp",
//         name: "Todd Gardner",
//         company: "TrackJS",
//         about: "Learn to improve your core web vitals metrics like first contentful paint (FCP), largest contentful paint (LCP), and cumulative layout shift (CLS) in this Web Performance Fundamentals course.",
//         time:"3 hours, 50 minutes CC",
//     },
//     {
//         title: "Deno First Look",
//         image: "https://static.frontendmasters.com/assets/teachers/holland/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-03-16-intro-deno/thumb.webp",
//         name: "Burke Holland",
//         company: "Microsoft",
//         about: "Take a first look at Deno, the new command-line runtime for JavaScript. Secure by default, built on TypeScript, as well as a fresh take on managing dependencies and shipping your apps. Deno has been rebuilt from the ground up based on lessons learned from Node.js.",
//         time:"3 hours, 50 minutes CC",
//     },
//     {
//         title: "3D on the Web & WebXR",
//         image: "https://static.frontendmasters.com/assets/teachers/yonet/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-03-09-3d-webxr/thumb.webp",
//         name: "Ayşegül Yönet",
//         company: "Microsoft",
//         about: "Learn to add 3D experiences to your websites using JavaScript libraries: Three.js, Bablyon.js, and Aframe. And learn the new WebXR device APIs for creating Virtual Reality (VR) and Augmented Reality (AR) experiences on the web.",
//         time:"2 hours, 23 minutes CC",
//     },
//     {
//         title: "Production-Grade Next.js",
//         image: "https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-03-02-production-next/thumb.webp",
//         name: "Scott Moss",
//         company: "Netflix",
//         about: "Build production-ready, full-stack React apps. Add authentication, generate hundreds of pages performantly, preview your content, query a database, and use a CMS with Next.js along with deploying your app to Vercel.",
//         time:"3 hours, 57 minutes CC",
//     },
//     {
//         title: "Production-Grade Vue.js",
//         image: "https://static.frontendmasters.com/assets/teachers/hong/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-02-18-production-vue/thumb.webp",
//         name: "Ben Hong",
//         company: "Netlify",
//         about: "Ben Hong is a Vue.js Core Team member and a Senior Developer Experience (DX) Engineer at Netlify. He is also a developer / psychologist / educator hybrid who is passionate about creating products that help to empower people with new skills and knowledge regardless of their background.",
//         time:"4 hours, 37 minutes CC",
//     },
//     {
//         title: "Functional JavaScript First Steps",
//         image: "https://static.frontendmasters.com/assets/teachers/vakil/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-02-09-functional-first-steps/thumb.webp",
//         name: "Anjana Vakil",
//         company: "Observable",
//         about: "Learn core functional JavaScript programming techniques by coding everything with pure functions, learning recursion, higher-order functions, closures, currying, and function composition. Also, learn how immutable data is essential for functional programming.",
//         time:"3 hours, 54 minutes CC",
//     },
//     {
//         title: "Enterprise Architecture Patterns",
//         image: "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-02-02-enterprise-patterns/thumb.webp",
//         name: "Lukas Ruebbelke",
//         company: "Venmo",
//         about: "Build non-trivial enterprise-level web applications through first-principles thinking applied to programming in JavaScript and TypeScript.",
//         time:"5 hours, 39 minutes CC",
//     },
//     {
//         title: "Production-Grade Angular",
//         image: "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2021-01-19-production-angular/thumb.webp",
//         name: "Lukas Ruebbelke",
//         company: "Venmo",
//         about: "Learn how to structure your projects leveraging Angular CLI and Nx. Create shared modules and apply unit tests and end-to-end testing. Analyze performance and ship your app to production using Docker.",
//         time:"6 hours, 57 minutes CC",
//     },
//     {
//         title: "State Modeling in React with XState",
//         image: "https://static.frontendmasters.com/assets/teachers/khourshid/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-12-29-xstate-react/thumb.webp",
//         name: "David Khourshid",
//         company: "Microsoft",
//         about: "Explore using XState and React together to model state in real-world React apps. State machines make complex application logic visually clear, flexible, and robust.",
//         time:"4 hours, 0 minutes CC",
//     },
//     {
//         title: "Practical Guide to Python",
//         image: "https://static.frontendmasters.com/assets/teachers/zakharenko/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-12-22-practical-python/thumb.webp",
//         name: "Nina Zakharenko",
//         company: "Microsoft",
//         about: "Learn why you might want to use Python and all the foundational basics: data types, numbers, strings, lists, sets, tuples, and dictionaries. You're going to learn how to structure your programs with functions, loops, logic, and objects and end the course using the Django framework.",
//         time:"4 hours, 58 minutes CC",
//     },
//     {
//         title: "Complete Intro to Databases",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-12-08-databases/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "In this course you'll learn the basics of using four of the most popular open-source types of databases: document based database MongoDB, relational database PostgreSQL, graph database Neo4j, and key-value store Redis.",
//         time:"7 hours, 4 minutes CC",
//     },
//     {
//         title: "JavaScript and TypeScript Monorepos",
//         image: "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-11-18-monorepos/thumb.webp",
//         name: "Mike North",
//         company: "LinkedIn",
//         about: "Monorepos have taken the JavaScript world by storm, unlocking powerful new patterns around composition, encapsulation, and ease of maintenance.",
//         time:"3 hours, 46 minutes CC",
//     },
//     {
//         title: "Production-Grade TypeScript",
//         image: "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-11-11-production-typescript/thumb.webp",
//         name: "Mike North",
//         company: "LinkedIn",
//         about: "Use the TypeScript language at scale to increase the developer experience and productivity of your teams! You’ll learn to manage even the most ambitious TypeScript projects with confidence and ease.",
//         time:"5 hours, 10 minutes CC",
//     },
//     {
//         title: "Building Applications with Vue & Nuxt",
//         image: "https://static.frontendmasters.com/assets/teachers/drasner/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-10-27-vue-nuxt-apps/thumb.webp",
//         name: "Sarah Drasner",
//         company: "Netlify",
//         about: "Build dynamic web applications with Vue and Nuxt! Throughout the course you’ll build out a variety of projects leveraging the tools in the Vue ecosystem including the Vue CLI, Nuxt, Vuex Store, and the new Vue 3 Composition API.",
//         time:"4 hours, 14 minutes CC",
//     },
//     {
//         title: "Introduction to Vue 3",
//         image: "https://static.frontendmasters.com/assets/teachers/drasner/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-10-20-vue-3/thumb.webp",
//         name: "Sarah Drasner",
//         company: "Netlify",
//         about: "Learn fundamental concepts in Vue, such as directives, methods, and computed watchers. You’ll learn Vue’s reactivity system and the new Composition API in Vue 3.",
//         time:"4 hours, 57 minutes CC",
//     },
//     {
//         title: "Getting a Front-End Developer Job",
//         image: "https://static.frontendmasters.com/assets/teachers/hardaway/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-10-06-getting-a-job/thumb.webp",
//         name: "Jerome Hardaway",
//         company: "Vets Who Code",
//         about: "Learn how to build a resume, GitHub, and portfolio to create interested employers. Land your first front-end development job through tips in this course!",
//         time:"2 hours, 43 minutes CC",
//     },
//     {
//         title: "Introduction to D3.js",
//         image: "https://static.frontendmasters.com/assets/teachers/wu/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-09-25-d3/thumb.webp",
//         name: "Shirley Wu",
//         company: "Data Sketches",
//         about: "Build custom charts with D3.js using data binding with the enter-update-exit pattern. You'll learn scales and to animate between different D3 layouts for building truly interactive charts.",
//         time:"5 hours, 59 minutes CC",
//     },
//     {
//         title: "Introduction to Next.js",
//         image: "https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-09-15-next-js/thumb.webp",
//         name: "Scott Moss",
//         company: "Netflix",
//         about: "Next.js is a complete framework built on top of React.js. You'll learn server-side rendering, static site generation, data fetching, code API endpoints, creating pages with the file system, add CSS modules, and more.",
//         time:"3 hours, 56 minutes CC",
//     },
//     {
//         title: "Introduction to Serverless Functions",
//         image: "https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-08-25-serverless-functions/thumb.webp",
//         name: "Jason Lengstorf",
//         company: "Netlify",
//         about: "Learn to build dynamic web apps without the hassle of setting up or maintaining servers! You'll learn to create serverless functions to load data, process form entries securely, handle authentication, and more.",
//         time:"2 hours, 58 minutes CC",
//     },
//     {
//         title: "Complete Intro to Linux and the Command-Line",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-08-17-linux-command-line/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Gain powerful command-line skills, learn to use Ubuntu, quit VIM, handle package management, and write your own shell scripts!",
//         time:"6 hours, 48 minutes CC",
//     },
//     {
//         title: "Vuex for Intermediate Vue.js Developers",
//         image: "https://static.frontendmasters.com/assets/teachers/sasidharan/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-08-05-vuex/thumb.webp",
//         name: "Divya S",
//         company: "Netlify",
//         about: "This Vuex course is for intermediate Vue.js developers who want to master patterns for managing state in your applications with Vuex.",
//         time:"3 hours, 15 minutes CC",
//     },
//     {
//         title: "Svelte",
//         image: "https://static.frontendmasters.com/assets/teachers/harris/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-07-15-svelte/thumb.webp",
//         name: "Rich Harris",
//         company: "New York Times",
//         about: "In the course you’ll learn how Svelte works, how to write svelte components, and take a tour through the entire Svelte API. You’ll also build a complete game!",
//         time:"4 hours, 47 minutes CC",
//     },
//     {
//         title: "Complete Front-End Project: Build a Game",
//         image: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
//         bgimage:"https://static.frontendmasters.com/assets/courses/2020-05-26-front-end-game/thumb.webp",
//         name: "Brian Holt",
//         company: "Stripe",
//         about: "Organize your front-end code, manage application state with state machines, and automate writing better code using tools like ESLint, Parcel, and Prettier.",
//         time:"3 hours, 39 minutes CC",
//     },












// ]

