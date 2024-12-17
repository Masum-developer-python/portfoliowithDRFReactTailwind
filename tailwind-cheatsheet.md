# Tailwind CSS Comprehensive Cheatsheet

## Layout and Spacing
```css
/* Padding */
p-4        /* Padding on all sides (1rem/16px) */
px-4       /* Horizontal padding */
py-2       /* Vertical padding */
pt-2       /* Padding top */
pr-2       /* Padding right */
pb-2       /* Padding bottom */
pl-2       /* Padding left */

/* Margin */
m-4        /* Margin on all sides */
mx-4       /* Horizontal margin */
my-2       /* Vertical margin */
mt-2       /* Margin top */
mr-2       /* Margin right */
mb-2       /* Margin bottom */
ml-2       /* Margin left */

/* Width and Height */
w-full     /* 100% width */
w-1/2      /* 50% width */
h-screen   /* 100vh height */
min-h-screen  /* Minimum full viewport height */
```

## Flexbox and Alignment
```css
/* Flex Container */
flex        /* Display flex */
flex-col    /* Flex direction column */
justify-center  /* Center items horizontally */
items-center    /* Center items vertically */
space-x-4       /* Space between flex items */

/* Grid */
grid            /* Display grid */
grid-cols-3     /* 3 equal columns */
gap-4           /* Gap between grid items */
```

## Typography
```css
/* Text Size */
text-xs     /* Extra small text */
text-sm     /* Small text */
text-base   /* Base text size */
text-lg     /* Large text */
text-xl     /* Extra large text */
text-2xl    /* 2x large text */

/* Text Alignment */
text-left   /* Left align */
text-center /* Center align */
text-right  /* Right align */

/* Font Weight */
font-thin   /* Lightest weight */
font-normal /* Normal weight */
font-bold   /* Bold text */
```

## Colors
```css
/* Background Colors */
bg-white    /* White background */
bg-black    /* Black background */
bg-gray-100 /* Light gray background */
bg-blue-500 /* Blue background */

/* Text Colors */
text-white  /* White text */
text-black  /* Black text */
text-gray-600  /* Muted gray text */
```

## Responsive Design
```css
/* Responsive Prefixes */
sm:text-lg  /* Apply on small screens */
md:flex     /* Apply on medium screens */
lg:w-1/2    /* Apply on large screens */
```

## Effects and Interactions
```css
/* Hover Effects */
hover:bg-blue-700    /* Background change on hover */
hover:text-gray-200  /* Text color change on hover */

/* Transitions */
transition           /* Basic transition */
transform            /* Enable transformations */
hover:scale-105      /* Slight scale up on hover */

/* Shadows */
shadow               /* Basic shadow */
shadow-md            /* Medium shadow */
```

## Border and Rounding
```css
/* Borders */
border       /* Add border */
border-2     /* Border width */
border-blue-500  /* Border color */

/* Border Radius */
rounded      /* Slight rounding */
rounded-lg   /* Large rounding */
rounded-full /* Completely round */
```

## Practical Example
```jsx
function ExampleComponent() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 
                    hover:shadow-xl transition-shadow 
                    flex flex-col items-center 
                    space-y-2 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-600">
        Tailwind CSS Example
      </h2>
      <p className="text-gray-600 text-center">
        A responsive and interactive component
      </p>
    </div>
  )
}
```

## Pro Tips
1. Use responsive prefixes (sm:, md:, lg:) for different screen sizes
2. Combine classes for complex styling
3. Prefer utility classes over custom CSS
4. Learn common class patterns to build quickly
