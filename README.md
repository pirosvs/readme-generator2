# readme-generator2

## Example
(video source here)
<iframe src="https://drive.google.com/file/d/1Vw33WqyBXgZrCQeRICt3dSAyFnKy43EL/view?usp=sharing" title ="Demonstration video"></iframe>

## Table of Contents
- [Description](#description)
- [Credit](#credit)
- [License](#license)

## Description
<img src="" alt=""/>

This project allows for the user to generate a simple yet professional readme file by answering a few questions in their terminal. A well-written readme is a must for any developper, as this is one of the primary methods of explaining to potential users what their product does, how to use it, and how it works. [sure some people who know how to code could stare at your code for however long and figure out how to use it or how its working but not everyone can do that and why waste the time when instead you could just write a useful readme]

Languages used in this project include JavaScript and some HTML. Node is also used along with the fs to create and write the readme file and Inquirer to facilitate the question-response portion. Inquirer runs our questions in the user's terminal, JavaScript and template literals are used to create the look of the readme file, and fs is used to create the actual file itself, using the user's responses to the questions.

So, we have a question, such as 
```
inquirer
  .prompt([

    // Title header
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },
```
And we can take that response and using our name as the section of the data we need to create the header of the readme using a template literal, such as 
```
return `# ${data.title}
```
Which should show up the same way as our title here does in the new file they've created.

## Credit
Credit to Manan (manan1995?) with AskBCS for helping me understand why my code wasn't running correctly, Adam (adamjabundis) for helping me fix my license functions and section to appear correctly and explain why things weren't pulling data correctly, and to all the people who tried to help me understand what exactly was wanted for the initializing feature both in my cohort and my personal life, especially my housemate Lyra who actually managed to explain what was being asked and why in a way that made sense to me.

## License
This project falls under the MIT license.

## Author
Damien Armstrong can be found on: <a href="https://www.linkedin.com/in/damien-armstrong-412319138/">Linkedin</a>, <a href="https://github.com/pirosvs">Github</a>