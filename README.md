Etch-a-Sketch - This is my solution to the Etch-a-Sketch project for The Odin Project's Foundations course. I built this to practice DOM manipulation, event handling, and managing state in JavaScript. It was a challenging project because, as I added more features like the opacity toggle, I realized how much new features can break existing ones—forcing me to get much better at debugging.

How It Works:
You can set the grid size (up to 100x100) via a prompt, which clears the old board and generates a new one.

By default, it draws in a solid color. If you click the OPACITY button, the pen switches to a progressive mode where each hover darkens the square by 10% until it reaches full opacity.

I included an Eraser (which resets the square to the background color) and a Clear button (which wipes the entire board).

I used a "decoy" button strategy for the color picker. I hid the default browser color input and used an HTML label styled exactly like my other buttons, which allowed me to center it and make the design look uniform.

if you click RGB button it henerates a random hexadecimal color every time the mouse enters a new square, creating a rainbow effect.

Takeaways:
I learned that browsers handle input type="color" very differently depending on the OS, and it’s impossible to center them properly. I learned to hide the native input entirely and use a label as a decoy to get the exact styling I wanted.

Using dataset.passes was my first real experience attaching data directly to DOM elements. It was the perfect way to track how many times a user hovered over a specific box so I could calculate the correct opacity.

My biggest challenge was realizing that adding new drawing modes broke my existing buttons when switching between them. I learned that when activating one mode, you must explicitly turn the other modes off. This ensures they don't overlap and prevents unexpected side effects when switching between tools.

I decided to add my own Erase and Clear functionality because the project felt incomplete without them. Solving the logic for those tools taught me more about DOM manipulation, and I’m proud that I managed to get them to work alongside the opacity logic without any bugs.

When building the RGB button, I initially made the mistake of attaching a new mouseenter event listener to the grid every time the button was clicked. I quickly learned this is a bad idea, it creates a "listener trap" where multiple functions stack up on the same element and run simultaneously. I fixed this by refactoring my code to use a single event listener per square that acts as a "central brain."