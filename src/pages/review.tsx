import { Box, Typography } from "@mui/material";
import InfoCard from "../components/info-card";

const Review = () => {
  function sampleFunction() {
    return "";
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        bgcolor: "#ACBFA4",
        padding: 10,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#FF7F11",
          fontFamily: "Space Grotesk",
          fontWeight: "600",
        }}
      >
        Javascript Core Concepts Reviewer
      </Typography>
      <InfoCard
        title="Sample Code Output: "
        description={"" + sampleFunction()}
      />
      <InfoCard
        title="1. JavaScript Fundamentals"
        description="These test whether you understand how
      the language itself works."
        bullets={[
          "Variables: var, let, const ",
          "Data types (primitive vs reference) ",
          "Type coercion",
          "Truthy vs falsy values",
          "Operators (=== vs ==)",
          "Control flow (if, switch, loops)",
        ]}
      />
      <InfoCard
        title="2. Functions"
        description="Functions are extremely important in JavaScript. Example interview question:
      What’s the difference between an arrow function and a regular function?"
        bullets={[
          "Function declarations vs function expressions",
          "Arrow functions",
          "Parameters vs arguments",
          "Default parameters",
          "Higher-order functions",
          "Callbacks",
        ]}
      />
      <InfoCard
        title="3. Scope & Closures "
        description="These concepts come up constantly in interviews. 
         Typical question: What
      is a closure and why is it useful? "
        bullets={[
          "Global scope",
          "Function scope",
          "Block scope",
          "Lexical scope",
          "Closures",
        ]}
      />
      <InfoCard
        title="4. The this Keyword "
        description="Understanding this is critical.
       "
        bullets={[
          "this in global context",
          "this in objects",
          "this in arrow functions",
          "call, apply, bind",
        ]}
      />
      <InfoCard
        title="5. Objects "
        description="JavaScript is fundamentally object-based. 
        "
        bullets={[
          "Object literals",
          "Property access (. vs [])",
          "Methods",
          "Dynamic properties",
          "Object iteration",
        ]}
      />
      <InfoCard
        title="6. Prototypes & Inheritance "
        description="One of the most common interview
      topics.   
      "
        bullets={[
          "Prototype chain",
          "__proto__",
          "Object.create",
          "Constructor functions",
          "Prototypal inheritance",
        ]}
      />
      <InfoCard
        title="7. ES6+ Features "
        description="Modern JS features are frequently tested.      "
        bullets={[
          "Destructuring ",
          "Spread operator",
          "Rest parameters",
          "Template literals",
          "Optional chaining",
          "Nullish coalescing",
          "Modules (import / export)",
        ]}
      />
      <InfoCard
        title="8. Arrays & Array Methods "
        description="Interviewers often ask about array transformations. Must know methods: 
            "
        bullets={[
          "map",
          "filter",
          "reduce",
          "forEach",
          "find",
          "some",
          "every",
          "slice vs splice",
        ]}
      />
      <InfoCard
        title="9. Asynchronous JavaScript "
        description="Very important for real-world JS.  
        "
        bullets={[
          "Callbacks",
          "Promises",
          "async/await",
          "Error handling",
          "Promise chaining",
        ]}
      />
      <InfoCard
        title="10. Event Loop & Concurrency "
        description=" A favorite interview topic. Understand: "
        bullets={[
          "Call stack",
          "Web APIs",
          "Callback queue",
          "Microtasks vs macrotasks",
          "Event loop",
        ]}
      />
      <InfoCard
        title="11. Memory & Copying"
        description=" These show deeper understanding.
          "
        bullets={[
          "Primitive vs reference values",
          "Shallow copy",
          "Deep copy",
          "Object.assign",
          "Spread cloning",
        ]}
      />
      <InfoCard
        title="12. Error Handling "
        description=""
        bullets={["try/catch", "Throwing errors", "Handling async errors"]}
      />
      <InfoCard
        title=" 13. Modules "
        description=" Modern JavaScript architecture.  
        "
        bullets={[
          "export",
          "export default",
          "import",
          "named imports vs default imports",
        ]}
      />
      <InfoCard
        title="14. DOM Basics (if frontend role) "
        description=" Very common in frontend interviews.
          "
        bullets={[
          "Selecting elements",
          "Event listeners",
          "DOM manipulation",
          "Event propagation(bubbling vs capturing)",
        ]}
      />
      <InfoCard
        title="15. Common JavaScript Patterns "
        description="These are common in production code.    "
        bullets={[
          "Immutability",
          "Pure functions",
          "Debounce/throttle",
          "Memoization",
          "Module pattern",
        ]}
      />
      <InfoCard
        title="16. Basic Algorithms with JS "
        description="Most interviews include small coding tasks. Examples:
         
       "
        bullets={[
          "Reverse a string",
          "Find duplicates in an array",
          "Flatten an array",
          "Debounce function",
          "Implement map or reduce",
        ]}
      />
    </Box>
  );
  // JAVASCRIPT FUNDAMENTALS
  // VAR LET CONST
  // // const bloop; //const must be initialized, cannot be reassigned
  // // let floop; //let can be reassigned, not necessary to initialized
  // // floop = "gloop"
  // function sampleFunction() {
  //   // var sample = 5;
  //   // console.log(sample); //hoisted as undefined, (error is only in transcript, runs find after it is transpiled into js)
  //   if (true) {
  //     var sample = 10;
  //     //var is accessible outside of the block it is initialized
  //     //var is function scoped, not block scoped
  //     //var can be reassigned and redeclared
  //   }
  //   return sample;
  // }

  // PRIMITIVE AND REFERENCE TYPES
  // const sampleFunction = () => {
  //   const bloop: string = "hewwo";
  //   const groop: number = 5;
  //   const florp: boolean = true;
  //   const jorp: null = null;
  //   const scropp: undefined = undefined;
  //   const spop: symbol = Symbol("spop");
  //   const biggy: bigint = BigInt(9007199254740991);

  //   const obj1 = { name: "Phil" };
  //   const obj2 = obj1;
  //   obj2.name = "Florg";
  //   const arr1 = [1, 2];
  //   const arr2 = arr1;
  //   arr2[1] = 8;
  //   //printing obj1 properties still returns Flog since both values point to the same object. create a copy of the obj to avoid this, instead of copying the reference
  //   return `Primitive data types: ${bloop} ${groop} ${florp} ${jorp} ${scropp} ${String(spop)} ${biggy} Reference Types: ${obj1.name} ${arr1[1]}`;
  // };

  //TYPE COERCION
  // function sampleFunction() {
  //   const thing = 5;
  //   const fling = "5";
  //   return `${thing + fling}, ${thing - fling}`; // + with strings triggers concat, - triggers numeric conversion
  // }

  //TRUTHY VS FALSY
  // function sampleFunction() {
  //   if (false || 0 || "" || null || undefined || NaN) {
  //     // examples of falsey
  //     return "WEEEWWWOOOOOOOOOO";
  //   } else {
  //     // everything else is truthy
  //     return "ploimp";
  //   }
  // }

  // == vs ===
  // function sampleFunction() {
  //   const glop = 5 == "5"; // true since type coercion happens
  //   const strop = 5 === "5"; //false since types are strictly checked
  //   return "" + glop + strop;
  // }

  //CONTROL FLOW
  // function sampleFunction() {
  //   const age = 19;
  //   const status = age > 18 ? "Adult" : "Minor";
  //   const thorp = ["grlo", "smo", "cro"];
  //   switch (status) {
  //     case "Adult":
  //       console.log("ploop");
  //       break;
  //     case "Minor":
  //       console.log("plrep");
  //       break;
  //   }
  //   for (let i = 0; i < 5; i++) {
  //     console.log(i);
  //   }
  //   for (const item of thorp) {
  //     console.log(item);
  //   }
  //   if (age > 18) {
  //     return "Adult" + status;
  //   } else {
  //     return "Child" + status;
  //   }
  // }
};

export default Review;
