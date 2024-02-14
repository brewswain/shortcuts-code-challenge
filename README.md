# UPDATE

Upon further discussion with Jason, I created a separate branch, `border-animation` , that has the completed border-animation included. Please note that I left the gradient itself to just go from transparent to white back to transparent instead of fitting the complete design parity. This was purposefully done, since I wanted emphasis on the animation's implementation instead, but I included some comments that should let you customize the gradient to fit the colour scheme if required.

If you wanna check it out:
`git checkout border-animation`

# Configuration
This project uses `Yarn` as its package manager, and NextJS as its React Framework, so to get started, please copy this command:
- `git clone https://github.com/brewswain/shortcuts-code-challenge.git && cd shortcuts-code-challenge && yarn && yarn dev`

If the command doesn't work as expected, please input these commands one by one:
- `git clone https://github.com/brewswain/shortcuts-code-challenge.git`
- `cd shortcuts-code-challenge`
- `yarn`
- `yarn dev`
  
That should handle everything for you! Once done, please go to :
`localhost:3000` or whatever address is shown here in your terminal:

![image](https://github.com/brewswain/shortcuts-code-challenge/assets/6282435/018109a1-4522-4d87-8081-bb174be38057)



The button should be placed in the middle of your screen:
![image](https://github.com/brewswain/shortcuts-code-challenge/assets/6282435/3c2cf123-99f0-42be-9092-870809dfb2b0)


# Progress Log

## 3:35PM

- Challenge started to recreate this button:
  https://stacksorted.com/buttons/poppr-1

## 4:30PM (About)

- Completed Text Hover effect

## 4:35PM

- Began learning to use framer-motion (bonus vid of how i wasted more time than i should)
  https://www.loom.com/share/1b42e255da844cb697bbdb4bde793518

## 4:53PM

Added Second border that acts as an overlay and will be the one to have the spin effect

## 5:11PM

- Run into 2 blockers
  > 1. div no longer spins on hover but rest of animation works
  > 2. Conceptually, I think the spin effect should be done by using the ::after pseudoselector on our button, and have our animated div have a transparent border, with our ::after containing our gradient info, but i can't figure out how to make the "line" effect instead of just having one long gradient for the border.

## 5:17PM

- Removed the prop that was preventing our animation from starting (`initial: "hover"`), researching border effect now

## 5:19PM

- Hmm.
  https://www.loom.com/share/a23f311446a64d1da08bed75ffb81fe4

## 5:21PM

- Began thinking about using border length for animation

## 5:33PM

- Created a css file that began to show concept for getting our border animation to work before we'd convert it into framer-motion animation, but ran out of time.
- Left our spinning border in since it was silly
